/* =========================================================
   CRÓNICAS ANÓMALAS
   Main application logic
========================================================= */

const articles = {
  socotra: {
    reference: "REF: EXP-2026",
    category: "#NATURALEZA",
    title: "SOCOTRA: La isla que parece un planeta equivocado",
    lead: "Socotra es un archipiélago aislado del océano Índico conocido por su extraordinario nivel de especies endémicas y por árboles cuya silueta parece pertenecer a otro mundo.",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1400&q=85",
    coordinates: "12°29′N / 53°54′E",
    rarity: "05/05",
    readTime: "08 MIN",
    sourceNote: "Contenido de demostración. Antes de publicar, sustituye esta nota por las fuentes documentales concretas utilizadas.",
    body: [
      "Durante millones de años, el aislamiento geográfico permitió que Socotra desarrollara una biota extraordinariamente particular. Una parte importante de sus especies no existe de forma natural en ningún otro lugar del planeta.",
      "Entre sus imágenes más conocidas está el árbol de sangre de dragón, cuya copa extendida recuerda a un paraguas gigantesco. Su savia rojiza contribuyó a que surgieran alrededor de la planta numerosos nombres y tradiciones.",
      "La rareza visual de Socotra no depende de una leyenda. Se explica mediante geografía, evolución, clima y aislamiento. La isla funciona como un archivo vivo de procesos biológicos que normalmente quedan ocultos durante escalas de tiempo enormes.",
      "El resultado es un paisaje que parece diseñado por un artista de ciencia ficción, aunque cada una de sus anomalías naturales pertenece al registro real de la biodiversidad terrestre."
    ]
  },
  hessdalen: {
    reference: "REF: EXP-1184",
    category: "#CIENCIA_RARA",
    title: "Las luces de Hessdalen",
    lead: "En un valle de Noruega se han observado durante décadas fenómenos luminosos poco comunes que han sido objeto de observaciones científicas e investigaciones instrumentales.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1400&q=85",
    coordinates: "62°47′N / 11°10′E",
    rarity: "04/05",
    readTime: "06 MIN",
    sourceNote: "Contenido de demostración. Añade publicaciones científicas y registros de observación antes de publicar.",
    body: [
      "En el valle de Hessdalen, en Noruega, habitantes y visitantes han informado durante décadas de luces inusuales apareciendo sobre el paisaje. Algunas observaciones describen puntos brillantes estacionarios y otras luces que parecen desplazarse.",
      "El interés del fenómeno aumentó cuando comenzaron a realizarse observaciones instrumentales. Equipos de investigación instalaron cámaras y otros sistemas de medición para intentar distinguir entre fenómenos naturales, errores de percepción y eventos que merecieran explicación adicional.",
      "Se han propuesto distintas hipótesis físicas, entre ellas procesos relacionados con la ionización y las condiciones atmosféricas locales. El expediente sigue siendo interesante precisamente porque las explicaciones deben contrastarse con observaciones medibles.",
      "La parte interesante no necesita una explicación extraterrestre: un fenómeno luminoso anómalo puede permanecer científicamente interesante incluso cuando las hipótesis más espectaculares no están demostradas."
    ]
  },
  "mary-celeste": {
    reference: "REF: EXP-0821",
    category: "#HISTORIA_OCULTA",
    title: "El misterio del Mary Celeste",
    lead: "En 1872 el Mary Celeste fue encontrado abandonado en el Atlántico mientras el barco permanecía en condiciones que permitían seguir navegando.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85",
    coordinates: "38°20′N / 17°15′W",
    rarity: "04/05",
    readTime: "07 MIN",
    sourceNote: "Contenido de demostración. Sustituye por fuentes históricas y documentación primaria antes de publicar.",
    body: [
      "El Mary Celeste salió de Nueva York rumbo a Italia en noviembre de 1872. Semanas después, otro buque lo encontró a la deriva en el Atlántico.",
      "No había nadie a bordo. La carga seguía presente y el barco no parecía haber sufrido una catástrofe que explicara por sí sola la desaparición de toda la tripulación.",
      "Con los años aparecieron teorías que iban desde piratería hasta fenómenos naturales y errores humanos. Algunas se volvieron legendarias, mientras que otras encajan mejor con lo que se conoce sobre navegación y comportamiento de un barco en mar abierto.",
      "El caso demuestra una regla importante del archivo: una historia puede ser genuinamente extraña sin necesitar una explicación paranormal."
    ]
  },
  "wow-signal": {
    reference: "REF: EXP-1977",
    category: "#CIENCIA_RARA",
    title: "La señal Wow!",
    lead: "En 1977 un radiotelescopio detectó una señal de radio extraordinariamente intensa y estrecha durante 72 segundos, generando una de las historias más famosas de la búsqueda de señales extraterrestres.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=85",
    coordinates: "Delimitación celeste / Sagitario",
    rarity: "05/05",
    readTime: "08 MIN",
    sourceNote: "Contenido de demostración. Añade el registro original y la literatura científica relacionada antes de publicar.",
    body: [
      "El 15 de agosto de 1977 el radiotelescopio Big Ear, utilizado por investigadores asociados al programa SETI, registró una señal excepcionalmente llamativa.",
      "La señal duró alrededor de 72 segundos, coincidiendo con el tiempo que una fuente celeste tardaría en atravesar el campo de observación del instrumento debido a la rotación de la Tierra.",
      "Jerry Ehman, revisando la impresión de datos, rodeó la secuencia correspondiente y escribió una palabra que acabaría dando nombre al evento: Wow!",
      "La señal nunca volvió a observarse de la misma forma. Esa ausencia de repetición impide convertirla en evidencia de una civilización extraterrestre. Su importancia histórica está en lo extraordinariamente sugestiva que fue y en lo poco que podemos concluir de una única detección."
    ]
  },
  "blood-falls": {
    reference: "REF: EXP-2110",
    category: "#NATURALEZA",
    title: "Blood Falls",
    lead: "En la Antártida, una corriente de color rojizo emerge desde el glaciar Taylor. Durante años pareció un misterio; hoy conocemos mucho más sobre su origen.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
    coordinates: "77°43′S / 162°16′E",
    rarity: "05/05",
    readTime: "07 MIN",
    sourceNote: "Contenido de demostración. Añade las publicaciones científicas que describan la química y el sistema subglacial antes de publicar.",
    body: [
      "Blood Falls es una salida de agua salobre que aparece en el frente del glaciar Taylor, en la región de los valles secos de McMurdo.",
      "Su color rojo puede parecer sangre a simple vista, pero la explicación es geoquímica. El agua contiene una alta concentración de sales y hierro que, al entrar en contacto con el oxígeno, participa en procesos que producen el característico tono rojizo.",
      "El sistema resulta especialmente interesante porque está relacionado con agua salobre atrapada bajo el hielo durante largos periodos, creando un entorno extremo que ha despertado el interés de investigadores.",
      "La postal parece fantástica; el proceso físico que la produce es perfectamente terrestre y, por eso mismo, no menos extraordinario."
    ]
  },
  voynich: {
    reference: "REF: EXP-1666",
    category: "#HISTORIA_OCULTA",
    title: "El manuscrito que aún no sabemos leer",
    lead: "El Manuscrito Voynich reúne ilustraciones botánicas, diagramas y una escritura desconocida que todavía no posee una interpretación aceptada de manera general.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1400&q=85",
    coordinates: "Archivo Beinecke / Yale",
    rarity: "05/05",
    readTime: "09 MIN",
    sourceNote: "Contenido de demostración. Usa la catalogación de Yale y estudios académicos sobre el manuscrito en la versión publicada.",
    body: [
      "El Manuscrito Voynich es uno de los objetos más famosos de la historia de la criptografía y de la investigación documental. El libro contiene centenares de páginas con un sistema de escritura que no ha sido descifrado de manera concluyente.",
      "Sus ilustraciones incluyen plantas difíciles de identificar, diagramas circulares, escenas astronómicas y secciones que parecen relacionadas con contenidos médicos o farmacológicos.",
      "El manuscrito ha sido analizado por criptógrafos, lingüistas y especialistas en manuscritos. Algunos estudios han encontrado patrones estadísticos en el texto, mientras que otros han planteado dudas sobre la forma en que deben interpretarse esos patrones.",
      "Su misterio no consiste únicamente en que nadie lo haya traducido. Consiste en que tampoco existe consenso sobre qué clase de sistema lingüístico o cifrado representa exactamente."
    ]
  }
};

