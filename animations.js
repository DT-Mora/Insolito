/* CRÓNICAS ANÓMALAS · motion */
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
let gsapReady=false;

function animateModal(open){
  if(!window.gsap||reduce){if(!open)finishClose();return}
  if(open){
    gsap.fromTo(".modal__window",{y:30,opacity:0,scale:.985},{y:0,opacity:1,scale:1,duration:.38,ease:"power3.out"});
  }else{
    gsap.to(".modal__window",{y:16,opacity:0,duration:.2,ease:"power2.in",onComplete:finishClose});
  }
}
window.animateModal=animateModal;

function refreshArchiveAnimations(){
  if(!window.gsap||!window.ScrollTrigger||reduce)return;
  ScrollTrigger.getAll().forEach(t=>t.kill());
  gsap.utils.toArray(".card").forEach((card,i)=>{
    if(card.classList.contains("is-hidden"))return;
    gsap.fromTo(card,{opacity:0,y:28},{opacity:1,y:0,duration:.55,delay:Math.min(i*.035,.18),ease:"power3.out",
      scrollTrigger:{trigger:card,start:"top 90%",toggleActions:"play none none reverse"}});
  });
  ScrollTrigger.refresh();
}
window.refreshArchiveAnimations=refreshArchiveAnimations;

function initMotion(){
  if(!window.gsap||!window.ScrollTrigger||reduce)return;
  gsap.registerPlugin(ScrollTrigger);
  const hero=document.querySelector(".hero-card");
  if(hero){
    gsap.fromTo(hero,{opacity:0,y:28},{opacity:1,y:0,duration:.7,ease:"power3.out"});
    gsap.fromTo(".hero-copy>*",{opacity:0,y:14},{opacity:1,y:0,stagger:.06,duration:.5,delay:.18,ease:"power3.out"});
  }
  gsap.fromTo(".archive-heading",{opacity:0,y:20},{opacity:1,y:0,duration:.6,ease:"power3.out",scrollTrigger:{trigger:".archive-heading",start:"top 90%"}});
  refreshArchiveAnimations();
}
document.addEventListener("DOMContentLoaded",()=>setTimeout(initMotion,120));
