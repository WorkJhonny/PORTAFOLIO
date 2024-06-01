const images = [
    '../assets/Educacion.png',
    '../assets/AI e learning.png',
    '../assets/Idiomas.png',
];


let currentIndex = 0;
const galleryImage = document.getElementById('gallery2-image');
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