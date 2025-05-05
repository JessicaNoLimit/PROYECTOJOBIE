// =====================
// JESICA - Scroll suave
// =====================
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// =============================================
// JESICA - Animación palabra por palabra (Hero)
// =============================================
window.addEventListener("load", () => {
  const titulo = document.getElementById("titulo-animado");
  if (titulo) {
    const texto = titulo.textContent;
    const palabras = texto.split(" ");
    titulo.textContent = ""; // Vacía el contenido original

    palabras.forEach((palabra, index) => {
      const span = document.createElement("span");
      span.textContent = palabra + " ";
      span.style.opacity = 0;
      span.style.transition = "opacity 0.6s ease";
      titulo.appendChild(span);

      setTimeout(() => {
        span.style.opacity = 1;
      }, index * 500); // espacio de tiempo entre palabra y palabra (500ms)
    });
  }
});

// ==================================================
// JESICA - Cambio de texto en el botón de servicios
// ==================================================
const boton = document.getElementById("btn-servicios");
if (boton) {
  boton.addEventListener("mouseover", () => {
    boton.textContent = "¡Haz clic para ver nuestros servicios!";
  });
  boton.addEventListener("mouseout", () => {
    boton.textContent = "Trabajos de calidad a tu servicio";
  });
}

// ===================================================
// JESICA / ARTEM - VALIDACIÓN FORMULARIO DE CONTACTO
// ===================================================
const formulario = document.getElementById('formulario-contacto');
if (formulario) {
  formulario.addEventListener('submit', function(e) {
    const nombre = document.getElementById('nombre');
    const campoEmail = document.getElementById('email');
    const campoMensaje = document.getElementById('mensaje');

    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || nombre.value.trim().length < 3) {
      e.preventDefault();
      alert('Por favor, escribe un nombre válido (mínimo 3 letras).');
      return;
    }

    if (!campoEmail || !patronEmail.test(campoEmail.value.trim())) {
      e.preventDefault();
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (!campoMensaje || campoMensaje.value.trim() === "") {
      e.preventDefault();
      alert('El mensaje no puede estar vacío.');
      return;
    }
  });
}


// ==================================
// ARTEM - HAMBURGUESA MENÚ (Global)
// ==================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}
// ===========================
// ARTEM - BOTÓN SUBIR ARRIBA
// ===========================
const btnTop = document.getElementById("btn-top");

if (btnTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  });

  btnTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
