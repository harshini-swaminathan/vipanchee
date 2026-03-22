/* ============================================================
   VIPANCHEE NRUTHYALAYA — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── MOBILE NAV TOGGLE ── */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  /* ── ACTIVE NAV ON SCROLL ── */
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 90) current = s.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  /* ── GALLERY LIGHTBOX ── */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ── CONTACT FORM (Formspree) ── */
  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      const data = new FormData(form);

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          submitBtn.textContent = 'Message Sent ✦';
          submitBtn.classList.add('success');
          form.reset();
        } else {
          throw new Error('Server error');
        }
      } catch {
        submitBtn.textContent = 'Failed — try again';
        submitBtn.disabled = false;
        setTimeout(() => {
          submitBtn.textContent = 'Send Message';
        }, 3000);
      }
    });
  }

});
