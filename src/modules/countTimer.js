function countTimer(deadline) {
  let timerDay = document.querySelector(".days");
  let timerHour = document.querySelector(".hours");
  let timerMinutes = document.querySelector(".minutes");
  let timerSeconds = document.querySelector(".seconds");

  function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor((timeRemaining / 60) % 24),
      days = Math.floor(timeRemaining / 3600 / 24);

    return { timeRemaining, days, hours, minutes, seconds };
  }
  function updateClock() {
    let timer = getTimeRemaining();

    if (timer.timeRemaining > 0) {
      if (timer.days < 10) {
        timerDay.textContent = `0${timer.days}`;
      } else {
        timerDay.textContent = `${timer.days}`;
      }
      if (timer.hours < 10) {
        timerHour.textContent = `0${timer.hours}`;
      } else {
        timerHour.textContent = `${timer.hours}`;
      }
      if (timer.minutes < 10) {
        timerMinutes.textContent = `0${timer.minutes}`;
      } else {
        timerMinutes.textContent = `${timer.minutes}`;
      }
      if (timer.seconds < 10) {
        timerSeconds.textContent = `0${timer.seconds}`;
      } else {
        timerSeconds.textContent = `${timer.seconds}`;
      }
    } else {
      timerHour.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  }
  updateClock();
  setInterval(function () {
    updateClock();
  }, 1000);
}
export default countTimer;
