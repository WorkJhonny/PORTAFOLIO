    const images = [
        '../assets/Certificados/Liderazgo.png',
        '../assets/Certificados/Neuro Oratoria.png',
        '../assets/Certificados/Nivelación.png',
        '../assets/Certificados/Coaching internacional.png',
        '../assets/Certificados/Certificado de proyecto Educativo.jpeg',
        '../assets/Certificados/Buenos Aire, Argentina Prueba de Ingles.png',
        '../assets/Certificados/Segunda Institución.jpeg',
        '../assets/Certificados/App Android IOS.jpeg',
        '../assets/Final.png',
    ];  

    
    let currentIndex = 0;
    const galleryImage = document.getElementById('gallery-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function showImage(index) {
      galleryImage.src = images[index];
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    showImage(currentIndex);