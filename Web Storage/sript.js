window.onload = function () {
    
    localStorage.setItem('userP', 'Usuário 2');

    if (localStorage.getItem('userP') == 'Usuário 1') {
        document.getElementById('text').style.backgroundColor = 'blue';
        document.getElementById('text').style.color = 'grey';
        document.getElementById('text').style.fontSize = '100px';
        document.getElementById('text').style.lineHeight = '200px';
        document.getElementById('text').style.fontFamily = 'Impact,Charcoal,sans-serif';
    }

    if (localStorage.getItem('userP') === 'Usuário 2') {
        document.getElementById('text').style.backgroundColor = 'black';
        document.getElementById('text').style.color = 'white';
        document.getElementById('text').style.fontSize = '50px';
        document.getElementById('text').style.lineHeight = '100px';
        document.getElementById('text').style.fontFamily = 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif';
    }
}