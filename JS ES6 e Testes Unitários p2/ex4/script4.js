substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const splited = frase.split(' ');
  for (let index = 0; index <= splited.length; index += 1) {
    if (splited[index] === 'x') {
      splited[index] = nome
    }
  }
  return splited.join(' ');
}

minhasSkills = (a) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${a}

  Minhas três principais habilidades são:`;

  for (let index = 0; index < skills.length; index +=1){
    resultado = `${resultado}
    - ${skills[index]}`
  }
  return resultado
}

console.log(minhasSkills(substituaX('Nikollas')));
