// preloader.onload

const preloader = document.getElementById("preloader");

// EventListenersAdding.inload

window.addEventListener('load', ()=>{

  preloader.style.cursor = 'auto';
  
  setTimeout(()=>{
    
    preloader.classList.add('remove');

});
