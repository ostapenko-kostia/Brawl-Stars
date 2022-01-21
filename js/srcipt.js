document.addEventListener("DOMContentLoaded", function(event) { 
    var menuSandwich = document.querySelector('.menu-sandwich');
    var menu = document.querySelector('.header-menu-list');
    menuSandwich.addEventListener('click', function() {
        menu.classList.toggle('menu-active');
    });
});