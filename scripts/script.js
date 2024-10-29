
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

    carouselImages[index].classList.add('active');

    function updateCarousel() {

        carouselImages.forEach(img => img.classList.remove('active'));

        carouselImages[index].classList.add('active');

        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', function () {
            index = i; 
            updateCarousel();
        });
    });

    setInterval(() => {
        index = (index + 1) % carouselImages.length; 
        updateCarousel();
    }, 5000); 
});

document.addEventListener('DOMContentLoaded', function() {
    var currentLanguage = 'Español'; 

    
    var toggleLangBtn = document.getElementById('toggle-lang');
    if (toggleLangBtn) { 
        toggleLangBtn.addEventListener('click', function() {
            var title = document.getElementById('title');
            var paragraph1 = document.getElementById('paragraph1');
            var paragraph2 = document.getElementById('paragraph2');
            var paragraph3 = document.getElementById('paragraph3');

            if (currentLanguage === 'Español') {
                title.textContent = 'Our Story';
                paragraph1.innerHTML = 'At <strong>NethSystem PF C.A.</strong>, we were born with a clear vision: to develop technological solutions that compete with the most recognized brands, always focusing on the benefit of our clients. From the beginning, we focused on creating a robust billing and inventory system, tailored to the needs of the Venezuelan market.';
                paragraph2.textContent = 'Throughout our journey, we have faced some of the most difficult times in Venezuela, but our love for this land drives us to keep moving forward stronger than ever. We firmly believe in the power of technology as a driving force for change, and that is why we give our best every day to create opportunities and generate jobs for newly graduated people with no experience.';
                paragraph3.textContent = 'At NethSystem, we not only build software, but also help shape the professional future of those who are just starting out, providing them with a solid foundation for their personal and professional growth.';
                this.textContent = 'Español';
                currentLanguage = 'English';
            } else {
                title.textContent = 'Nuestra Historia';
                paragraph1.innerHTML = 'En <strong>NethSystem PF C.A.</strong>, nacimos con una visión clara: desarrollar soluciones tecnológicas que compitan con las marcas más reconocidas, pero siempre con un enfoque en el beneficio de nuestros clientes. Desde el inicio, nos enfocamos en crear un sistema de facturación e inventario robusto, adaptado a las necesidades del mercado venezolano.';
                paragraph2.textContent = 'A lo largo de nuestra trayectoria, hemos enfrentado los momentos más difíciles que ha vivido Venezuela, pero nuestro amor por esta tierra nos impulsa a seguir adelante con más fuerza que nunca. Creemos firmemente en el poder de la tecnología como motor de cambio, y por eso, cada día damos lo mejor de nosotros para crear oportunidades y generar empleo para recién graduados sin experiencia.';
                paragraph3.textContent = 'En NethSystem, no solo construimos software, sino que también ayudamos a forjar el futuro profesional de quienes están empezando, brindándoles una base sólida para su desarrollo personal y profesional.';
                this.textContent = 'English';
                currentLanguage = 'Español'; 
            }
        });
    }

  
    var toggleAboutLangBtn = document.getElementById('toggle-about-lang');
    if (toggleAboutLangBtn) { 
        toggleAboutLangBtn.addEventListener('click', function() {
            var titleabout = document.getElementById('about-title');
            var paragraph1 = document.getElementById('about-paragraph1');
            var paragraph2 = document.getElementById('about-paragraph2');
            var paragraph3 = document.getElementById('about-paragraph3');
            var paragraph4 = document.getElementById('about-paragraph4');

            if (currentLanguage === 'Español') {
                titleabout.textContent = 'About Me';
                paragraph1.innerHTML = 'Hello! I am <strong>José Gregorio Jiménez Sánchez</strong>, a passionate software developer with experience in technologies such as C#, .NET, Flutter, and a lover of open-source software. I specialize in developing desktop applications, web applications, and IT infrastructure solutions.';
                paragraph2.textContent = 'Throughout my career, I have worked on various projects ranging from creating billing and inventory systems to implementing high-performance enterprise solutions. I am motivated by the idea of creating tools that make people\'s lives easier and optimize processes within organizations.';
                paragraph3.innerHTML = 'In addition to my work as a developer, I am the founder of <strong>NethSystem PF C.A.</strong>, a company that strives to offer high-quality technological solutions, always focusing on customer needs and constant innovation.';
                paragraph4.textContent = 'If you are looking for someone with passion, experience, and absolute commitment to code quality, do not hesitate to contact me. I am here to help you take your ideas to the next level.';
                this.textContent = 'Español';
                currentLanguage = 'English'; 
            } else {
                titleabout.textContent = 'Sobre mí';
                paragraph1.innerHTML = '¡Hola! Soy <strong>José Gregorio Jiménez Sánchez</strong>, un apasionado desarrollador de software con experiencia en tecnologías como C#, .NET, Flutter y amante del software libre. Me especializo en el desarrollo de aplicaciones de escritorio, aplicaciones web y soluciones de infraestructura IT.';
                paragraph2.textContent = 'A lo largo de mi carrera, he trabajado en diversos proyectos que abarcan desde la creación de sistemas de facturación e inventario hasta la implementación de soluciones empresariales de alto rendimiento. Me motiva la idea de crear herramientas que faciliten la vida de las personas y optimicen los procesos dentro de las organizaciones.';
                paragraph3.innerHTML = 'Además de mi trabajo como desarrollador, soy el fundador de <strong>NethSystem PF C.A.</strong>, una empresa que se esfuerza por ofrecer soluciones tecnológicas de calidad, siempre con un enfoque en las necesidades del cliente y en la innovación constante.';
                paragraph4.textContent = 'Si estás buscando a alguien con pasión, experiencia y un compromiso absoluto con la calidad del código, no dudes en ponerte en contacto conmigo. Estoy aquí para ayudarte a llevar tus ideas al siguiente nivel.';
                this.textContent = 'English';
                currentLanguage = 'Español';
            }
        });
    }
});

const donationGoal = 15000; 


let currentDonations = 106; 


function updateProgress() {
    const progressPercent = Math.min((currentDonations / donationGoal) * 100, 100); 


    document.getElementById('donation-amount').textContent = `$${currentDonations}`;


    const progressBar = document.querySelector('.progress-value');
    progressBar.style.width = `${progressPercent}%`;


    progressBar.style.transition = 'width 0.5s ease'; 
}

function addDonation(amount) {
    currentDonations += amount; 
    updateProgress(); 
}

document.addEventListener('DOMContentLoaded', function() {
    addDonation(0); 
});

document.getElementById('paypalLink').addEventListener('click', function() {
    var selectedAmount = document.getElementById('donationAmount').value; // Obtiene el valor seleccionado del ComboBox
    var paypalUrl;

    // Verifica si se seleccionó 'Otro monto'
    if (selectedAmount === 'custom') {
        paypalUrl = "https://www.paypal.me/josegjimenez"; // URL genérica
    } else {
        paypalUrl = `https://www.paypal.me/josegjimenez/${selectedAmount}`; // URL con el monto seleccionado
    }

    window.open(paypalUrl, '_blank'); // Abre el enlace en una nueva pestaña
});