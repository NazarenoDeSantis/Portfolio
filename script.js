// =============================================
// FORMULARIO DE CONTACTO
// Envía los datos a Formspree mediante Fetch API
// y muestra feedback al usuario sin recargar la página
// =============================================

const formulario = document.getElementById("formularioContacto");
const mensajeRespuesta = document.getElementById("mensajeRespuesta");

formulario.addEventListener("submit", async function (event) {
  // Evita que el navegador recargue la página al enviar
  event.preventDefault();

  const boton = formulario.querySelector("button[type='submit']");

  // Deshabilita el botón mientras se envía para evitar doble envío
  boton.disabled = true;
  boton.textContent = "Enviando...";

  try {
    const respuesta = await fetch(formulario.action, {
      method: "POST",
      body: new FormData(formulario),
      headers: { Accept: "application/json" },
    });

    if (respuesta.ok) {
      // Éxito: muestra confirmación y limpia el formulario
      mostrarMensaje("¡Mensaje enviado! Me contactaré a la brevedad.", "exito");
      formulario.reset();
    } else {
      // Error del servidor (ej: ID de Formspree incorrecto)
      mostrarMensaje("Hubo un error al enviar. Intentá de nuevo.", "error");
    }
  } catch {
    // Error de red (sin conexión)
    mostrarMensaje("Sin conexión. Verificá tu internet e intentá de nuevo.", "error");
  } finally {
    // Restaura el botón siempre, haya éxito o error
    boton.disabled = false;
    boton.textContent = "Enviar";
  }
});

// =============================================
// FUNCIÓN AUXILIAR
// Muestra el mensaje de respuesta con el estilo correspondiente
// =============================================

function mostrarMensaje(texto, tipo) {
  mensajeRespuesta.textContent = texto;
  mensajeRespuesta.style.display = "block";
  mensajeRespuesta.style.color = tipo === "exito" ? "#38bdf8" : "#f87171";

  // Desplaza la vista hasta el mensaje para que el usuario lo vea
  mensajeRespuesta.scrollIntoView({ behavior: "smooth", block: "center" });
}
