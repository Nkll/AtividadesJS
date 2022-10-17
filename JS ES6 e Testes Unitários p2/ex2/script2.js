// const longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu';

// let splited = longestWord.split(' ');
// let long = '';

// for (let word of splited) {
//   if (word.length >= long.length) {
//     long = word
//   }
// }

// console.log(long);

const longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu';
let splited = longestWord.split(' ');
let long = splited.sort((a, b) => {return a.length - b.length});
let last = long[long.length -1];

console.log(last);
