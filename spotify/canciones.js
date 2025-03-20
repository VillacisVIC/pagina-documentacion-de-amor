const songs = [
    {
        title: "Erat Volutpat",
        artist: "Duis autem",
        rating: "★★★☆☆",
        src: "cancion1.mp3",
        cover: "gif-animado.gif"
    },
    {
        title: "Otra Canción",
        artist: "Otro Artista",
        rating: "★★★★★",
        src: "cancion2.mp3",
        cover: "imagen2.jpg"
    },
    {
        title: "Tema Especial",
        artist: "Músico Famoso",
        rating: "★★★★☆",
        src: "cancion3.mp3",
        cover: "imagen3.jpg"
    }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songRating = document.getElementById("song-rating");
const songCover = document.getElementById("song-cover");
const playButton = document.querySelector(".play");
const progressBar = document.getElementById("progress-bar");

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songRating.textContent = song.rating;
    songCover.src = song.cover;
    audioSource.src = song.src;

    console.log("Cargando canción:", song.src); // 🔹 Debug

    audioPlayer.load();
}

function togglePlay() {
    if (audioPlayer.paused) {
        try {
            audioPlayer.play();
            playButton.innerHTML = "⏸";
        } catch (error) {
            console.error("Error al reproducir:", error);
        }
    } else {
        audioPlayer.pause();
        playButton.innerHTML = "▶";
    }
}

function togglePlay() {
    console.log("Botón de play presionado"); // Verificar si la función se ejecuta

    if (audioPlayer.paused) {
        audioPlayer.play().then(() => {
            console.log("Reproduciendo audio");
            playButton.textContent = "⏸";
        }).catch(error => {
            console.error("Error al reproducir el audio:", error);
        });
    } else {
        audioPlayer.pause();
        console.log("Audio pausado");
        playButton.textContent = "▶";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playButton = document.getElementById("play-button");

    if (!audioPlayer) {
        console.error("No se encontró el elemento <audio> en el DOM");
        return;
    }

    function togglePlay() {
        console.log("Botón de play presionado");

        if (audioPlayer.paused) {
            audioPlayer.play().then(() => {
                console.log("Reproduciendo audio");
                playButton.textContent = "⏸";
            }).catch(error => {
                console.error("Error al reproducir el audio:", error);
            });
        } else {
            audioPlayer.pause();
            console.log("Audio pausado");
            playButton.textContent = "▶";
        }
    }

    playButton.onclick = togglePlay;
});
// Cargar la primera canción
loadSong(currentSongIndex);
