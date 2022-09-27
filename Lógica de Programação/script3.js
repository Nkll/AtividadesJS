let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = 'soy frantiesco virgolinu fiaummmmmmmmmmm';

for (let index = 0; index <= array.length; index += 1) {
    for (let indexx = 0; indexx < index; indexx += 1) {
        if (maior.length < array[indexx].length) {
            maior = array[indexx];
        }
        if (menor.length > array[indexx].length) {
            menor = array[indexx];
        }
    }
}console.log(maior, menor);
