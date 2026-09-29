document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id==="#")return;const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
const slides=[...document.querySelectorAll('.opening-slide')];
if(slides.length){const video=slides[0].querySelector('video');const position=document.querySelector('.slide-position');let active=0,timer;
  function show(index){clearTimeout(timer);active=Math.max(0,Math.min(index,slides.length-1));slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===active);slide.setAttribute('aria-hidden',String(i!==active))});position.textContent=`${active+1} / ${slides.length}`;if(active===0){video.currentTime=0;video.play().catch(()=>{})}else{video.pause();if(active===1)timer=setTimeout(()=>show(2),6500)}}
  video.addEventListener('ended',()=>show(1));document.querySelector('.slide-prev').addEventListener('click',()=>show(active-1));document.querySelector('.slide-next').addEventListener('click',()=>show(active+1));
  video.play().catch(()=>{});
}
