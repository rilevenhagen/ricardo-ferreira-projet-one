const menu = document.querySelector('.fa-bars');
const dorpDown = document.querySelector('menu-showup')
const squareNav = document.querySelector('fa-minus-square')
const menu2 = document.querySelector('.fa-minus-square')


menu.addEventListener('click', function () {

    const dropDown1 = document.querySelector(".menu-Li")
    dropDown1.classList.toggle("menu-showup");

    const hamburger = document.querySelector(".hamburger")
    hamburger.classList.toggle("hamburger-de-none");
    
    const hamburger2 = document.querySelector(".hamburger2");
    hamburger2.classList.toggle("hamburger-de-block")
});



menu2.addEventListener('click', function () {
    const hamburger3 = document.querySelector(".hamburger2");
    hamburger3.classList.toggle("hamburger-de-block");
    const dropDown1 = document.querySelector("menu-showup");
    dropDown1.classList.toggle(".menu-Li");
    const hamburger = document.querySelector("hamburger-de-none");
    hamburger.classList.toggle(".hamburger");


});



