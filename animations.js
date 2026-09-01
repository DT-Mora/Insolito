/* CRÓNICAS ANÓMALAS · animations.js · fail-safe editorial motion */
"use strict";
const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
window.animateModal=function(open,updateHistory=true){
 const win=document.querySelector(".modal__window"); if(!win)return;
 if(open&&window.gsap&&!reducedMotion){gsap.fromTo(win,{y:18,scale:.99},{y:0,scale:1,duration:.28,ease:"power3.out",overwrite:true});}
 else if(!open&&window.gsap&&!reducedMotion){gsap.to(win,{y:12,duration:.16,ease:"power2.in",overwrite:true,onComplete:()=>window.__finishModalClose?.(updateHistory)});}
 else if(!open){window.__finishModalClose?.(updateHistory);}
};
window.refreshArchiveAnimations=function(){
 if(!window.gsap||!window.ScrollTrigger||reducedMotion)return;
 gsap.utils.toArray(".card:not(.is-hidden)").forEach(card=>gsap.fromTo(card,{y:10},{y:0,duration:.28,ease:"power2.out",overwrite:true,scrollTrigger:{trigger:card,start:"top 92%",once:true}}));
 window.ScrollTrigger.refresh();
};
document.addEventListener("DOMContentLoaded",()=>{
 if(!window.gsap||reducedMotion)return;
 if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
 const hero=document.querySelector(".hero-card");
 if(hero)gsap.fromTo(hero,{y:10},{y:0,duration:.4,ease:"power3.out",overwrite:true});
 const heading=document.querySelector(".archive-heading");
 if(heading&&window.ScrollTrigger)gsap.fromTo(heading,{y:8},{y:0,duration:.3,ease:"power2.out",scrollTrigger:{trigger:heading,start:"top 92%",once:true}});
 window.refreshArchiveAnimations();
});
