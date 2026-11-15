const contactForm = document.querySelector('[data-contact-form]');
const message = contactForm.elements.message;

contactForm.hidden = false;
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const body = message.value.trim().replace(/\r?\n/g, '\r\n');
  const subject = encodeURIComponent('Hello from your website');
  window.location.href = `mailto:${contactForm.dataset.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
});