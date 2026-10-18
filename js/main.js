/*
 * main.js — Lógica de renderizado del sitio (versión TRILINGÜE).
 * Lee CONTENT[idiomaActivo] (de data.js) y construye el DOM. Comentarios en español.
 * El idioma activo se guarda en una variable de estado y el selector
 * del header vuelve a renderizar toda la página al cambiarlo.
 */

// Estado: idioma activo. Arranca con el idioma por defecto definido en data.js.
let idiomaActivo = DEFAULT_LANG;

// Escapa texto para evitar inyección de HTML (seguridad básica).
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
}

// La imagen hero vive en assets/ y se usa como fondo en varias páginas.
const HERO = "./assets/hero.webp";

// Construye el selector de idiomas (3 botones) a partir de LANGS.
// Marca como activo el idioma en curso.
function renderLangSwitch() {
  const botones = LANGS.map(l =>
    `<button class="lang-btn${l.code === idiomaActivo ? ' active' : ''}" data-lang="${l.code}">${esc(l.label)}</button>`
  ).join("");
  return `<div class="lang-switch"><span class="dot"></span>${botones}</div>`;
}

// Construye la cabecera fija con la navegación de las 10 páginas + selector de idioma.
function renderHeader(d) {
  const btns = d.nav.map(n =>
    `<button data-nav="${n.id}">${n.id} • ${esc(n.label)}</button>`).join("");
  return `
  <header class="site-header">
    <div class="header-inner">
      <div style="display:flex;align-items:center;gap:24px;">
        <span class="serif brand">${esc(d.marca)}</span>
        <div class="brand-sub"><span class="dash"></span><span class="t">${esc(d.tagline)}</span></div>
      </div>
      <div style="display:flex;align-items:center;gap:16px;">
        <nav class="main-nav">${btns}</nav>
        ${renderLangSwitch()}
      </div>
    </div>
  </header>
  <div class="side-dots">${d.nav.map(n => `<button data-nav="${n.id}" aria-label="Ir para página ${n.id}"></button>`).join("")}</div>`;
}

// Pie inferior de cada página (número + nota a la derecha).
function foot(left, right) {
  return `<div class="pagefoot"><span>${esc(left)}</span><span>${esc(right)}</span></div>`;
}

