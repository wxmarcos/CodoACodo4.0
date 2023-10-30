// Obtén el enlace y el modal del formulario
var enlaceAbrirFormulario = document.querySelector('.btn.btn-primary.btn-lg');
var formularioModal = document.getElementById('formularioModal');
// Obtén el formulario
var miFormulario = document.getElementById("miFormulario");

// Obtén el elemento del mensaje de éxito
var mensajeExito = document.getElementById("mensajeExito");

// Obtén el elemento para cerrar el modal del formulario
var cerrarFormularioModal = document.getElementById('cerrarFormularioModal');


// Cuando se hace clic en el enlace, abre el modal del formulario
enlaceAbrirFormulario.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el enlace siga su enlace #
    mensajeExito.style.display = "none";
    miFormulario.style.display = "block";
    formularioModal.style.display = 'block';
});

// Cuando se hace clic en el elemento para cerrar el modal del formulario, cierra el modal
cerrarFormularioModal.addEventListener('click', function() {
    formularioModal.style.display = 'none';
});

miFormulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el envío normal del formulario

    // Obtiene los valores de los campos del formulario
    const nombre = miFormulario.querySelector('input[name="nombre"]').value;
    const email = miFormulario.querySelector('input[name="email"]').value;
    const apellido = miFormulario.querySelector('input[name="apellido"]').value;

    // Realiza la validación
    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }
     // Realiza la validación
     if (apellido.trim() === "") {
        alert("Por favor, ingresa tu apellido.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }
});

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// Funcion para cerral el model del formulario
window.addEventListener('click', function(event) {
    if (event.target === formularioModal) {
        formularioModal.style.display = 'none';
    }
});

