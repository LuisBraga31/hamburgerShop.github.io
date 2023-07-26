const headerContent = document.querySelector('#menuContent');
const menuHamburger = document.querySelector('.menu_hamb');

let show = true;

function change() {
    headerContent.classList.toggle('on', show);
    show = !show;
}

menuHamburger.addEventListener('click', () => change());