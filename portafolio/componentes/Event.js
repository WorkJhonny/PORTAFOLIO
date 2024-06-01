document.addEventListener("DOMContentLoaded", function() {
    const icono = document.getElementById("perfil");
    if (icono) {
        const sonido = new Audio();
        sonido.src = icono.getAttribute("data-sound");
        let isPlaying = false; // Variable para rastrear el estado de reproducción

        // Reproduce o pausa el sonido al hacer clic en el icono
        icono.addEventListener("click", function() {
            if (isPlaying) {
                sonido.pause();
                isPlaying = false;
            } else {
                sonido.play();
                isPlaying = true;
            }
        });
    }
});