let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: {
        titulo: ['O Pior Dia de Todos','Harry Potter e o Prisioneiro de Azkaban'],
        autor: ['Daniela Kopsch','JK Rowling'],
        editora: ['Tordesilhas','Rocco'],
      },
};

console.log("O livro favorito de", leitor['nome'], leitor['sobrenome'], "se chama", "'" ,leitor['livrosFavoritos']['titulo'][0], "'", 'e', "'", leitor['livrosFavoritos']['titulo'][1]);
