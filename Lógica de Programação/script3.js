let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = 'soy frantiesco virgolinu fiaummmmmmmmmmm';

for (let index = 0; index <= array.length; index += 1) {
    for (let indexx = 0; indexx < index; indexx += 1) {
        if (array[indexx] < array[index]) {
            maior = array[indexx];
        }
        if (array[indexx] > array[index]) {
            menor = array[index];
        }
    }
}console.log(maior, menor);