// Página 01 — Portada / Hero.
function renderHero(d) {
  const h = d.hero;
  const tags = h.tags.map(t => `<span class="chip">${esc(t)}</span>`).join("");
  const titulo = h.titulo.map((t, i) =>
    `<span class="big${i === 1 ? ' italic light' : ''}">${esc(t)}</span>`).join("");
  return `
  <section id="page01" class="hero-sec">
    <div class="hero-card gold-border">
      <div class="hero-img" style="order:2;">
        <div class="bg" style="background-image:url('${HERO}')" role="img" aria-label="Coleção Pijamas DeModaKissOdel"></div>
        <div class="grad"></div>
        <div class="hero-caption">
          <div class="box">
            <p class="xs" style="color:var(--ink-soft)">Referência Visual</p>
            <p class="serif" style="font-size:14px;line-height:1.25;margin-top:4px;">${esc(h.refVisual)}</p>
          </div>
          <div class="ko-badge">KO</div>
        </div>
      </div>
      <div class="hero-text" style="order:1;">
        <div>
          <div class="hero-eye">
            <div class="bar"></div>
            <div>
              <p style="font-size:10px;letter-spacing:0.32em;text-transform:uppercase;opacity:0.6;">${esc(h.etiqueta1)}</p>
              <p style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;margin-top:4px;">${esc(h.etiqueta2)}</p>
            </div>
          </div>
          <h1 class="serif hero-h1 light">
            <span class="mini">${esc(h.marcaMini)}</span>
            ${titulo}
          </h1>
          <div class="hero-tags">${tags}</div>
        </div>
        <div class="mt">
          <div class="hero-foot-grid">
            <div>
              <p class="lbl">Estúdio</p>
              <p class="serif" style="font-size:15px;line-height:1.3;">${h.estudio.map(esc).join("<br>")}</p>
            </div>
            <div>
              <p class="lbl">Contato</p>
              <p style="font-size:11px;line-height:1.6;">${h.contato.map(esc).join("<br>")}</p>
            </div>
          </div>
          <div class="hero-line">
            <div class="g"></div>
            <span class="serif italic" style="font-size:13px;opacity:0.7;">${esc(h.frase)}</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// Página 02 — Sobre el estúdio.
function renderAbout(d) {
  const a = d.about;
  const sys = a.sistema.map(s =>
    `<div class="sys-item"><p class="k">${esc(s.k)}</p><p class="v">${esc(s.v)}</p></div>`).join("");
  return `
  <section id="page02" class="pad" style="border-top:1px solid var(--line);">
    <div class="grid cols-12">
      <div style="grid-column:span 4;">
        <p class="eyebrow">${esc(a.eyebrow)}</p>
        <h2 class="serif light" style="font-size:44px;line-height:0.9;">${esc(a.tituloTop)}<br><span class="italic">${esc(a.tituloItalic)}</span></h2>
        <div style="margin-top:32px;" class="muted">
          ${a.parrafos.map(p => `<p style="font-size:13px;line-height:1.8;margin-top:16px;">${esc(p)}</p>`).join("")}
        </div>
      </div>
      <div style="grid-column:span 8;">
        <div class="gold-border" style="background:var(--offwhite-2);padding:32px;">
          <div style="display:flex;flex-direction:column;gap:32px;">
            <div>
              <h3 class="serif" style="font-size:22px;margin-bottom:24px;">${esc(a.sistemaTitulo)}</h3>
              <div class="sys-grid">${sys}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:16px;">
              <div class="card-bur">
                <p class="xs" style="opacity:0.7;">${esc(a.portfolioLabel)}</p>
                <p class="serif" style="font-size:28px;line-height:1;margin-top:12px;">${esc(a.portfolioTitulo)}</p>
                <p class="sm" style="margin-top:12px;opacity:0.85;">${esc(a.portfolioTexto)}</p>
                <a class="btn-ghost" href="${esc(a.portfolioUrl)}" target="_blank" rel="noopener">${esc(a.portfolioCta)} →</a>
              </div>
              <div class="gold-border" style="padding:16px;background:rgba(255,255,255,0.5);">
                <p class="xs">${esc(a.diferencialTitulo)}</p>
                <p class="sm" style="margin-top:8px;">${esc(a.diferencial)}</p>
              </div>
            </div>
          </div>
        </div>
        ${foot("@demodakissodel — pg 02/10", "Los Frailes, Santo Domingo Province")}
      </div>
    </div>
  </section>`;
}

// Página 03 — Concepto y estética (fondo burgundy).
function renderConcept(d) {
  const c = d.concept;
  const pil = c.pilares.map(p =>
    `<div class="pilar"><span class="n">${esc(p.n)}</span><div><p style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;">${esc(p.t)}</p><p class="sm" style="margin-top:8px;opacity:0.7;">${esc(p.d)}</p></div></div>`).join("");
  const sw = c.paleta.map(p =>
    `<div class="swatch"><span class="c" style="background:${esc(p.c)}"></span><span class="l">${esc(p.l)}</span></div>`).join("");
  return `
  <section id="page03" class="pad" style="background:var(--burgundy);color:var(--offwhite);position:relative;overflow:hidden;">
    <div class="grid cols-12" style="position:relative;align-items:start;">
      <div style="grid-column:span 5;">
        <p class="eyebrow">${esc(c.eyebrow)}</p>
        <h2 class="serif light" style="font-size:42px;line-height:0.9;">${esc(c.titulo[0])}<br>${esc(c.titulo[1])}<br><span class="italic" style="color:var(--gold);">${esc(c.titulo[2])}</span></h2>
        <div style="margin-top:40px;font-size:14px;line-height:1.9;opacity:0.9;font-weight:300;">
          <p>${esc(c.parrafo1a)}<strong class="medium" style="color:var(--gold-light);">${esc(c.parrafo1b)}</strong>${esc(c.parrafo1c)}</p>
          <p style="margin-top:16px;">${esc(c.parrafo2)}</p>
        </div>
        <div style="margin-top:48px;display:flex;flex-direction:column;gap:24px;">${pil}</div>
      </div>
      <div style="grid-column:span 7;">
        <div class="gold-border" style="position:relative;overflow:hidden;background:#000;">
          <img src="${HERO}" alt="Coleção hero" loading="lazy" style="width:100%;height:640px;object-fit:cover;object-position:center;">
          <div style="position:absolute;top:0;left:0;background:var(--offwhite);color:var(--ink);padding:16px 20px;">
            <p class="xs">${esc(c.inspiracaoTitulo)}</p>
            <p class="serif" style="font-size:18px;line-height:1.25;margin-top:4px;">${esc(c.inspiracao)}</p>
          </div>
          <div class="swatches">${sw}</div>
        </div>
        ${foot("@demodakissodel — pg 03/10", "Imagem hero como direção de coleção")}
      </div>
    </div>
  </section>`;
}

