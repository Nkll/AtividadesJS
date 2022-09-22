const n1 = 20;
const n2 = 4;
const n3 = 50;
let resultado;

let addition = n1 + n2;
let subtraction = n1 - n2;
let multiplication = n1 * n2;
let division = n1 / n2;
let modulus = n1 % n2;

if (typeof(n1) != 'number' || typeof(n2) != 'number') {
    console.log('Número inválido!')
}

if (n1 > n2 && n1 > n3) {
    resultado = n1
    console.log('O maior é', resultado)
}else if (n2 > n1 && n2 > n3) {
    resultado = n2    
    console.log('O maior é', resultado)
}else{
    resultado = n3
    console.log('O maior é', resultado)
}

if (resultado >= 0 ) {
    console.log('Positivo')
}else{
    console.log('Negativo')
}
