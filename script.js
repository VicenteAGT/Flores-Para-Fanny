const flowerContainer = document.getElementById('flower-container');
const lyrics = document.querySelectorAll('.lyric');
let currentLyricIndex = 0;

// Función para crear girasoles
function createSunflower() {
    const sunflower = document.createElement('div');
    sunflower.innerHTML = '🌻';
    sunflower.style.position = 'absolute';
    sunflower.style.left = `${Math.random() * 100}%`;
    sunflower.style.top = `${Math.random() * 100}%`;
    sunflower.style.transform = `rotate(${Math.random() * 360}deg)`;
    sunflower.style.fontSize = `${Math.random() * 40 + 20}px`;
    sunflower.style.opacity = Math.random() * 0.8 + 0.2;
    flowerContainer.appendChild(sunflower);

    setTimeout(() => {
        sunflower.remove();
    }, 8000);
}

// Función para mostrar la letra de la canción
function showLyrics() {
    // Ocultar todos los párrafos
    lyrics.forEach(lyric => lyric.style.opacity = 0);

    // Mostrar el párrafo actual
    lyrics[currentLyricIndex].style.opacity = 1;

    // Avanzar al siguiente párrafo
    currentLyricIndex = (currentLyricIndex + 1) % lyrics.length;

    // Repetir el proceso cada 4 segundos
    setTimeout(showLyrics, 3800);
}

// Crear girasoles cada 100 ms
setInterval(createSunflower, 100);

// Iniciar la secuencia de la letra
showLyrics();