const spans = document.querySelectorAll('.word span');

// Homepage
spans.forEach((span) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });

  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');

    const link = e.target.dataset.link;
    if (link) {
      if (link.startsWith('http')) {
        window.open(link, '_blank');
      } else {
        window.location.href = link;
      }
    }
  });
});

// Fade-in
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// Fade-out
document.querySelectorAll('a[href]').forEach(link => {
  const url = link.getAttribute('href');
  if (url && !url.startsWith('http')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.remove('loaded');
      document.body.style.transition = 'opacity 0.6s ease';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = url;
      }, 600);
    });
  }
});