import Swal from "sweetalert2";

const button = document.getElementById('button');
const heroeImg = document.getElementById('heroe');
const heroeName = document.getElementById('heroeName');

const randomNumber = () => Math.round(Math.random() * 1000) + 1;

button.onclick = () => {
  let randomHeroe = randomNumber();
  fetch(`https://akabab.github.io/superhero-api/api/id/${randomHeroe}.json`)
    .then(response => response.json())
    .then(data => {
      heroeImg.src = data.images.lg
      heroeName.innerHTML = data.name
    })
    .catch((error) => Swal.fire({
      title: 'Hero not Found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool'
    }));
}