// Página 04 — Modelos exclusivos.
function renderModels(d) {
  const m = d.models;
  const cards = m.lista.map(l => `
    <div class="model-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <span class="id">${esc(l.id)}</span>
        <span style="font-size:9px;letter-spacing:0.2em;text-transform:uppercase;border:1px solid var(--line);padding:4px 8px;">${esc(l.caimento)}</span>
      </div>
      <h3>${esc(l.nome)}</h3>
      <div style="margin-top:20px;display:flex;flex-direction:column;gap:12px;">
        <div class="kv"><span class="kk">${esc(m.tecidoLabel)}</span><span class="muted">${esc(l.tecido)}</span></div>
        <div class="kv"><span class="kk">${esc(m.detalheLabel)}</span><span class="muted">${esc(l.detalhe)}</span></div>
      </div>
      <div style="margin-top:24px;height:1px;background:var(--line);"></div>
      <div style="margin-top:16px;display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.6;">${esc(m.incluiLabel)}</span>
        <span style="color:var(--gold);">●</span>
      </div>
    </div>`).join("");
  const extra = `
    <div class="model-card dashed gold-border" style="background:var(--offwhite-2);">
      <p class="eyebrow">${esc(m.extraLabel)}</p>
      <p class="serif" style="font-size:20px;margin-top:12px;line-height:1.25;">${esc(m.extraTitulo)}</p>
      <p class="sm" style="margin-top:12px;opacity:0.7;">${esc(m.extraTexto)}</p>
    </div>`;
  return `
  <section id="page04" class="pad">
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:24px;border-bottom:1px solid var(--line);padding-bottom:32px;">
      <div>
        <p class="eyebrow">${esc(m.eyebrow)}</p>
        <h2 class="serif" style="font-size:42px;line-height:0.9;">${esc(m.titulo[0])}<br><span class="italic light">${esc(m.titulo[1])}</span></h2>
      </div>
      <div style="max-width:360px;">
        <p class="sm" style="opacity:0.7;font-size:13px;line-height:1.7;">${esc(m.intro)}</p>
        <div class="chip" style="margin-top:16px;border-color:var(--burgundy);display:inline-flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;background:var(--burgundy);border-radius:9999px;"></span>${esc(m.badge)}</div>
      </div>
    </div>
    <div class="models-grid">${cards}${extra}</div>
    ${foot("@demodakissodel — pg 04/10", "Modelos exclusivos — direitos transferidos")}
  </section>`;
}

// Página 05 — Estampas autorais.
function renderPrints(d) {
  const p = d.prints;
  const cards = p.estampas.map(e => {
    const dots = e.paleta.map(c => `<span class="dot5" style="background:${esc(c)}"></span>`).join("");
    const grad = `radial-gradient(circle at 30% 30%, ${e.paleta[0]} 0%, ${e.paleta[0]} 60%, ${e.paleta[2]}14 100%)`;
    return `
      <div class="print-card">
        <div class="print-swatch" style="background:${grad};"><span class="ph">${esc(e.nome.split(" ")[0])}</span></div>
        <div style="padding:16px;flex:1;display:flex;flex-direction:column;">
          <p style="font-size:12px;letter-spacing:0.15em;text-transform:uppercase;font-weight:500;">${esc(e.nome)}</p>
          <p class="sm" style="margin-top:8px;opacity:0.7;flex:1;">${esc(e.desc)}</p>
          <div style="display:flex;gap:6px;margin-top:16px;">${dots}</div>
        </div>
      </div>`;
  }).join("");
  return `
  <section id="page05" class="pad" style="background:var(--offwhite-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
    <div class="grid cols-12">
      <div style="grid-column:span 5;">
        <p class="eyebrow">${esc(p.eyebrow)}</p>
        <h2 class="serif" style="font-size:40px;line-height:0.9;">${esc(p.titulo[0])}<br>${esc(p.titulo[1])}</h2>
        <div style="margin-top:32px;" class="muted">
          <p style="font-size:13px;line-height:1.8;">${esc(p.parrafo1)}</p>
          <p style="font-size:13px;line-height:1.8;margin-top:16px;border-left:2px solid var(--gold);padding-left:16px;"><strong class="medium">${esc(p.parrafo2a)}</strong>${esc(p.parrafo2b)}</p>
        </div>
        <div class="card-bur" style="margin-top:40px;">
          <p class="xs" style="opacity:0.7;">${esc(p.repeticaoTitulo)}</p>
          <p class="sm" style="margin-top:12px;opacity:0.9;">${esc(p.repeticaoTexto)}</p>
        </div>
      </div>
      <div style="grid-column:span 7;">
        <div class="prints-grid">${cards}</div>
        <div class="gold-border" style="margin-top:16px;padding:16px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;">
          <p class="xs">${esc(p.bottomNota)}</p>
          <p style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;">${esc(p.entregaveis)}</p>
        </div>
      </div>
    </div>
  </section>`;
}

