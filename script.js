// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Simple Gallery Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
  showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
  showSlide(slideIndex);
});

// Auto slide every 5 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 5000);