const root = document.documentElement;
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const currentDate = document.getElementById("currentDate");
const bentoGrid = document.getElementById("bentoGrid");
const listView = document.getElementById("listView");
const modal = document.getElementById("articleModal");
const modalClose = document.getElementById("modalClose");

const modalFields = {
  image: document.getElementById("modalImage"),
  reference: document.getElementById("modalReference"),
  category: document.getElementById("modalCategory"),
  coordinates: document.getElementById("modalCoordinates"),
  rarity: document.getElementById("modalRarity"),
  readTime: document.getElementById("modalReadTime"),
  tag: document.getElementById("modalTag"),
  title: document.getElementById("modalTitle"),
  lead: document.getElementById("modalLead"),
  body: document.getElementById("modalBody"),
  sourceNote: document.getElementById("modalSourceNote")
};

let activeLayout = "grid";
let activeFilter = "all";
let lastFocusedElement = null;

function updateDate() {
  if (!currentDate) return;

  const now = new Date();
  const formatter = new Intl.DateTimeFormat("es-MX", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  currentDate.textContent = formatter.format(now).replace(/\./g, "").toUpperCase();
  currentDate.dateTime = now.toISOString();
}

function applyTheme(theme) {
  const isLight = theme === "light";
  root.dataset.theme = isLight ? "light" : "dark";

  themeToggle?.setAttribute("aria-pressed", String(isLight));
  themeToggle?.setAttribute(
    "aria-label",
    isLight ? "Activar modo oscuro" : "Activar modo claro"
  );

  localStorage.setItem("cronicas-theme", isLight ? "light" : "dark");
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("cronicas-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    applyTheme(savedTheme);
    return;
  }

  applyTheme(
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );
}

function toggleTheme() {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
}

function setLayout(layout) {
  if (layout !== "grid" && layout !== "list") return;

  activeLayout = layout;
  const isList = layout === "list";

  document.querySelectorAll("[data-layout]").forEach((button) => {
    const active = button.dataset.layout === layout;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  bentoGrid?.classList.toggle("is-hidden", isList);

  if (listView) {
    listView.classList.toggle("is-visible", isList);
    listView.setAttribute("aria-hidden", String(!isList));
  }

  requestAnimationFrame(() => window.refreshArchiveAnimations?.());
}

function setFilter(filter) {
  activeFilter = filter;

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  document.querySelectorAll(".news-card").forEach((card) => {
    const matches = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !matches);
  });

  document.querySelectorAll(".archive-list__row").forEach((row) => {
    const matches = filter === "all" || row.dataset.category === filter;
    row.classList.toggle("is-hidden", !matches);
  });

  requestAnimationFrame(() => window.refreshArchiveAnimations?.());
}

function openModal(articleId) {
  const article = articles[articleId];
  if (!article || !modal) return;

  lastFocusedElement = document.activeElement;

  modalFields.reference.textContent = article.reference;
  modalFields.category.textContent = article.category;
  modalFields.coordinates.textContent = article.coordinates;
  modalFields.rarity.textContent = article.rarity;
  modalFields.readTime.textContent = article.readTime;
  modalFields.tag.textContent = article.category;
  modalFields.title.textContent = article.title;
  modalFields.lead.textContent = article.lead;
  modalFields.image.src = article.image;
  modalFields.image.alt = article.title;
  modalFields.sourceNote.textContent = article.sourceNote;

  modalFields.body.replaceChildren(
    ...article.body.map((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      return p;
    })
  );

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");

  if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.fromTo(
      ".modal__window",
      { y: 32, opacity: 0, scale: .985 },
      { y: 0, opacity: 1, scale: 1, duration: .38, ease: "power3.out" }
    );
  }

  modalClose?.focus();
}

function finishCloseModal() {
  modal?.classList.remove("is-open");
  modal?.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");

  if (lastFocusedElement?.focus) {
    lastFocusedElement.focus();
  }
}

function closeModal() {
  if (!modal?.classList.contains("is-open")) return;

  if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.to(".modal__window", {
      y: 18,
      opacity: 0,
      duration: .2,
      ease: "power2.in",
      onComplete: finishCloseModal
    });
  } else {
    finishCloseModal();
  }
}

function bindEvents() {
  themeToggle?.addEventListener("click", toggleTheme);

  document.querySelectorAll("[data-layout]").forEach((button) => {
    button.addEventListener("click", () => setLayout(button.dataset.layout));
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });

  document.querySelectorAll("[data-open-article]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openModal(button.dataset.openArticle);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  modalClose?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) {
      closeModal();
    }
  });

  document.querySelector(".hero-card")?.addEventListener("click", (event) => {
    if (!event.target.closest("button")) openModal("socotra");
  });
}

function initializeApp() {
  initializeTheme();
  updateDate();
  window.setInterval(updateDate, 60 * 1000);
  bindEvents();
  setLayout("grid");
  setFilter("all");
}

window.openModal = openModal;
window.closeModal = closeModal;

document.addEventListener("DOMContentLoaded", initializeApp);
