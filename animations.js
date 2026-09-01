/* CRÓNICAS ANÓMALAS · animations.js */
"use strict";

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function animateModal(open, writeHistory = true) {
  if (!window.gsap || reduceMotion) {
    if (!open) window.finishClose?.(writeHistory);
    return;
  }

  if (open) {
    gsap.fromTo(".modal__window",
      { y: 28, opacity: 0, scale: .985 },
      { y: 0, opacity: 1, scale: 1, duration: .36, ease: "power3.out" }
    );
  } else {
    gsap.to(".modal__window", {
      y: 16, opacity: 0, duration: .2, ease: "power2.in",
      onComplete: () => window.finishClose?.(writeHistory)
    });
  }
}
window.animateModal = animateModal;

function refreshArchiveAnimations() {
  if (!window.gsap || !window.ScrollTrigger || reduceMotion) return;
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  gsap.utils.toArray(".card:not(.is-hidden)").forEach((card, index) => {
    gsap.fromTo(card,
      { opacity: 0, y: 22 },
      {
        opacity: 1, y: 0, duration: .5, delay: Math.min(index * .035, .16),
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 90%", once: true }
      }
    );
  });
  ScrollTrigger.refresh();
}
window.refreshArchiveAnimations = refreshArchiveAnimations;

function initMotion() {
  if (!window.gsap || reduceMotion) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector(".hero-card");
  if (hero) {
    gsap.fromTo(hero, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .7, ease: "power3.out" });
    gsap.fromTo(".hero-copy > *", { opacity: 0, y: 12 }, {
      opacity: 1, y: 0, stagger: .05, duration: .45, delay: .15, ease: "power3.out"
    });
  }

  if (window.ScrollTrigger) {
    gsap.fromTo(".archive-heading", { opacity: 0, y: 18 }, {
      opacity: 1, y: 0, duration: .55, ease: "power3.out",
      scrollTrigger: { trigger: ".archive-heading", start: "top 90%", once: true }
    });
    refreshArchiveAnimations();
  }
}
document.addEventListener("DOMContentLoaded", initMotion);
