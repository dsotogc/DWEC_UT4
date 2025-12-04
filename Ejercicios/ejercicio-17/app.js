/*
Ejercicio basado en https://www.youtube.com/watch?v=nvgeFhLaSuA.
Puedes ver el texto que devuelve la URL
  https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
si la introduces en la URL del navegador.
*/
document.addEventListener("DOMContentLoaded", obtenerDatos);

function obtenerDatos() {
  const NASA_API = "DEMO_KEY";
  const ruta = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`;

  fetch(ruta)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarDatos(resultado));
}
function mostrarDatos( resultado) {
	// Tu código aquí

}
