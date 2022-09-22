/*
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position = 0;

for (let index1 = 1; index1 < numbers.length; index1 += 1) {
    for (let index2 = 0; index2 < index1; index2 += 1) {
        if (numbers[index1] < numbers[index2]) {
            position = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = position;
        }
    }
}
console.log(numbers);
