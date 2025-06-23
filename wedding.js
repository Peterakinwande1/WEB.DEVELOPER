// Countdown Timer
function updateCountdown() {
  const eventDate = new Date("2025-08-16T12:00:00+01:00").getTime();
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft < 0) return; // Event passed

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const pad = (n) => n.toString().padStart(2, "0");

  // Update full countdown section
  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);

  // Update floating countdown in header
  document.getElementById("cdays").textContent = pad(days);
  document.getElementById("chours").textContent = pad(hours);
  document.getElementById("cminutes").textContent = pad(minutes);
  document.getElementById("cseconds").textContent = pad(seconds);
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Lightbox functionality
const lightboxLinks = document.querySelectorAll('.lightbox');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');

lightboxLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const imgSrc = this.getAttribute('href');
    lightboxImg.src = imgSrc;
    lightboxOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  });
});

lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// RSVP form dummy handler
function handleRSVP(e) {
  e.preventDefault();
  alert("Thank you for your RSVP! We will be in touch.");
  e.target.reset();
}

// Background music toggle
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

// Enable play on first user interaction for autoplay compliance
window.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.muted = false;
    bgMusic.play();
    musicToggle.textContent = '🔊';
  }
}, { once: true });

musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = '🔊';
  } else {
    bgMusic.pause();
    musicToggle.textContent = '🔈';
  }
});
