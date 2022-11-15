import './style.css';

const rDog = document.getElementById('rDog');
const rCat = document.getElementById('rCat');
const sPet = document.getElementById('sPet');
const img = document.getElementById('img');

rDog.onclick = () => {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(data => img.src = data.message)
    .catch
}

rCat.onclick = () => {
  fetch(`https://aws.random.cat/meow`)
    .then(response => response.json())
    .then(data => img.src = data.file)
}

sPet.onclick = () => {
  Promise.any([
    fetch(`https://dog.ceo/api/breeds/image/random`),
    fetch(`https://aws.random.cat/meow`),
  ])
  .then(response => response.json())
  .then(data => img.src = data.file);
}
