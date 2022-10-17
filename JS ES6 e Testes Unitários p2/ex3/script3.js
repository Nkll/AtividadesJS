const button = document.getElementById('button');
const clicks = document.getElementById('clicks');

let clickCount = 0;

button.onclick = () => {
  clickCount += 1;
  clicks.innerHTML = 'Clicks: ' + clickCount;
  console.log(clickCount);
}
