
// A dropdown menu on the top of the page for small screen 

const dorpDownMenu = {};

dorpDownMenu.init = () => {
    dorpDownMenu.menu.addEventListener();
};




dorpDownMenu.menu = document.querySelector('.fa-bars');
dorpDownMenu.dorpDown = document.querySelector('menu-showup');

dorpDownMenu.menu.addEventListener ('click', function () {

    //this  part makes the drop down menu appear on the screen
    const dropDown1 = document.querySelector(".menu-Li")
    dropDown1.classList.toggle("menu-showup");
});

dorpDownMenu.init();
