const btnEncriptar = document.querySelector('#encriptador');
const btnDesencriptar = document.querySelector('#desencriptar')
const btnCopia = document.querySelector('#copiar');
const textoArea = document.querySelector('#encriptador__text__area');
const respuestaEncriptar = document.querySelector('#texto__desencriptado');
const infoDesencriptador = document.querySelector('#contenido__encriptador__2')
const soloLetras = '^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => {
  btnEncriptar.addEventListener('click', encriptar);
  btnDesencriptar.addEventListener('click', desencriptar);
  btnCopia.addEventListener('click', copiarTexto);
});

function encriptar(event) {
  event.preventDefault();
  respuestaEncriptar.value = '';

  let texto = textoArea.value;

  if (texto.match(soloLetras) != null) {

    infoDesencriptador.style.display = 'none';
    respuestaEncriptar.style.display = 'block';
    btnCopia.style.display = 'block';

    let palabras = texto.split(' ');
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('e', 'enter');
      palabra = palabra.replaceAll('i', 'imes');
      palabra = palabra.replaceAll('a', 'ai');
      palabra = palabra.replaceAll('o', 'ober');
      palabra = palabra.replaceAll('u', 'utaf');

      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(' ');
    respuestaEncriptar.value = resultado;

  } else {
    mostrarError('Por favor escriba para poder encriptar el texto');
    return;
  }
}

function desencriptar(event) {
  event.preventDefault();
  respuestaEncriptar.value = '';

  let texto = textoArea.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(' ');
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('enter', 'e');
      palabra = palabra.replaceAll('imes', 'i');
      palabra = palabra.replaceAll('ai', 'a');
      palabra = palabra.replaceAll('ober', 'o');
      palabra = palabra.replaceAll('utaf', 'u');

      nuevasPalabras.push(palabra)
    }

    const resultado = nuevasPalabras.join(' ');

    respuestaEncriptar.value = resultado;
  } else {
    mostrarError('Por favor escriba para poder encriptar el texto');
    return;
  }
}

function mostrarError(mensaje) {
  const existeError = document.querySelector('.error');

  if (!existeError) {
    const formulario = document.getElementById('formulario');
    const divMensaje = document.createElement('div');

    divMensaje.classList.add('error');

    divMensaje.textContent = mensaje;
    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

function copiarTexto(event) {
  event.preventDefault();
  const mensaje = respuestaEncriptar.value;

  navigator.clipboard.writeText(mensaje);
}

// btnEncriptar.addEventListener('click', () => {
//
// })
