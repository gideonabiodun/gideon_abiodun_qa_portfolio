(function () {
  "use strict";
  const S = SITE, L = S.links;
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isPh = (t) => typeof t === "string" && t.trim().startsWith("[");
  // Render text; placeholders get a dashed style, or are hidden when showPlaceholders is false
  const txt = (t) => (isPh(t) ? (S.showPlaceholders ? `<span class="ph">${esc(t)}</span>` : "") : esc(t));
  const li = (t) => { const h = txt(t); return h ? `<li>${h}</li>` : ""; };
  const tags = (a) => a.map((t) => `<span class="tag">${esc(t)}</span>`).join("");

  // Header, hero, about
    $("footYear").textContent = new Date().getFullYear();
  $("heroTitle").textContent = S.person.title;
  $("heroTagline").textContent = S.person.tagline;
  $("heroIntro").textContent = S.person.intro;
  $("cvBtn").href = L.cv;
  $("aboutPhoto").src = S.person.photo;
  $("aboutPhoto").alt = S.person.photoAlt;
  $("aboutText").innerHTML = S.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("stats").innerHTML = S.stats.map((s) => `<div><dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`).join("");

  // Hero typing effect and cursor bubbles (original site effects; skipped for reduced motion)
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!calm && window.Typed) {
    new Typed("#heroName", { strings: ["I am Gideon <br> Abiodun", "I am a Software <br> QA Engineer"], typeSpeed: 100, backSpeed: 60, backDelay: 1800, loop: true });
  }
  if (!calm) {
    let last = 0;
    document.body.addEventListener("mousemove", (e) => {
      const now = Date.now(); if (now - last < 40) return; last = now;
      const b = document.createElement("aside"), size = Math.random() * 10 + 2;
      b.style.cssText = `left:${e.pageX}px;top:${e.pageY}px;width:${size}px;height:${size}px`;
      document.body.appendChild(b); setTimeout(() => b.remove(), 3000);
    });
  }

  // Experience timeline
  $("timeline").innerHTML = S.experience.map((e) => `
    <article class="job${e.featured ? " featured" : ""}">
      <header><div><h3>${esc(e.role)}</h3><p class="co">${esc(e.company)} <span class="muted">· ${esc(e.type)}</span></p></div><p class="period">${esc(e.period)}</p></header>
      <p class="sum">${txt(e.summary)}</p>
      <ul>${e.bullets.map(li).join("")}</ul>
      <p class="tags">${tags(e.tags)}</p>
    </article>`).join("");
  const other = S.otherExperience.filter((o) => S.showPlaceholders || !isPh(o.role));
  $("otherExp").innerHTML = other.length ? `<h3 class="sub">Other experience</h3><ul class="plain">${other.map((o) => `<li><strong>${txt(o.role)}</strong>, ${esc(o.company)} <span class="muted">${txt(o.period)}</span><br>${txt(o.note)}</li>`).join("")}</ul>` : "";

  // Skills
  $("skillGrid").innerHTML = S.skills.map((g) => `<div class="skill"><h3><i class="fa-solid ${g.icon}" aria-hidden="true"></i>${esc(g.name)}</h3><p class="tags">${tags(g.items)}</p></div>`).join("");

  // Achievements
  $("award").innerHTML = `<i class="fa-solid fa-award" aria-hidden="true"></i><h3>${esc(S.achievements.featured.title)}</h3><p>${esc(S.achievements.featured.text)}</p>`;
  $("achList").innerHTML = S.achievements.items.map(li).join("");

  // Projects
  const row = (k, v) => {
    if (v === undefined || v === null || (typeof v === "string" && !v.trim())) return "";
    const h = txt(v);
    return h ? `<dt>${k}</dt><dd>${h}</dd>` : "";
  };
  $("projGrid").innerHTML = S.projects.map((p) => {
    const activities = Array.isArray(p.activities) ? p.activities.map(li).join("") : "";
    return `
      <article class="card">
        <p class="cat">${esc(p.category)} · ${esc(p.type)}</p>
        <h3>${esc(p.name)}</h3>
        <dl>${row("Scope", p.scope)}${row("Approach", p.approach)}</dl>
        <p class="tags">${tags(p.tools)}</p>
        <ul>${activities}</ul>
        <dl>${row("Challenges", p.challenges)}${row("Defects and improvements", p.defects)}${row("Outcome", p.outcome)}</dl>
        ${p.link ? `<a class="more" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">View repository <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
      </article>`;
  }).join("");

  // Documentation
  $("docGrid").innerHTML = S.documentation.map((d) => {
    const inner = `<i class="fa-solid ${d.icon}" aria-hidden="true"></i><h3>${esc(d.name)}</h3><p>${txt(d.description)}</p>`;
    return d.file
      ? `<a class="doc" href="${esc(d.file)}" target="_blank" rel="noopener noreferrer">${inner}<span class="more">Open sample</span></a>`
      : `<div class="doc empty">${inner}<a class="more muted" href="#">Preview</a></div>`;
  }).join("");

  // Credentials
  $("certList").innerHTML = S.certifications.map((c) => `<li><strong>${esc(c.name)}</strong><span>${esc(c.issuer)} · Issued ${esc(c.date)}</span></li>`).join("");
  $("eduList").innerHTML = S.education.map((c) => `<li><strong>${esc(c.award)}</strong><span>${esc(c.school)} · ${esc(c.period)}</span></li>`).join("");

  // Contact
  const c = [
    ["fa-regular fa-envelope", L.email, "mailto:" + L.email],
    ["fa-solid fa-phone", L.phone, "tel:" + L.phone.replace(/\s/g, "")],
    ["fa-brands fa-github", "GitHub", L.github],
    ["fa-brands fa-linkedin", "LinkedIn", L.linkedin],
    ["fa-brands fa-whatsapp", "WhatsApp", L.whatsapp]
  ].filter((x) => x[1] && x[2]);
  $("contactList").innerHTML = c.map((x) => `<li><i class="${x[0]}" aria-hidden="true"></i><a href="${esc(x[2])}"${x[2].startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(x[1])}</a></li>`).join("")
    + `<li><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>${esc(S.person.location)}</span></li>`;

  // Mobile menu
  const btn = $("menuBtn"), nav = $("nav");
  const setMenu = (open) => { nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  btn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  // Contact form
  const form = $("contactForm"), msg = $("formMsg");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    msg.textContent = "Sending…";
    try {
      await fetch(L.formEndpoint, { method: "POST", body: new FormData(form) });
      msg.textContent = "Message sent. Thank you, I will reply soon.";
      form.reset();
    } catch (err) {
      msg.innerHTML = `Message not sent. Email me directly at <a href="mailto:${esc(L.email)}">${esc(L.email)}</a>.`;
    }
  });
})();
