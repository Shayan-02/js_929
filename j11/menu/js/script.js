const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const close = document.querySelector('.close');
const navOverlay = document.querySelector('.nav-overlay');


navToggle.addEventListener('click', function(){
   navShow();
})

close.addEventListener('click', function(){
    navHide();
})


navOverlay.addEventListener('click', function(){
    navHide();
})



function navShow(){
    navOverlay.style.transition = "all .5s ease"
    navOverlay.classList.add('open');
    nav.style.transition = "all .3s ease .5s"
    nav.classList.add('open');
}
function navHide(){
    nav.style.transition = "all .5s ease"
    nav.classList.remove('open');
    navOverlay.style.transition = "all .3s ease .5s"
    navOverlay.classList.remove('open');
}