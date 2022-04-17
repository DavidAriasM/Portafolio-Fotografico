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

contenedor.style.display = 'none'
let contadorSeccion = 0;

window.addEventListener('load', preloader())

function preloader() {
    setTimeout(function() {
        contenedor.style.display = 'flex';
        if (contadorSeccion === 0) btnAnterior.style.display = 'none';
    }, 2000)
}

function siguienteSeccion() {
    contadorSeccion++;
    if (window.innerWidth > 990) {
        if (contadorSeccion >= 0 && contadorSeccion < secciones.length) {
            btnAnterior.style.display = 'flex'
            contenedor.style.transform = `translateX(-${contadorSeccion}00%)`;
            header.style.transform = `translateX(${contadorSeccion}00%)`;
            footer.style.transform = `translateX(${contadorSeccion}00%)`;
        }
        if (contadorSeccion === secciones.length - 1) btnSiguiente.style.display = 'none';
    } else {
        if (contadorSeccion >= 0 && contadorSeccion < secciones.length) {
            btnAnterior.style.display = 'flex'
            location.href = `#seccion${ contadorSeccion + 1 }`;
        }
        if (contadorSeccion === secciones.length - 1) btnSiguiente.style.display = 'none'
    }
}

function anteriorSeccion() {
    contadorSeccion--;
    if (window.innerWidth > 990) {
        if (contadorSeccion <= secciones.length - 1 && contadorSeccion >= 0) {
            btnSiguiente.style.display = 'flex'
            contenedor.style.transform = `translateX(-${contadorSeccion}00%)`
            header.style.transform = `translateX(${contadorSeccion}00%)`;
            footer.style.transform = `translateX(${contadorSeccion}00%)`;
        }
        if (contadorSeccion === 0) btnAnterior.style.display = 'none';
    } else {
        if (contadorSeccion < secciones.length && contadorSeccion >= 0) {
            btnSiguiente.style.display = 'flex'
            location.href = `#seccion${ contadorSeccion + 1 }`;
        }
        if (contadorSeccion === 0) btnAnterior.style.display = 'none';
    }
}

btnMemu.addEventListener('click', function() {
    nav.style.display = 'block';
    footer.style.display = 'none'
});

btnCerrarMenu.addEventListener('click', function() {
    nav.style.display = 'none';
    footer.style.display = 'block'
});

enlaceMenu.forEach(enlace => {
    enlace.addEventListener('click', function() {
        nav.style.display = 'none';
        footer.style.display = 'block';
    });
});