let maior = '';

function nomes(array) {
    for(let index = 0; index <= array.length; index += 1) {
        for(let indexx = 0; indexx < index; indexx += 1) {
            if (maior.length < array[indexx].length) {
                maior = array[indexx]
            }
        }
    }console.log(maior);
}

nomes(['java', 'javascriptttttttttttttttttttttttuyftfuffyfyuuyfuyfuyfuyuyf', 'python', 'html', 'css', 'sucodecharobaaaaaaaaaaaaaaa']);

