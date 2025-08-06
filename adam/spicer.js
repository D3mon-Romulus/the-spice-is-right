// Email Contact Button
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("emailLinkContainer");

  if (container) {
    const email = "lanceme27@gmail.com";
    const subject = "Website Inquiry";
    const body = "Hello, I would like to know more about your services.";

    const a = document.createElement("a");
    a.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    a.textContent = "📧 Contact Us";
    a.className = "email-button";

    container.appendChild(a);
  }

  // Mobile Menu Toggle
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");

  if (menu && menuLinks) {
    menu.addEventListener("click", () => {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
    });
  }

  // Logo Size Adjustment
  function adjustLogoSize() {
    const logo = document.querySelector('.site-logo');
    if (!logo) return;

    if (window.innerWidth <= 600) {
      logo.classList.add('mobile-logo');
      logo.classList.remove('desktop-logo');
    } else {
      logo.classList.add('desktop-logo');
      logo.classList.remove('mobile-logo');
    }
  }

  adjustLogoSize();
  window.addEventListener('resize', adjustLogoSize);

  // Lightbox Effect for Images
  const links = document.querySelectorAll('.lightbox');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const img = document.createElement('img');
      img.src = link.href;
      img.style.maxWidth = '90vw';
      img.style.maxHeight = '90vh';
      img.style.borderRadius = '10px';
      img.style.boxShadow = '0 0 20px rgba(0,0,0,0.7)';
      img.style.zIndex = '10001';

      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = '10000';
      overlay.appendChild(img);

      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });

      document.body.appendChild(overlay);
    });
  });
});
