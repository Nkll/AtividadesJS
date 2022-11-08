// const numGenerator = () => {
//   return number = Math.floor((Math.random() * 5) + 1);
// }

// const bet = (n1) => {
//   numGenerator();
//   return (n1 === number) ? 'Parabéns você ganhou!!' : 'Tente novamente'
// }

// console.log(bet(3));

// const numberChecker = (myNumber, number) => myNumber === number;
// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };
// console.log(lotteryResult(2, numberChecker));


const nuns = (n1) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return (n1 === number) ? 'Parabéns você ganhou!!' : 'Tente novamente';
};

console.log(nuns(2));
