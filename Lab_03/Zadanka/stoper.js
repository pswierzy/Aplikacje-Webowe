let seconds = 0;
let working = null;
const stoper = document.getElementsByClassName("stoper")[0];

function display() {
  const min = Math.floor(seconds / 60).toString();
  const sec = (seconds % 60).toString();
  if (seconds < 60) stoper.textContent = `${sec}s`;
  else stoper.textContent = `${min}min ${sec}s`;
}

function stoper_start() {
  if (working) return;
  working = setInterval(() => {
    seconds++;
    display();
  }, 1000);
}
function stoper_stop() {
  clearInterval(working);
  working = null;
}
function stoper_reset() {
  seconds = 0;
  display();
}

display();
