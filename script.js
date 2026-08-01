// Simple interactivity: mobile nav and gallery lightbox
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle && navToggle.addEventListener('click', () => {
    const expanded = mainNav.style.display === 'block';
    mainNav.style.display = expanded ? '' : 'block';
  });

  // Lightbox
  const thumbs = document.querySelectorAll('.thumb');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      lightboxImg.src = src;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
    });
  });

  lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) closeLightbox();
  });

  function closeLightbox(){
    lightbox.style.display = '';
    lightbox.setAttribute('aria-hidden','true');
    lightboxImg.src = '';
  }

  // Fill current year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
