// Desplazamiento personalizado en el carrusel si necesitas controlar el movimiento.
function moveSlide(step) {
    let carousel = new bootstrap.Carousel(document.querySelector('#carouselLogos'));
    if (step === -1) {
        carousel.prev();
    } else {
        carousel.next();
    }
}
