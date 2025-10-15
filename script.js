// small UI niceties
document.addEventListener('DOMContentLoaded', function(){
  // reduce motion respect
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced) return;

  // simple fade-in
  document.querySelectorAll('.card, .product, .info-card, .hero-text, .hero-media img').forEach((el,i)=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(12px)';
    setTimeout(()=>{ el.style.transition='opacity .6s ease, transform .6s ease'; el.style.opacity=1; el.style.transform='translateY(0)'; }, 120*i);
  });
});
