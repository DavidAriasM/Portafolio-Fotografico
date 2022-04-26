let contenedor = document.querySelector('.container');
let secciones = document.querySelectorAll('section');
let header = document.querySelector('.header');
let footer = document.querySelector('footer');
let btnAnterior = document.getElementById('btn-anterior');
let btnSiguiente = document.getElementById('btn-siguiente');
let btnMemu = document.querySelector('#btn-menu');
let btnCerrarMenu = document.querySelector('#btn-cerrar-menu');
let nav = document.querySelector('.nav');
let enlaceMenu = document.querySelectorAll('.lista-menu a[href^="#"]');
let preloaderSvg = document.querySelector('.preloader');
let lightbox = document.querySelector('.lightbox');
let contadorPaginas = document.querySelector('.contador-paginas')

contenedor.style.display = 'none';
let contadorSeccion = 0;

window.addEventListener('load', preloader());

function preloader() {
    setTimeout(function() {
        contenedor.style.display = 'flex';
        preloaderSvg.style.display = 'none'
        if (contadorSeccion === 0) btnAnterior.style.display = 'none';
    }, 2000)
}

function siguienteSeccion() {
    contadorSeccion++;
    footer.style.display = 'block';
    if (contadorSeccion >= 0 && contadorSeccion < secciones.length) {
        btnAnterior.style.display = 'flex'
        contenedor.style.transform = `translateX(-${contadorSeccion}00%)`;
        header.style.transform = `translateX(${contadorSeccion}00%)`;
        footer.style.transform = `translateX(${contadorSeccion}00%)`;
        lightbox.style.transform = `translateX(${contadorSeccion}00%)`;
        contadorPaginas.style.display = 'block';
        contadorPaginas.textContent = contadorSeccion + 1 + '/' + secciones.length;
    }
    if (contadorSeccion === secciones.length - 1) {
        btnSiguiente.style.display = 'none';
        contadorPaginas.style.display = 'none';
    }
}

function anteriorSeccion() {
    contadorSeccion--;
    footer.style.display = 'block';
    if (contadorSeccion <= secciones.length - 1 && contadorSeccion >= 0) {
        btnSiguiente.style.display = 'flex'
        contenedor.style.transform = `translateX(-${contadorSeccion}00%)`
        header.style.transform = `translateX(${contadorSeccion}00%)`;
        footer.style.transform = `translateX(${contadorSeccion}00%)`;
        lightbox.style.transform = `translateX(${contadorSeccion}00%)`;
        contadorPaginas.style.display = 'block';
        contadorPaginas.textContent = contadorSeccion + 1 + '/' + secciones.length;
    }
    if (contadorSeccion === 0) {
        btnAnterior.style.display = 'none';
        contadorPaginas.style.display = 'none'
    }
}

btnMemu.addEventListener('click', function() {
    nav.style.display = 'block';
    footer.style.display = 'none'
});

btnCerrarMenu.addEventListener('click', function() {
    nav.style.display = 'none';
});

enlaceMenu.forEach(enlace => {
    enlace.addEventListener('click', function() {
        nav.style.display = 'none';
    });
});

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            anteriorSeccion()
            break;
        case 39:
            siguienteSeccion()
            break;
    }
};