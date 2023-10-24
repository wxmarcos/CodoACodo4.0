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

// Función para obtener el pronóstico del tiempo
function obtenerPronostico() {
    const apiKey = "4d60f1a3d8b3439d92023947232410";
    const ciudad = "Buenos_Aires";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ciudad}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const temperatura = data.current.temp_c;

        // Actualiza el contenido del elemento en la barra de navegación
        const weatherInfoElement = document.getElementById("clima");
        weatherInfoElement.innerHTML = `Clima: ${temperatura}°C`;
    })
    .catch(error => {
        console.error("Error al obtener el pronóstico del tiempo:", error);
    });
}
// Llama a la función para obtener el pronóstico del tiempo al cargar la página
window.onload = obtenerPronostico;