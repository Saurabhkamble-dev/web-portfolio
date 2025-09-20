const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// 3D tilt effect
const card = document.getElementById('card3d');
card.addEventListener('mousemove', e => {
  const r = card.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  const rotateY = ((x - r.width / 2) / r.width) * 20;
  const rotateX = ((r.height / 2 - y) / r.height) * 20;
  card.querySelector('.card-inner').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
card.addEventListener('mouseleave', () => {
  card.querySelector('.card-inner').style.transform = 'rotateX(0) rotateY(0)';
});

// Contact form success popup
const form = document.getElementById("contactForm");
const message = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  message.style.display = "block";
  setTimeout(() => { message.classList.add("fade-out"); }, 3000);
  setTimeout(() => {
    message.style.display = "none";
    message.classList.remove("fade-out");
  }, 3500);
  form.reset();
});

function downloadResume() {
  window.open('YOUR_RESUME_LINK.pdf', '_blank'); // replace with actual PDF link
}
