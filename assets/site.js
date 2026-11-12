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
    if (detail) chip.textContent = "Aa";
    const meta = el("div", "meta");
    meta.append(el("div", "name", c.name), el("div", "hex", c.hex));
    if (detail) {
      const lines = [];
      if (c.rgb) lines.push("RGB " + c.rgb.join(", "));
      if (c.cmyk) lines.push("CMYK " + c.cmyk.join("/"));
      if (c.pantone) lines.push("Pantone " + c.pantone);
      if (lines.length) {
        const sub = el("div", "sub");
        lines.forEach((line) => sub.append(el("div", null, line)));
        meta.append(sub);
      }
    }
    card.append(chip, meta);
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
    const groups = [["full_logo", "Full Logo"], ["logo_mark", "Logo Mark"]];
    const stages = { light: ["#1D1D1D", kit.colors.primary.hex], dark: ["#FFFFFF", "#FAF1E8"] };
    groups.forEach(([key, label]) => {
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
})();
