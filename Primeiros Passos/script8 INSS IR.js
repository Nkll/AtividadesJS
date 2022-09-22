const salario = 1800;
let inss;
let ir;
let irp;

if (salario <= 1556.94){
    inss = 0.08;
}else if(salario >= 1556.95 && salario <= 2594.92) {
    inss = 0.09;
}else if(salario >= 2594.93 && salario <= 5189.82) {
    inss = 0.11;
}else if(salario > 5189.82) {
    inss = 570.88
}

let descontoInss;
let salarioInss

if (inss == 570.88){
    salarioInss = salario - inss;
}else{
    descontoInss = salario * inss;
    salarioInss = salario - descontoInss;
}

if (salarioInss <= 1903.98) {
    ir = 0
    irp = 0
}else if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
    ir = 0.075
    irp = 142.80
}else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
    ir = 0.15
    irp = 354.80
}else if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
    ir = 0.225
    irp = 636.13
}else if (salarioInss > 4664.68) {
    ir = 0.275
    irp = 869.36
}

let salarioIr = (ir * salarioInss) - irp;
let salarioFinal= salarioInss - salarioIr

console.log(salarioFinal);
