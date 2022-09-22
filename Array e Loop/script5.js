let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let divisão = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        divisão = numbers[index];
        console.log(divisão);
    }
}

if (divisão === 0) {
    console.log('Nenhum número ímpar encontrado');
}
