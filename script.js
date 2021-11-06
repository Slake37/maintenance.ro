let hamMenu = document.querySelector('.ham-menu');
let navLinks = document.querySelector('.nav-links');

hamMenu.addEventListener('click', function(){
    navLinks.classList.toggle('open');
})