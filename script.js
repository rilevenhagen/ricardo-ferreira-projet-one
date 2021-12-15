const menu = document.querySelector('.fa-bars');
const dorpDown = document.querySelector('menu-showup')



menu.addEventListener('click', function () {
    const dropDown1 = document.querySelector(".menu-Li")
    dropDown1.classList.toggle('menu-showup');
})