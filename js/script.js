
//JESICA scroll suave
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
//  JESICA Animación palabra por palabra 
window.addEventListener("load", () => {
  const titulo = document.getElementById("titulo-animado");
  const texto = titulo.textContent;
  const palabras = texto.split(" ");

  titulo.textContent = ""; // Vacia el contenido original

  palabras.forEach((palabra, index) => {
    const span = document.createElement("span");
    span.textContent = palabra + " ";
    span.style.opacity = 0;
    span.style.transition = "opacity 0.6s ease";
    titulo.appendChild(span);

    setTimeout(() => {
      span.style.opacity = 1;
    }, index * 500); //  espacio de tiempo entre palabra y palabra 500ms 
  });
});
// JESICA - Cambio de texto en el botón de servicios al pasar el ratón
const boton = document.getElementById("btn-servicios");

boton.addEventListener("mouseover", () => {
  boton.textContent = "¡Haz clic para ver nuestros servicios!";
});
boton.addEventListener("mouseout", () => {
  boton.textContent = "Trabajos de calidad a tu servicio";
});
// formulario contacto

  // VALIDACIÓN FORMULARIO
  const formulario = document.getElementById('formulario-contacto');
  console.log("📩 Formulario encontrado:", formulario);

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



//ARTEM BOTÓN PARA MOSTRAR / OCULTAR INFO DE SERVICIOS

// Recorremos todos los botones que tienen la clase "toggle-btn"
document.querySelectorAll('.toggle-btn').forEach(boton => {
  // Al hacer clic en el botón...
  boton.addEventListener('click', () => {
    // Obtenemos el bloque de contenido asociado usando el atributo "data-target"
    const bloque = document.getElementById(boton.dataset.target);

    // Cambiamos su visibilidad activando o quitando la clase "activo"
    bloque.classList.toggle('activo');

    // Cambiamos el texto del botón según el estado
    if (bloque.classList.contains('activo')) {
      boton.textContent = 'Ver menos'; // Si está visible, damos opción a "ver menos"
    } else {
      boton.textContent = 'Ver más'; // Si está oculto, mostramos "ver más"
    }
  });
});

//ARTEM FILTRO DINÁMICO PARA LA GALERÍA 

// Obtenemos todos los botones de filtro
const botonesFiltro = document.querySelectorAll(".filtro");

// Y todos los ítems de la galería que se pueden mostrar u ocultar
const itemsGaleria = document.querySelectorAll(".item-galeria");

// Por cada botón, asignamos el comportamiento al hacer clic
botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {
    const categoriaSeleccionada = boton.dataset.categoria;

    // Recorremos todos los ítems y decidimos si se muestran o no
    itemsGaleria.forEach(item => {
      const perteneceACategoria = item.classList.contains(categoriaSeleccionada);
      const mostrarTodo = categoriaSeleccionada === "todos";

      item.style.display = perteneceACategoria || mostrarTodo ? "block" : "none";
    });
  });
});