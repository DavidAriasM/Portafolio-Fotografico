let headerMenu = document.querySelector('header');
let footerMenu = document.querySelector('footer');

window.onresize = function() {
    if (window.innerWidth >= 990) {
        footerMenu.style.display = 'block';
    } else {
        footerMenu.style.display = 'none';
        headerMenu.classList.add('fijo');
    }
}