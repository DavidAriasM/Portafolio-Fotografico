let header = document.querySelector('.header');
let footer = document.querySelector('footer');

window.onresize = function() {
    if (window.innerWidth >= 990) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
        header.classList.add('fijo')
    }
}