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

    // Muestra el mensaje de éxito
    mensajeExito.style.display = "block";
    
    // Oculta el formulario
    miFormulario.style.display = "none";
    
});

// También puedes cerrar el modal al hacer clic en cualquier lugar fuera del modal
window.addEventListener('click', function(event) {
    if (event.target === formularioModal) {
        formularioModal.style.display = 'none';
    }
});

  // Función para obtener y mostrar la hora actual
function updateClock() {
    const clockElement = document.getElementById("reloj");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.innerText = timeString;
}

  // Actualiza la hora cada segundo
setInterval(updateClock, 1000);

  // Llama a la función para mostrar la hora actual al cargar la página
updateClock();

