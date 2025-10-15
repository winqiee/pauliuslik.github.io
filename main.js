// small animations and active nav highlight
document.addEventListener('DOMContentLoaded', function(){
  // highlight active nav based on url
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-btn').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')){
      a.classList.add('active');
      a.style.border = '1px solid rgba(255,255,255,0.06)';
      a.style.color = 'white';
    }
  });
});