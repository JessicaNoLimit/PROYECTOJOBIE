// scroll suave
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
  // validacion del campo nombre
const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(e) {
  const nombre = document.getElementById('nombre').value.trim();

  if (nombre.length < 3) {
    e.preventDefault(); // evita que se envie
    alert('Por favor, escribe un nombre valido (minimo 3 letras)');
  }
});