// Página 06 — Tecidos, aviamentos e acabamentos.
function renderFabrics(d) {
  const f = d.fabrics;
  const rows = f.tecidos.map(t => `
    <div class="fab-row">
      <span class="medium">${esc(t.tecido)}</span>
      <span class="muted">${esc(t.toque)}</span>
      <span class="muted hidem" style="opacity:0.6;">${esc(t.uso)}</span>
      <span style="color:var(--gold);font-weight:500;">${esc(t.preco)}</span>
      <span style="opacity:0.5;text-align:right;">${esc(t.largura)}</span>
    </div>`).join("");
  const avi = f.aviamentos.map(a => `
    <div style="display:flex;gap:12px;">
      <span style="width:4px;height:4px;margin-top:8px;border-radius:9999px;background:var(--gold);flex-shrink:0;"></span>
      <div><p style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">${esc(a.k)}</p><p class="sm" style="opacity:0.7;margin-top:4px;">${esc(a.d)}</p></div>
    </div>`).join("");
  const acab = f.acabamentos.map(a => `<span class="pill">${esc(a)}</span>`).join("");
  return `
  <section id="page06" class="pad">
    <div style="max-width:980px;">
      <p class="eyebrow">${esc(f.eyebrow)}</p>
      <h2 class="serif" style="font-size:42px;line-height:0.9;">${esc(f.titulo)}</h2>
      <p class="muted" style="margin-top:16px;font-size:13px;line-height:1.7;max-width:560px;">${esc(f.intro)}</p>
    </div>
    <div class="grid cols-12" style="margin-top:40px;">
      <div style="grid-column:span 7;" class="gold-border" >
        <div style="padding:24px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;">
          <p style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-weight:500;">${esc(f.tablaTitulo)}</p>
          <span class="xs" style="opacity:0.5;">${esc(f.tablaNota)}</span>
        </div>
        <div>${rows}</div>
        <div style="padding:16px;background:var(--offwhite-2);font-size:10px;line-height:1.6;opacity:0.6;">${esc(f.tablaPie)}</div>
      </div>
      <div style="grid-column:span 5;display:flex;flex-direction:column;gap:24px;">
        <div class="gold-border card-bur">
          <p class="xs" style="color:var(--gold-light);opacity:1;">${esc(f.aviamentosTitulo)}</p>
          <div style="margin-top:20px;display:flex;flex-direction:column;gap:16px;">${avi}</div>
        </div>
        <div class="gold-border" style="padding:24px;background:#fff;">
          <p class="eyebrow" style="margin-bottom:0;">${esc(f.acabamentosTitulo)}</p>
          <div style="margin-top:16px;display:flex;flex-wrap:wrap;gap:8px;">${acab}</div>
          <p class="sm" style="margin-top:20px;opacity:0.7;">${esc(f.acabamentosNota)}</p>
        </div>
      </div>
    </div>
    ${foot("@demodakissodel — pg 06/10", "Tecidos nobres • Aviamentos ouro • Acabamento francês")}
  </section>`;
}

