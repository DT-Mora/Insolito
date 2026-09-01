/* CRÓNICAS ANÓMALAS · animations.js
   Capa opcional: si GSAP no carga, nada queda oculto.
*/
"use strict";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function finishModalClose(updateHistory) {
  if (typeof window.__finishModalClose === "function") {
    window.__finishModalClose(updateHistory);
  }
}

window.animateModal = function animateModal(open, updateHistory = true) {
  const modalWindow = document.querySelector(".modal__window");
  if (!modalWindow) return;

  // The modal is always visible through CSS when open.
  // GSAP only adds a transform/opacity animation after the open state exists.
  if (open && window.gsap && !reducedMotion) {
    gsap.fromTo(
      modalWindow,
      { y: 18, scale: 0.99 },
      { y: 0, scale: 1, duration: 0.28, ease: "power3.out", overwrite: true }
    );
    return;
  }

  if (!open && window.gsap && !reducedMotion) {
    gsap.to(modalWindow, {
      y: 12,
      duration: 0.16,
      ease: "power2.in",
      overwrite: true,
      onComplete: () => finishModalClose(updateHistory)
    });
    return;
  }

  if (!open) finishModalClose(updateHistory);
};

window.refreshArchiveAnimations = function refreshArchiveAnimations() {
  if (!window.gsap || !window.ScrollTrigger || reducedMotion) return;

  // Never set opacity to 0. Content is visible even if an animation is interrupted.
  gsap.utils.toArray(".card:not(.is-hidden)").forEach((card) => {
    gsap.fromTo(
      card,
      { y: 12 },
      { y: 0, duration: 0.32, ease: "power2.out", overwrite: true,
        scrollTrigger: { trigger: card, start: "top 92%", once: true } }
    );
  });

  window.ScrollTrigger.refresh();
};

document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || reducedMotion) return;

  const hero = document.querySelector(".hero-card");
  if (hero) {
    gsap.fromTo(
      hero,
      { y: 12 },
      { y: 0, duration: 0.42, ease: "power3.out", overwrite: true }
    );
  }

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const heading = document.querySelector(".archive-heading");
    if (heading) {
      gsap.fromTo(
        heading,
        { y: 10 },
        { y: 0, duration: 0.35, ease: "power2.out",
          scrollTrigger: { trigger: heading, start: "top 92%", once: true } }
      );
    }
    window.refreshArchiveAnimations();
  }
});
