const produto = 50;
const venda = 2;

let purchasePrice = (produto * 1000)*0.2;
let saleValue = (venda * 1000) - purchasePrice;

if (produto <= 0 || venda <= 0) {
    console.log('Valor inválido!');
}else if(saleValue > 0) {
    console.log('Lucro de:', saleValue);
}else if(saleValue == 0){
    console.log('Lucro = 0');
}else if(saleValue < 0) {
    console.log('Prejuizo de:', saleValue);
}