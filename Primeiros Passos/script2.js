const angle1 = 30
const angle2 = -100
const angle3 = 50
let validity;

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    console.log('Ângulo inválido!')
}else if (angle1 + angle2 + angle3 != 180) {
    validity = false
    console.log(validity)
}else{
    validity = true
    console.log(validity)
}