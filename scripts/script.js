
function moveSlide(step) {
    let carousel = new bootstrap.Carousel(document.querySelector('#carouselLogos'));
    if (step === -1) {
        carousel.prev();
    } else {
        carousel.next();
    }
}
