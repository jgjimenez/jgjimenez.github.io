document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link'); // Selector corregido
    const pageContents = document.querySelectorAll('.page-content');

    // Estado de la reproducción
    let isPlaying = !audio.paused;

    // Función para mostrar una página y ocultar las demás
    function showPage(pageId) {
        pageContents.forEach(page => {
            page.classList.remove('active');
        });
        const pageToShow = document.getElementById(pageId);
        if (pageToShow) {
            pageToShow.classList.add('active');
        }
    }

    // Configurar Media Session (esta parte puede quedar fuera si no es la causa del problema)
    function initializeMediaSession() {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: 'Radio Vida Eterna',
                artist: 'Transmitiendo la palabra de Dios',
                artwork: [
                    { src: '/images/Radio_Vida_Eterna_logo_512.png', sizes: '512x512', type: 'image/png' },
                    { src: '/images/Radio_Vida_Eterna_logo_192.png', sizes: '192x192', type: 'image/png' }
                ]
            });

            navigator.mediaSession.setActionHandler('play', playAudio);
            navigator.mediaSession.setActionHandler('pause', pauseAudio);
            updatePlaybackState();
        }
    }

    function updatePlaybackState() {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = audio.paused ? 'paused' : 'playing';
        }
    }

    function playAudio() {
        audio.play().catch(error => {
            console.error('Error al reproducir:', error);
        });
        isPlaying = true;
        updateInterface();
        updatePlaybackState();
    }

    function pauseAudio() {
        audio.pause();
        isPlaying = false;
        updateInterface();
        updatePlaybackState();
    }

    function togglePlayback() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    function updateInterface() {
        if (isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    }

    // Event Listeners para la navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Asegurarse de prevenir el comportamiento predeterminado
            const targetId = this.dataset.page;
            console.log('Se hizo clic en:', this); // Ver el elemento clickeado
            console.log('data-page:', targetId);   // Ver el valor de data-page
            showPage(targetId);
            history.pushState({ page: targetId }, targetId, '#' + targetId);
        });
    });

    // Event Listeners para el reproductor
    playPauseBtn.addEventListener('click', togglePlayback);

    audio.addEventListener('play', () => {
        isPlaying = true;
        updateInterface();
        updatePlaybackState();
    });
    audio.addEventListener('pause', () => {
        isPlaying = false;
        updateInterface();
        updatePlaybackState();
    });
    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        isPlaying = false;
        updateInterface();
        updatePlaybackState();
    });

    // Manejar la navegación hacia atrás/adelante del navegador
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.page) {
            showPage(event.state.page);
        } else {
            // Si no hay estado, mostrar la página de inicio
            showPage('home');
        }
    });

    // Inicialización
    const splashScreen = document.querySelector('.splash-screen');
    setTimeout(() => {
        splashScreen.remove();
    }, 6000);

    initializeMediaSession();
    showPage('home'); // Mostrar la página de inicio al cargar

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration) {
                registration.update();
            }
        });
    }
});

// Registrar Service Worker (este bloque puede quedar fuera del DOMContentLoaded si lo prefieres)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registrado:', registration.scope);
                registration.addEventListener('updatefound', () => {
                    console.log('Nueva versión encontrada...');
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
}