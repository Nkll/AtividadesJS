const factorial = (a) => {
  let result = '';
  for (let index = a; index >= 1; index -= 1) {
    result += index;
  }
  console.log(result);
}

factorial(4);

// var fact = function(m){
//   return((m === 0) ? (1): m * fact(m - 1));
// };