// Página 07 — Fichas técnicas + modelagem (fondo oscuro, ficha blanca).
function renderTechpack(d) {
  const t = d.techpack;
  const bom = t.bom.map(r => `<div class="bom-row"><span>${esc(r[0])}</span><span class="muted">${esc(r[1])}</span><span style="text-align:right;">${esc(r[2])}</span></div>`).join("");
  const seq = t.sequencia.map(s => `<li>${esc(s)}</li>`).join("");
  const med = t.medidas.map(r => `<div class="med-row"><span>${esc(r[0])}</span><span>${esc(r[1])}</span><span style="opacity:0.5;">${esc(r[2])}</span></div>`).join("");
  return `
  <section id="page07" class="pad" style="background:#0E0A0C;color:#FFF8F0;">
    <div class="grid cols-12">
      <div style="grid-column:span 4;">
        <p class="eyebrow">${esc(t.eyebrow)}</p>
        <h2 class="serif" style="font-size:42px;line-height:0.9;">${esc(t.titulo[0])}<br>${esc(t.titulo[1])}</h2>
        <div style="margin-top:32px;font-size:12px;line-height:1.8;opacity:0.7;display:flex;flex-direction:column;gap:12px;">
          ${t.parrafos.map(p => `<p>${esc(p)}</p>`).join("")}
        </div>
        <div style="margin-top:32px;border:1px solid hsla(0,0%,100%,0.15);padding:16px;">
          <p class="xs" style="opacity:0.5;">${esc(t.sistemaLabel)}</p>
          <p class="serif" style="font-size:16px;margin-top:8px;">${esc(t.sistemaTexto)}</p>
        </div>
      </div>
      <div style="grid-column:span 8;">
        <div class="sheet">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid rgba(0,0,0,0.1);padding-bottom:16px;gap:12px;">
            <div>
              <p class="xs" style="opacity:0.6;">${esc(t.fichaLabel)}</p>
              <p class="serif" style="font-size:22px;margin-top:4px;">${esc(t.fichaTitulo)}</p>
              <p class="xs" style="margin-top:4px;opacity:0.6;letter-spacing:0.15em;">${esc(t.fichaRef)}</p>
            </div>
            <span style="font-size:10px;border:1px solid rgba(0,0,0,0.15);padding:4px 8px;white-space:nowrap;">KO GOLD SYSTEM</span>
          </div>
          <div class="grid" style="margin-top:24px;grid-template-columns:repeat(3,1fr);gap:24px;font-size:11px;">
            <div style="grid-column:span 2;">
              <p class="medium up" style="font-size:10px;letter-spacing:0.15em;margin-bottom:12px;">${esc(t.bomTitulo)}</p>
              <div style="border:1px solid rgba(0,0,0,0.1);">${bom}</div>
              <p class="medium up" style="font-size:10px;letter-spacing:0.15em;margin:24px 0 12px;">${esc(t.sequenciaTitulo)}</p>
              <ol class="seq">${seq}</ol>
            </div>
            <div>
              <p class="medium up" style="font-size:10px;letter-spacing:0.15em;margin-bottom:12px;">${esc(t.medidasTitulo)}</p>
              <div style="border:1px solid rgba(0,0,0,0.1);font-size:10px;">${med}</div>
              <div style="margin-top:16px;background:#000;color:#fff;padding:12px;">
                <p class="xs" style="opacity:0.6;">${esc(t.graduacaoLabel)}</p>
                <p style="font-size:11px;margin-top:4px;">${esc(t.graduacao)}</p>
                <p style="font-size:9px;margin-top:8px;opacity:0.6;">${esc(t.graduacaoArquivos)}</p>
              </div>
              <div style="margin-top:16px;border:1px solid rgba(0,0,0,0.1);padding:12px;">
                <p class="xs">${esc(t.desenhoLabel)}</p>
                <div style="margin-top:8px;height:90px;border:1px dashed rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;font-size:9px;opacity:0.4;text-align:center;">${esc(t.desenhoTecnico)}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pagefoot" style="color:hsla(0,0%,100%,0.4);opacity:1;"><span>@demodakissodel — pg 07/10</span><span>Formato igual portfolio validado</span></div>
      </div>
    </div>
  </section>`;
}

