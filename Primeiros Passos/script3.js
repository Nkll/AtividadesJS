let peca = 'rei'

let pecaR = peca.toLowerCase()

switch (pecaR) {
    default:
        console.log('Peça inválida!');
        break;
    case 'rei':
        console.log('Pode mover-se em qualquer direção, uma casa por vez');
        break;
    case 'dama':
        console.log('Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres');
        break;
    case 'torre':
        console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser');
        break;
    case 'bispo':
        console.log('Move-se na diagonal, quantas casas quiser');
        break;
    case 'cavalo':
        console.log('O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante');
        break;
    case 'peão':
        console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');
        break;
}