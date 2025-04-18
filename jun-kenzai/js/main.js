document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.about-text, .about-image, .feature-item, .evidence-item, .testimonial-item, .product-card, .product-image, .product-details');
  elements.forEach(element => observer.observe(element));
}); 