import validator from "validator";
import './style.css'

const button = document.getElementById('button');
const text = document.getElementById('text');
const verificador = document.getElementById('verificador');
const resultado = document.getElementById('resultado');

button.onclick = () => {
  // console.log(verificador.value, text.value);
  if (verificador.value === 'isAlpha') {
    resultado.innerHTML = validator.isAlpha(text.value);
  } else if (verificador.value === 'isAlphanumeric') {
    resultado.innerHTML = validator.isAlphanumeric(text.value);
  } else if (verificador.value === 'isEmail') {
    resultado.innerHTML = validator.isEmail(text.value);
  } else if (verificador.value === 'isEmpty') {
    resultado.innerHTML = validator.isEmpty(text.value);
  } else if (verificador.value === 'isNumeric') {
    resultado.innerHTML = validator.isNumeric(text.value);
  }
};