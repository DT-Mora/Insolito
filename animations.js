/* CRÓNICAS ANÓMALAS · animations.js · motion is progressive enhancement only */
"use strict";

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function animateModal(open, writeHistory = true) {
  const modalWindow = document.querySelector(".modal__window");
  if (!modalWindow) return;
  if (!window.gsap || reduceMotion) {
    if (!open) window.finishClose?.(writeHistory);
    return;
  }
  if (open) {
    gsap.fromTo(modalWindow, { y: 18, scale: .99 }, { y: 0, scale: 1, duration: .28, ease: "power3.out", clearProps: "transform" });
  } else {
    gsap.to(modalWindow, { y: 12, duration: .18, ease: "power2.in", onComplete: () => window.finishClose?.(writeHistory) });
  }
}
window.animateModal = animateModal;

function refreshArchiveAnimations() {
  if (!window.gsap || !window.ScrollTrigger || reduceMotion) return;
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.utils.toArray(".card:not(.is-hidden)").forEach((card, index) => {
    gsap.fromTo(card, { y: 18 }, {
      y: 0, duration: .45, delay: Math.min(index * .035, .14), ease: "power3.out", clearProps: "transform",
      scrollTrigger: { trigger: card, start: "top 92%", once: true }
    });
  });
  ScrollTrigger.refresh();
}
window.refreshArchiveAnimations = refreshArchiveAnimations;

function initMotion() {
  if (!window.gsap || reduceMotion) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector(".hero-card");
  if (hero) {
    gsap.fromTo(hero, { y: 18 }, { y: 0, duration: .6, ease: "power3.out", clearProps: "transform" });
    gsap.fromTo(".hero-copy > *", { y: 8 }, { y: 0, stagger: .045, duration: .35, delay: .12, ease: "power3.out", clearProps: "transform" });
  }

  if (window.ScrollTrigger) {
    gsap.fromTo(".archive-heading", { y: 12 }, {
      y: 0, duration: .45, ease: "power3.out", clearProps: "transform",
      scrollTrigger: { trigger: ".archive-heading", start: "top 92%", once: true }
    });
    refreshArchiveAnimations();
  }
}

document.addEventListener("DOMContentLoaded", initMotion);
