// Renders the color, logo, and type sections of both pages from brand-kit.json,
// so the JSON stays the single source of truth.
(async function () {
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  };

  let kit;
  try {
    kit = await (await fetch("brand-kit.json", { cache: "no-cache" })).json();
  } catch (err) {
    document.querySelectorAll("[data-render]").forEach((target) => {
      target.textContent = "Could not load brand-kit.json. Open this page through a web server, not as a local file.";
    });
    return;
  }

  // Repo links
  const repo = kit.brand.repository;
  document.querySelectorAll("[data-repo]").forEach((link) => {
    link.href = "https://github.com/" + repo + (link.dataset.repo === "zip" ? "/archive/refs/heads/main.zip" : "");
  });

  // Toast for copy-to-clipboard
  const toast = el("div", "toast");
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  let toastTimer;
  const say = (msg) => {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1400);
  };

  const luminance = (hex) => {
    const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  const textOn = (c) => c.text_on || (luminance(c.hex) > 0.3 ? "#1D1D1D" : "#FFFFFF");

  function swatch(c, detail) {
    const card = el("button", "swatch");
    card.type = "button";
    card.title = "Copy " + c.hex;
    const chip = el("div", "chip");
    chip.style.background = c.hex;
    chip.style.color = textOn(c);
    if (luminance(c.hex) > 0.85) chip.style.borderBottom = "1px solid var(--line)";
    if (detail) chip.textContent = c.group ? c.group.toUpperCase() : "Aa";
    const meta = el("div", "meta");
    meta.append(el("div", "name", c.name), el("div", "hex", c.hex));
    if (detail) {
      const lines = [];
      if (c.rgb) lines.push("RGB " + c.rgb.join(", "));
      if (c.cmyk) lines.push("CMYK " + c.cmyk.join("/"));
      if (c.pantone) lines.push("Pantone " + c.pantone);
      if (c.note || c.pantone_note) lines.push("\u26A0 See note in brand-kit.json");
      if (lines.length) {
        const sub = el("div", "sub");
        lines.forEach((line) => sub.append(el("div", null, line)));
        meta.append(sub);
      }
    }
    card.append(chip, meta);
    if (c.note) card.title = c.note;
    card.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(c.hex);
        say("Copied " + c.hex);
      } catch (err) {
        say(c.hex);
      }
    });
    return card;
  }

  const brandColors = [kit.colors.primary, ...kit.colors.palette];

  const colorsTarget = $('[data-render="colors"]');
  if (colorsTarget) brandColors.forEach((c) => colorsTarget.append(swatch(c, true)));

  const neutralsTarget = $('[data-render="neutrals"]');
  if (neutralsTarget) kit.colors.web_neutrals.scale.forEach((c) => neutralsTarget.append(swatch(c, false)));

  const semanticTarget = $('[data-render="semantic"]');
  if (semanticTarget) {
    ["success", "info", "warning", "danger"].forEach((key) => {
      const name = key[0].toUpperCase() + key.slice(1);
      semanticTarget.append(swatch({ name, hex: kit.colors.semantic[key].toUpperCase() }, false));
    });
  }

  // Logos
  const logosTarget = $('[data-render="logos"]');
  if (logosTarget) {
    const groups = [["full_logo", "Full Logo"], ["full_logo_stacked", "Full Logo, Stacked"], ["simple_logo", "Simple Logo"], ["logo_mark", "Logo Mark"]];
    groups.forEach(([key, label], groupIndex) => {
      const stages = groupIndex === 0
        ? { light: ["#1D1D1D", kit.colors.primary.hex], dark: ["#FFFFFF", "#FAF1E8"] }
        : { light: ["#1D1D1D"], dark: ["#FFFFFF"] };
      const group = kit.logos[key];
      logosTarget.append(el("h3", null, label));
      logosTarget.append(el("p", "lede", group.description));
      const grid = el("div", "logos");
      ["light", "dark"].forEach((variant) => {
        stages[variant].forEach((bg) => {
          const card = el("div", "logo");
          const stage = el("div", "stage");
          stage.style.background = bg;
          const img = el("img");
          img.src = group[variant];
          img.alt = label + ", " + variant + " variant";
          stage.append(img);
          const meta = el("div", "meta");
          meta.append(el("div", "name", label + " — " + (variant === "light" ? "Light" : "Dark")));
          const file = el("a", "file", group[variant]);
          file.href = group[variant];
          file.setAttribute("download", "");
          const tags = el("div", "tags");
          tags.append(el("span", null, variant.toUpperCase()), el("span", null, "SVG"), el("span", null, "ON " + bg));
          meta.append(file, tags);
          card.append(stage, meta);
          grid.append(card);
        });
      });
      logosTarget.append(grid);
    });
  }

  // Sub-brands
  const subTarget = $('[data-render="sub-brands"]');
  if (subTarget) {
    ["kidside", "nsm", "young_adults"].forEach((key) => {
      const sb = kit.sub_brands[key];
      const block = el("div", "subbrand");
      block.id = key.replace("_", "-");
      block.append(el("h3", "subbrand-title", sb.full_name));
      block.append(el("p", "lede", sb.audience + ". Source: " + sb.source));

      const sw = el("div", "swatches");
      sb.colors.forEach((c) => sw.append(swatch(c, true)));
      block.append(sw);
      if (sb.color_names_note) block.append(el("p", "note", sb.color_names_note));
      sb.colors.filter((c) => c.note).forEach((c) => block.append(el("p", "note", c.name + ": " + c.note)));

      const grid = el("div", "logos");
      sb.logos.forEach((logo) => {
        const card = el("div", "logo");
        const stage = el("div", "stage");
        stage.style.background = logo.on === "dark" ? sb.stage : "#FFFFFF";
        const img = el("img");
        img.src = logo.file;
        img.alt = sb.full_name + " logo: " + logo.name;
        img.loading = "lazy";
        stage.append(img);
        const meta = el("div", "meta");
        meta.append(el("div", "name", logo.name));
        const file = el("a", "file", logo.file);
        file.href = logo.file;
        file.setAttribute("download", "");
        const tags = el("div", "tags");
        tags.append(el("span", null, logo.file.split(".").pop().toUpperCase()), el("span", null, "FOR " + logo.on.toUpperCase() + " BACKGROUNDS"));
        meta.append(file, tags);
        card.append(stage, meta);
        grid.append(card);
      });
      block.append(grid);
      if (sb.logos_needs_review) block.append(el("p", "note", sb.logos_needs_review));

      const cols = el("div", "cols");
      const type = el("div", "panel");
      type.append(el("h4", null, "Typography"));
      const typeList = el("ul");
      sb.typography.forEach((t) => typeList.append(el("li", null, t.name + " (" + t.weights.join(", ") + "). " + t.role)));
      type.append(typeList);
      const rules = el("div", "panel dont");
      rules.append(el("h4", null, "Logo rules"));
      const ruleList = el("ul");
      [sb.logo_rules.clearspace.replace("Half", "Keep half"), "Minimum size: " + sb.logo_rules.minimum_size.replace("Full logo: ", "full logo "), ...sb.logo_rules.donts]
        .forEach((r) => ruleList.append(el("li", null, r)));
      rules.append(ruleList);
      cols.append(type, rules);
      block.append(cols);
      subTarget.append(block);
    });
  }

  // Typography
  const typeTarget = $('[data-render="type"]');
  if (typeTarget) {
    kit.typography.families.forEach((family, index) => {
      const card = el("div", "type");
      card.append(el("span", "eyebrow", family.name));
      const sample = el("div", "sample", index === 1 ? "CONNECTING PEOPLE TO JESUS" : "Connecting People to Jesus");
      sample.style.fontFamily = family.css_stack;
      sample.style.fontWeight = "700";
      card.append(sample, el("p", "role", family.role + " " + family.notes));
      card.append(el("p", "small", "Weights: " + family.weights.join(", ")));
      typeTarget.append(card);
    });
  }

  // Simple lists
  document.querySelectorAll("[data-list]").forEach((list) => {
    const items = list.dataset.list.split(".").reduce((obj, key) => (obj ? obj[key] : null), kit);
    (items || []).forEach((item) => list.append(el("li", null, item)));
  });

  // The sections above are built after load, so re-apply a #link once they exist.
  if (location.hash.length > 1) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();
