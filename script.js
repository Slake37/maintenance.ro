let hamMenu = document.querySelector('.ham-menu');
let navLinks = document.querySelector('.nav-links');
let modal = document.querySelector('.modal');
let privacy = document.querySelector('#privacy');
let closeBtn = document.querySelector('.closeBtn');

window.addEventListener('scroll', function(ev) {

    var distanceToTop = privacy.getBoundingClientRect().top;
 
    console.log(distanceToTop);
 });

hamMenu.addEventListener('click', function(){
    navLinks.classList.toggle('open');
})

privacy.addEventListener('click', function(){
    modal.style.display = 'block';
})

closeBtn.addEventListener('click',function(){
    modal.style.display = 'none';
})