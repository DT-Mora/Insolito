/* =========================================================
   CRÓNICAS ANÓMALAS
   GSAP + ScrollTrigger animations
========================================================= */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function canAnimate() {
  return (
    !reducedMotion &&
    typeof window.gsap !== "undefined" &&
    typeof window.ScrollTrigger !== "undefined"
  );
}

function initHeroAnimation() {
  if (!canAnimate()) return;

  const hero = document.querySelector(".hero-card");
  if (!hero) return;

  const image = hero.querySelector(".hero-card__image-wrap");
  const content = hero.querySelector(".hero-card__content");

  const timeline = gsap.timeline({
    defaults: { ease: "power3.out" }
  });

  timeline.fromTo(
    hero,
    { opacity: 0, y: 36 },
    { opacity: 1, y: 0, duration: .75 }
  );

  if (image) {
    timeline.fromTo(
      image,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: .9 },
      "-=.5"
    );
  }

  if (content) {
    timeline.fromTo(
      content.children,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, stagger: .07, duration: .55 },
      "-=.65"
    );
  }
}

function initHeadingAnimation() {
  if (!canAnimate()) return;

  const heading = document.querySelector(".section-heading");
  if (!heading) return;

  gsap.fromTo(
    heading,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: .65,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    }
  );
}

function initCardAnimations() {
  if (!canAnimate()) return;

  gsap.utils.toArray(".news-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: .65,
        delay: Math.min(index * .04, .2),
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none reverse",
          once: true
        }
      }
    );
  });
}

function initFooterAnimation() {
  if (!canAnimate()) return;

  const footer = document.querySelector(".site-footer");
  const main = footer?.querySelector(".site-footer__main");
  if (!main) return;

  gsap.fromTo(
    main,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: .8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 92%",
        toggleActions: "play none none reverse"
      }
    }
  );
}

function initMicroInteractions() {
  if (!canAnimate()) return;

  document.querySelectorAll(
    ".read-button, .card-link, .quote-card__trigger, .archive-list__row button"
  ).forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        y: -2,
        duration: .18,
        ease: "power2.out",
        overwrite: true
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        y: 0,
        duration: .22,
        ease: "power2.out",
        overwrite: true
      });
    });
  });
}

function initListViewAnimation() {
  if (!canAnimate()) return;

  document.querySelectorAll("[data-layout]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.layout !== "list") return;

      gsap.fromTo(
        "#listView",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: .35, ease: "power3.out" }
      );
    });
  });
}

function refreshArchiveAnimations() {
  if (typeof window.ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
}

function initAnimations() {
  if (!canAnimate()) {
    window.refreshArchiveAnimations = refreshArchiveAnimations;
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  initHeroAnimation();
  initHeadingAnimation();
  initCardAnimations();
  initFooterAnimation();
  initMicroInteractions();
  initListViewAnimation();

  window.refreshArchiveAnimations = refreshArchiveAnimations;

  requestAnimationFrame(() => ScrollTrigger.refresh());
}

document.addEventListener("DOMContentLoaded", initAnimations);
