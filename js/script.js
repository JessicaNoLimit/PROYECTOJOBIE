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
// JESICA / ARTEM - VALIDACIÓN Y ENVÍO A FORMSPREE
// ===================================================
const formulario = document.getElementById('formulario-contacto');

if (formulario) {
  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // evitar envío tradicional

    let hayErrores = false;

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    const errorNombre = document.getElementById('error-nombre');
    const errorEmail = document.getElementById('error-email');
    const errorMensaje = document.getElementById('error-mensaje');

    [errorNombre, errorEmail, errorMensaje].forEach(el => el.textContent = '');

    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.value.trim() || nombre.value.trim().length < 3) {
      errorNombre.textContent = 'Por favor, escribe un nombre válido (mínimo 3 letras).';
      hayErrores = true;
    }

    if (!email.value.trim() || !patronEmail.test(email.value.trim())) {
      errorEmail.textContent = 'Por favor, introduce un correo electrónico válido.';
      hayErrores = true;
    }

    if (!mensaje.value.trim()) {
      errorMensaje.textContent = 'El mensaje no puede estar vacío.';
      hayErrores = true;
    }

    if (!hayErrores) {
      const formData = new FormData(formulario);

      fetch("https://formspree.io/f/mzzrqqew", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          formulario.style.display = 'none';
      
          const intro = document.getElementById('intro-contacto');
          if (intro) {
            intro.style.display = 'none';
          }
      
          const mensajeGracias = document.getElementById('mensaje-gracias');
          if (mensajeGracias) {
            mensajeGracias.style.display = 'flex';
          }
        } else {
          alert('Hubo un problema al enviar el formulario. Intenta de nuevo.');
        }
      })
      .catch(error => {
        alert('Error de conexión. Por favor, revisa tu red.');
      });
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
