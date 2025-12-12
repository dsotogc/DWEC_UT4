/*
Ejercicio basado en https://www.youtube.com/watch?v=nvgeFhLaSuA.
Puedes ver el texto que devuelve la URL
  https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
si la introduces en la URL del navegador.
*/
document.addEventListener("DOMContentLoaded", obtenerDatos);

function obtenerDatos() {
  const NASA_API = "ObQae7PeC6WLZSfTOat2RbdqElVU1Gghvm0iapsu";
  const ruta = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`;

  fetch(ruta)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarDatos(resultado));
}
function mostrarDatos( resultado) {
	
	console.log(resultado);

	let titulo = document.querySelector('#titulo');
	titulo.innerHTML = resultado.title;
	let fecha = document.querySelector('#fecha');
	fecha.innerHTML = resultado.date;
	let descripcion = document.querySelector('#descripcion');
	descripcion.innerHTML = resultado.explanation;
	let multimedia = document.querySelector('#c_multimedia');
	if (resultado.media_type == 'image')
		multimedia.innerHTML = `<img src=${resultado.hdurl} width=1000>`;
	else
		multimedia.innerHTML = `<video src=${resultado.hdurl} width=1000></video>`
	
}

obtenerDatos();