// Página 08 — Mockups digitais e peça-piloto.
function renderMockups(d) {
  const m = d.mockups;
  const vistas = m.vistas.map(v => `<div style="background:hsla(0,0%,100%,0.9);backdrop-filter:blur(8px);padding:8px 12px;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;text-align:center;border:1px solid rgba(0,0,0,0.1);color:#000;">${esc(v)}</div>`).join("");
  return `
  <section id="page08" class="pad">
    <div class="grid cols-12" style="align-items:start;">
      <div style="grid-column:span 6;">
        <div class="gold-border" style="position:relative;background:var(--offwhite-2);padding:8px;overflow:hidden;">
          <div style="width:100%;height:520px;background-image:url('${HERO}');background-size:cover;background-position:center;" role="img" aria-label="Mockup 3D"></div>
          <div style="position:absolute;top:24px;left:24px;background:var(--burgundy);color:#fff;padding:12px 16px;">
            <p class="xs" style="opacity:0.7;">${esc(m.etiquetaImg)}</p>
            <p class="serif" style="font-size:18px;line-height:1.25;margin-top:4px;">${esc(m.etiquetaImgSub)}</p>
          </div>
          <div style="position:absolute;bottom:24px;left:24px;right:24px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">${vistas}</div>
        </div>
      </div>
      <div style="grid-column:span 6;">
        <p class="eyebrow">${esc(m.eyebrow)}</p>
        <h2 class="serif" style="font-size:42px;line-height:0.9;">${esc(m.titulo[0])}<br>${esc(m.titulo[1])}</h2>
        <div style="margin-top:32px;display:flex;flex-direction:column;gap:24px;font-size:13px;line-height:1.8;" class="muted">
          <div style="border-left:2px solid var(--burgundy);padding-left:20px;">
            <p style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-weight:500;">${esc(m.block1Titulo)}</p>
            <p style="margin-top:8px;">${esc(m.block1Texto)}</p>
          </div>
          <div style="border-left:2px solid var(--gold);padding-left:20px;">
            <p style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-weight:500;">${esc(m.block2Titulo)}</p>
            <p style="margin-top:8px;">${esc(m.block2TextoA)}<strong>${esc(m.block2TextoB)}</strong>${esc(m.block2TextoC)}</p>
            <p class="sm" style="margin-top:12px;background:var(--offwhite-2);padding:12px;border:1px solid var(--line);">${esc(m.block2Nota)}</p>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding-top:16px;">
            <div class="gold-border" style="padding:16px;"><p class="xs">${esc(m.entregaveisLabel)}</p><p class="sm" style="margin-top:8px;">${esc(m.entregaveisMockup)}</p></div>
            <div class="gold-border" style="padding:16px;"><p class="xs">${esc(m.tempoLabel)}</p><p class="sm" style="margin-top:8px;">${esc(m.tempoPiloto)}</p></div>
          </div>
        </div>
        <div class="pagefoot" style="border-top:1px solid var(--line);padding-top:16px;"><span>@demodakissodel — pg 08/10</span><span>Mockup 3D + Piloto RD opcional</span></div>
      </div>
    </div>
  </section>`;
}

