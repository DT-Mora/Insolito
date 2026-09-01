/* CRÓNICAS ANÓMALAS · data + UI */
const state={articles:{},filter:"all",layout:"grid",lastFocus:null};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const modal=$("#modal");

async function loadArticles(){
  try{
    const res=await fetch("./articles.json",{cache:"no-store"});
    if(!res.ok) throw new Error("No se pudo cargar articles.json");
    state.articles=await res.json();
    renderHero();
    renderArchive();
    const requested = new URLSearchParams(location.search).get("exp");
    if(requested && state.articles[requested]) openModal(requested);
  }catch(err){
    console.error(err);
    $("#grid").innerHTML='<div class="load-error">No se pudo cargar el archivo. Comprueba que <b>articles.json</b> esté en el repositorio.</div>';
  }
}

function renderHero(){
  const a=state.articles.socotra;if(!a)return;
  $("#heroImage").src=a.image;$("#heroImage").alt=a.imageAlt;
  $("#heroCategory").textContent="#"+a.category;
  $("#heroRead").textContent=a.readTime;
  $("#heroRarity").textContent=`RAREZA ${a.rarity}/5`;
  $("#heroTitle").textContent=a.title;
  $("#heroDeck").textContent=a.deck;
  $("#heroLocation").textContent=a.location;
}

function renderArchive(){
  const entries=Object.entries(state.articles).filter(([,a])=>state.filter==="all"||a.categoryKey===state.filter);
  $("#grid").innerHTML=entries.map(([id,a],i)=>cardTemplate(id,a,i)).join("");
  $("#list").innerHTML=`<div class="list-head"><span>REF</span><span>TÍTULO</span><span>CATEGORÍA</span><span>RAREZA</span><span>ABRIR</span></div>`+
    entries.map(([id,a])=>listTemplate(id,a)).join("");
  bindArticleButtons();
  if(window.refreshArchiveAnimations) window.refreshArchiveAnimations();
}

function cardTemplate(id,a,i){
  if(id==="wow-signal") return `<article class="card card--quote" data-category="${a.categoryKey}" data-article-id="${id}">
    <div class="quote"><mark>“</mark><blockquote>${escapeHtml(a.deck)}</blockquote><cite>${a.reference} · ${a.rarity}/5</cite><button data-open-article="${id}">VER EXPEDIENTE →</button></div>
  </article>`;
  const cls=i===0?"card card--large":i===4?"card card--wide":"card";
  return `<article class="${cls}" data-category="${a.categoryKey}" data-article-id="${id}">
    <div class="card__media"><img src="${a.image}" alt="${escapeAttr(a.imageAlt)}" loading="lazy" width="1200" height="800"><span class="folio">REF: ${a.reference}</span></div>
    <div class="card__body"><div class="card__meta"><span>#${a.category}</span><span>RAREZA ${a.rarity}/5</span></div><h3>${escapeHtml(a.title)}</h3><p>${escapeHtml(a.deck)}</p><button class="card__action" data-open-article="${id}">ABRIR EXPEDIENTE →</button></div>
    ${i===4?'<div class="wide-index"><small>EXP</small><b>1666</b></div>':""}
  </article>`;
}

function listTemplate(id,a){
  return `<div class="list-row" data-category="${a.categoryKey}"><span>${a.reference}</span><strong>${escapeHtml(a.title)}</strong><span>#${a.category}</span><span>${a.rarity}/5</span><button data-open-article="${id}">ABRIR</button></div>`;
}

function escapeHtml(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function escapeAttr(v){return escapeHtml(v)}

function bindArticleButtons(){
  $$("[data-open-article]").forEach(btn=>btn.addEventListener("click",e=>{e.stopPropagation();openModal(btn.dataset.openArticle)}));
  $$(".card").forEach(card=>card.addEventListener("click",e=>{if(!e.target.closest("button"))openModal(card.dataset.articleId)}));
}

function openModal(id){
  const a=state.articles[id];if(!a)return;
  state.lastFocus=document.activeElement;
  $("#modalRef").textContent=a.reference;$("#modalCategory").textContent="#"+a.category;$("#modalLocation").textContent=a.location;
  $("#modalCoordinates").textContent=a.coordinates;$("#modalRarity").textContent=`${a.rarity}/5`;$("#modalRead").textContent=a.readTime;
  $("#modalCredit").textContent=a.imageCredit;$("#modalTag").textContent="#"+a.category;$("#modalTitle").textContent=a.title;$("#modalDeck").textContent=a.deck;
  $("#modalImage").src=a.image;$("#modalImage").alt=a.imageAlt;
  $("#modalBody").replaceChildren(...a.body.map(t=>{const p=document.createElement("p");p.textContent=t;return p}));
  $("#modalSources").innerHTML=a.sources.map(s=>`<a class="source-link" href="${s.url}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(s.label)}</span><span>↗</span></a>`).join("");
  history.replaceState(null,"",`${location.pathname}?exp=${encodeURIComponent(id)}`);
  modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");$("#modalClose").focus();
  if(window.animateModal) window.animateModal(true);
}

function closeModal(){
  if(!modal.classList.contains("is-open"))return;
  if(window.animateModal) window.animateModal(false);else finishClose();
}
function finishClose(){history.replaceState(null,"",location.pathname);modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");state.lastFocus?.focus?.()}

function setTheme(){
  const saved=localStorage.getItem("ca-theme");
  const theme=saved||(matchMedia("(prefers-color-scheme:light)").matches?"light":"dark");
  document.documentElement.dataset.theme=theme;
}
function toggleTheme(){
  const next=document.documentElement.dataset.theme==="dark"?"light":"dark";
  document.documentElement.dataset.theme=next;localStorage.setItem("ca-theme",next);
}

function setLayout(layout){
  state.layout=layout;
  $$("[data-layout]").forEach(b=>{const active=b.dataset.layout===layout;b.classList.toggle("is-active",active);b.setAttribute("aria-pressed",active)});
  $("#grid").hidden=layout!=="grid";$("#list").hidden=layout!=="list";
  requestAnimationFrame(()=>window.refreshArchiveAnimations?.());
}

function setFilter(filter){
  state.filter=filter;
  $$(".filter").forEach(b=>b.classList.toggle("is-active",b.dataset.filter===filter));
  renderArchive();
}

function bind(){
  $("#themeToggle").addEventListener("click",toggleTheme);
  $$("[data-layout]").forEach(b=>b.addEventListener("click",()=>setLayout(b.dataset.layout)));
  $$(".filter").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.filter)));
  $("#modalClose").addEventListener("click",closeModal);
  $$("[data-close]").forEach(e=>e.addEventListener("click",closeModal));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("is-open"))closeModal()});
  $("#modalImage").addEventListener("error",()=>{$("#modalImage").removeAttribute("src");});
  $("#heroImage").addEventListener("error",()=>{$("#heroImage").removeAttribute("src");});
  document.addEventListener("click",e=>{if(e.target.closest("a")?.href && e.target.closest("a").href.includes("?exp="))e.preventDefault()});
  window.addEventListener("popstate",()=>{const requested=new URLSearchParams(location.search).get("exp");if(requested&&state.articles[requested])openModal(requested);else if(modal.classList.contains("is-open"))finishClose()});
  $("#currentDate").textContent=new Intl.DateTimeFormat("es-MX",{weekday:"short",day:"2-digit",month:"short",year:"numeric"}).format(new Date()).replace(/\./g,"").toUpperCase();
}
document.addEventListener("DOMContentLoaded",()=>{setTheme();bind();loadArticles()});
window.finishClose=finishClose;
