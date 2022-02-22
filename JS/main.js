var menuButton = document.querySelector('.dropbtn');
var menu = document.querySelector('.dropdown-content');

menuButton.addEventListener('click' , function(){
    menu.classList.toggle('show');
    menuButton.classList.toggle('close');
});