// Página 09 — Investimento e cronograma.
function renderInvestment(d) {
  const v = d.investment;
  const packs = v.pacotes.map(p => {
    const inc = p.inclui.map(i => `<div class="inc"><span class="b"></span><span style="opacity:${p.destaque ? '0.9' : '0.75'};">${esc(i)}</span></div>`).join("");
    const selo = p.selo ? `<div class="selo">${esc(p.selo)}</div>` : "";
    const tipoColor = p.destaque ? "var(--gold-light)" : "var(--gold)";
    return `
      <div class="pack${p.destaque ? ' hl' : ''}">
        <p style="font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:${tipoColor};">${esc(p.tipo)}</p>
        <p class="serif" style="font-size:20px;margin-top:8px;">${esc(p.modelos)}</p>
        <p class="valor">${esc(p.valor)}</p>
        <div style="margin-top:24px;flex:1;display:flex;flex-direction:column;gap:10px;">${inc}</div>
        ${selo}
      </div>`;
  }).join("");
  const crono = v.cronograma.map(c => `<div class="crono"><span class="s">${esc(c.s)}</span><span class="sm" style="opacity:0.75;">${esc(c.t)}</span></div>`).join("");
  return `
  <section id="page09" class="pad" style="background:var(--offwhite-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
    <div style="max-width:1180px;margin:0 auto;">
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px;">
        <div>
          <p class="eyebrow">${esc(v.eyebrow)}</p>
          <h2 class="serif" style="font-size:42px;line-height:0.9;">${esc(v.titulo[0])}<br>${esc(v.titulo[1])}</h2>
        </div>
        <div style="max-width:380px;font-size:12px;line-height:1.7;opacity:0.7;">
          <p>${esc(v.refA)}</p>
          <p style="margin-top:12px;"><strong class="medium">${esc(v.refB1)}</strong>${esc(v.refB2)}<strong class="medium">${esc(v.refB3)}</strong>${esc(v.refB4)}</p>
        </div>
      </div>
      <div class="grid cols-12" style="margin-top:48px;">
        <div style="grid-column:span 7;"><div class="pack-grid">${packs}</div></div>
        <div style="grid-column:span 5;display:flex;flex-direction:column;gap:24px;">
          <div class="gold-border" style="background:#fff;padding:24px;">
            <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;font-weight:500;">${esc(v.cronogramaTitulo)}</p>
            <div style="margin-top:20px;display:flex;flex-direction:column;gap:16px;">${crono}</div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
            <div class="card-bur"><p class="xs" style="opacity:0.7;">${esc(v.pagamento.titulo)}</p><p class="serif" style="font-size:20px;margin-top:8px;">${esc(v.pagamento.valor)}</p><p class="sm" style="margin-top:8px;opacity:0.8;">${esc(v.pagamento.texto)}</p></div>
            <div class="gold-border" style="background:#fff;padding:20px;"><p class="xs">${esc(v.revisoes.titulo)}</p><p class="serif" style="font-size:20px;margin-top:8px;">${esc(v.revisoes.valor)}</p><p class="sm" style="margin-top:8px;opacity:0.7;">${esc(v.revisoes.texto)}</p></div>
          </div>
          <div class="gold-border" style="background:#fff;padding:16px;display:flex;gap:12px;align-items:flex-start;"><span style="color:var(--gold);">⚠</span><p class="sm" style="opacity:0.7;">${esc(v.aviso)}</p></div>
        </div>
      </div>
      ${foot("@demodakissodel — pg 09/10", "Excel custos assinado — adaptado pijamas $35-$60")}
    </div>
  </section>`;
}

// Página 10 — Próximos passos + contato + assinatura.
function renderContact(d) {
  const c = d.contact;
  const steps = c.passos.map(p => `
    <div class="step">
      <span class="n">${esc(p.n)}</span>
      <div>
        <p style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;font-weight:500;">${esc(p.t)}</p>
        <p class="sm" style="margin-top:8px;opacity:0.7;font-size:12px;line-height:1.6;">${esc(p.d)}</p>
      </div>
    </div>`).join("");
  return `
  <section id="page10" class="pad" style="position:relative;overflow:hidden;">
    <div class="grid cols-12">
      <div style="grid-column:span 6;">
        <p class="eyebrow">${esc(c.eyebrow)}</p>
        <h2 class="serif" style="font-size:42px;line-height:0.85;">${esc(c.titulo[0])}<br>${esc(c.titulo[1])}</h2>
        <div style="margin-top:40px;display:flex;flex-direction:column;gap:32px;">${steps}</div>
        <div class="gold-border" style="margin-top:48px;background:var(--offwhite-2);padding:24px;">
          <p class="xs">${esc(c.linksTitulo)}</p>
          <div style="margin-top:16px;display:flex;flex-direction:column;gap:12px;font-size:12px;">
            <a class="link-row" href="${esc(c.linkPortfolio.url)}" target="_blank" rel="noopener"><span>${esc(c.linkPortfolio.label)}</span><span>→</span></a>
            <div class="link-row" style="opacity:0.7;"><span>${esc(c.linkExcel)}</span><span style="font-size:10px;text-transform:uppercase;">${esc(c.linkExcelDisp)}</span></div>
          </div>
        </div>
      </div>
      <div style="grid-column:span 6;">
        <div class="contact-box">
          <div class="ring"></div>
          <p class="xs" style="color:var(--gold-light);opacity:1;">${esc(c.contatoLabel)}</p>
          <h3 class="serif" style="font-size:30px;line-height:1;margin-top:16px;">${esc(c.contatoNome)}<br><span class="italic light" style="color:var(--gold-light);">${esc(c.contatoCargo)}</span></h3>
          <div style="margin-top:32px;font-size:13px;line-height:1.6;opacity:0.9;display:flex;flex-direction:column;gap:12px;">
            <p>${c.contatoEndereco.map(esc).join("<br>")}</p>
            <p style="color:var(--gold-light);">${c.contatoHandle.map(esc).join("<br>")}</p>
          </div>
          <div style="margin-top:40px;display:grid;grid-template-columns:1fr 1fr;gap:16px;font-size:11px;">
            <div style="border:1px solid hsla(0,0%,100%,0.15);padding:12px;"><p class="xs" style="opacity:0.6;">${esc(c.tempoLabel)}</p><p style="margin-top:4px;">${esc(c.tempoResposta)}</p></div>
            <div style="border:1px solid hsla(0,0%,100%,0.15);padding:12px;"><p class="xs" style="opacity:0.6;">${esc(c.idiomasLabel)}</p><p style="margin-top:4px;">${esc(c.idiomas)}</p></div>
          </div>
        </div>
        <div class="gold-border" style="margin-top:24px;background:#fff;padding:32px;">
          <p class="xs">${esc(c.assinaturaLabel)}</p>
          <div style="margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:32px;">
            <div><div class="sign-line"></div><p class="xs" style="margin-top:8px;">${esc(c.assinaturaCliente)}</p><p class="xs" style="margin-top:16px;opacity:0.4;">${esc(c.dataLabel)}</p></div>
            <div><div class="sign-line"></div><p class="xs" style="margin-top:8px;">${esc(c.assinaturaStudio)}</p><p class="xs" style="margin-top:16px;opacity:0.4;">${esc(c.dataLabel)}</p></div>
          </div>
          <div style="margin-top:32px;display:flex;align-items:center;gap:8px;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;opacity:0.5;"><span style="width:8px;height:8px;border-radius:9999px;background:var(--gold);"></span>${esc(c.validade)}</div>
        </div>
      </div>
    </div>
  </section>`;
}

