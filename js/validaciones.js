// formulario contacto

  // VALIDACIÓN FORMULARIO
  const formulario = document.getElementById('formulario-contacto');

  if (formulario) {
    formulario.addEventListener('submit', function(e) {
      const nombre = document.getElementById('nombre').value.trim();
      const campoEmail = document.getElementById('email');
      const campoMensaje = document.getElementById('mensaje');
      const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (nombre.length < 3) {
        e.preventDefault();
        alert('Por favor, escribe un nombre válido (mínimo 3 letras).');
        return;
      }

      if (!patronEmail.test(campoEmail.value.trim())) {
        e.preventDefault();
        alert('Por favor, introduce un correo electrónico válido.');
        return;
      }

      if (campoMensaje.value.trim() === "") {
        e.preventDefault();
        alert('El mensaje no puede estar vacío.');
        return;
      }
    });
  }

