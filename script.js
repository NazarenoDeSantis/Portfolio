document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert(`Gracias, ${nombre}. Tu mensaje ha sido enviado con éxito.`);
        document.getElementById('formularioContacto').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});