const divLightbox = document.querySelector('.lightbox');
const enlaces = document.querySelectorAll('.enlace-lightbox');
const imgLightbox = document.querySelector('.img-lightbox');
const btnCerrar = document.querySelector('.btn-cerrar-lightbox');


enlaces.forEach((enlace, i) => {
    enlaces[i].addEventListener('click', (e) => {
        e.preventDefault();
        let img = enlace.querySelector('img').src;
        divLightbox.classList.add('activo');
        imgLightbox.setAttribute('src', img);
    })
});

btnCerrar.addEventListener('click', () => {
    divLightbox.classList.remove('activo');
})