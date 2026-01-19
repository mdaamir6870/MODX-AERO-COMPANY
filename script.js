// scroll-to-top
const scrollBtn=document.getElementById('scrollTop');
window.addEventListener('scroll',()=>{
  scrollBtn.style.display=window.scrollY>200?'block':'none';
});
scrollBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
