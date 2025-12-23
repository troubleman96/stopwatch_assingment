let minutes = 0;
let seconds = 0;
let timer = null;

function start() {
      if (timer !== null) return; 
      timer = setInterval(runStopwatch, 1000); 
    }

function stop() {
      clearInterval(timer);
      timer = null;
    }

function reset() {
      stop();
      minutes = 0;
      seconds = 0;
      updateDisplay();
    }

function runStopwatch() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }

function updateDisplay() {
      // Logic fix: correctly target the ID "display"
      document.getElementById("display").innerText =
        format(minutes) + ":" + format(seconds);
    }

function format(value) {
      return value < 10 ? "0" + value : value;
    }