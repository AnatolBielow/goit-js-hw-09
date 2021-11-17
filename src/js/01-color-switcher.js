const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalId = null;
let randomColor = '#fafafa'
stop.setAttribute('disabled', true);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

start.addEventListener("click", () => {
    intervalId = setInterval(() => {
        randomColor = getRandomHexColor()
        body.style.backgroundColor = randomColor;

    }, 1000);
    stop.removeAttribute('disabled');
    start.setAttribute('disabled', true);
  });
  
  stop.addEventListener("click", () => {
      clearInterval(intervalId);
      start.removeAttribute('disabled');
      stop.setAttribute('disabled', true);
  })
// const btn = document.querySelector('.change-color');
// const body = document.querySelector('body');
// const color = document.querySelector('.color');
// let randomColor = '#fafafa';
// color.textContent = randomColor;
// btn.addEventListener('click', getColor);

// function getColor() {

// randomColor = getRandomHexColor()
// body.style.backgroundColor = randomColor;
// color.textContent = randomColor;

// }