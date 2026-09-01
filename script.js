// ---- Typed "whoami" hero line ----
const typedLine = document.getElementById('typedLine');
const fullText = 'hafiz_tulus_santoso — rpl_student, cybersecurity_track';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typedLine) {
  if (prefersReducedMotion) {
    typedLine.textContent = fullText;
  } else {
    let i = 0;
    const typeSpeed = 35;
    (function typeChar() {
      if (i <= fullText.length) {
        typedLine.textContent = fullText.slice(0, i);
        i++;
        setTimeout(typeChar, typeSpeed);
      }
    })();
  }
}

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ---- Scroll reveal (fade-up) ----
const revealTargets = document.querySelectorAll(
  '.section, .hero-inner, .skill-card, .cert-card'
);
revealTargets.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach(el => observer.observe(el));

// ---- Footer year ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