// Concatena las secciones 02 a 10 en orden.
function SECCIONES(d) {
  return renderAbout(d) + renderConcept(d) + renderModels(d) + renderPrints(d) +
         renderFabrics(d) + renderTechpack(d) + renderMockups(d) +
         renderInvestment(d) + renderContact(d);
}

// Pie global del sitio.
function renderFooter(d) {
  const f = d.footer;
  return `
  <footer class="global-foot">
    <span>${esc(f.copyright)}</span>
    <span style="display:flex;align-items:center;gap:12px;"><span>${esc(f.valores)}</span><span style="width:32px;height:1px;background:var(--gold);"></span><span style="color:var(--gold);">KO</span></span>
  </footer>`;
}

// Activa la navegación (clic suave) y el resaltado por scroll (scroll-spy).
function activarNav(d) {
  const navBtns = document.querySelectorAll("[data-nav]");
  // Clic: desplaza suave a la sección correspondiente.
  navBtns.forEach(b => b.addEventListener("click", () => {
    const id = b.getAttribute("data-nav");
    const el = document.getElementById("page" + id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  // Observador: marca activo el botón de la sección visible.
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id.replace("page", "");
        navBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-nav") === id));
      }
    });
  }, { threshold: 0.5 });
  d.nav.forEach(n => {
    const el = document.getElementById("page" + n.id);
    if (el) obs.observe(el);
  });
}

// Punto de entrada: ensambla todo con el idioma activo y activa la interacción.
function init() {
  const d = CONTENT[idiomaActivo];
  const app = document.getElementById("app");
  app.innerHTML =
    renderHeader(d) +
    '<main class="wrap">' +
    renderHero(d) +
    SECCIONES(d) +
    '</main>' +
    renderFooter(d);
  activarNav(d);
  activarIdioma();
}

// Activa el selector de idioma: al pulsar un botón cambia el idioma activo
// y vuelve a renderizar toda la página con el nuevo contenido.
function activarIdioma() {
  document.querySelectorAll("[data-lang]").forEach(b => {
    b.addEventListener("click", () => {
      const code = b.getAttribute("data-lang");
      if (code && code !== idiomaActivo && CONTENT[code]) {
        idiomaActivo = code;
        document.documentElement.lang = code;
        init();
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", init);
