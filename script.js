// Año actual en el footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Menú móvil simple
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav-open');
    navToggle.classList.toggle('nav-open');
  });
}

// --- Formulario de contacto con fetch (Formspree) ---

const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

if (contactForm && contactStatus) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Estado: enviando
    contactStatus.textContent = 'Enviando tu mensaje...';
    contactStatus.classList.remove('success', 'error');

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        contactStatus.textContent = 'Gracias, he recibido tu mensaje. Te responderé pronto.';
        contactStatus.classList.add('success');
        contactForm.reset();
      } else {
        contactStatus.textContent = 'Ocurrió un problema al enviar el mensaje. Intenta de nuevo más tarde.';
        contactStatus.classList.add('error');
      }
    } catch (error) {
      contactStatus.textContent = 'No se pudo conectar con el servidor. Revisa tu conexión e intenta de nuevo.';
      contactStatus.classList.add('error');
    }
  });
}
