let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      isRunning = false;
      document.getElementById("notification-sound").play();
      alert("Time's up! Take a break!");
      resetTimer();
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  displayTime();
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  displayTime();
}

function displayTime() {
  const display = document.getElementById("time-display");
  display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
