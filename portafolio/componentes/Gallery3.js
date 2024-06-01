const images = [
    '../assets/1.jpg',
    '../assets/2.jpg',
    '../assets/3.jpg',
    '../assets/4.jpg',
    '../assets/5.jpg',
    '../assets/6.jpg',
];


let currentIndex = 0;
const galleryImage = document.getElementById('gallery3-image');
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