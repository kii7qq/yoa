let timer = null;
let remaining = 0;

const display = document.getElementById('display');
const minutesInput = document.getElementById('minutes');

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function updateDisplay() {
  display.textContent = formatTime(remaining);
}

function startTimer() {
  if (timer) return;
  if (remaining === 0) {
    remaining = Number(minutesInput.value) * 60;
  }

  timer = setInterval(() => {
    remaining--;
    updateDisplay();

    if (remaining <= 0) {
      clearInterval(timer);
      timer = null;
      alert('終了');
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  remaining = Number(minutesInput.value) * 60;
  updateDisplay();
}


document.getElementById('start').onclick = startTimer;
document.getElementById('pause').onclick = pauseTimer;
document.getElementById('reset').onclick = resetTimer;

updateDisplay();
