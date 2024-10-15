
function moveSlide(step) {
    let carousel = new bootstrap.Carousel(document.querySelector('#carouselLogos'));
    if (step === -1) {
        carousel.prev();
    } else {
        carousel.next();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const dots = document.querySelectorAll('.dot');
    const carouselImages = document.querySelectorAll('.carousel-container img');
    let index = 0;

    // Mostrar la primera imagen al cargar
    carouselImages[index].classList.add('active');

    function updateCarousel() {
        // Ocultar todas las imágenes
        carouselImages.forEach(img => img.classList.remove('active'));
        // Mostrar la imagen actual
        carouselImages[index].classList.add('active');
        // Actualizar los puntos
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Añadir eventos a los puntos
    dots.forEach((dot, i) => {
        dot.addEventListener('click', function () {
            index = i; 
            updateCarousel();
        });
    });

    // Controlar la navegación automática (opcional)
    setInterval(() => {
        index = (index + 1) % carouselImages.length; 
        updateCarousel();
    }, 5000); 
});
