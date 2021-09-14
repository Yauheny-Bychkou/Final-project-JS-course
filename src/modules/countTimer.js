function countTimer(deadline) {
  let timerDay = document.querySelectorAll(".days");
  let timerHour = document.querySelectorAll(".hours");
  let timerMinutes = document.querySelectorAll(".minutes");
  let timerSeconds = document.querySelectorAll(".seconds");

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
      timerDay.forEach((elem) => {
        if (timer.days < 10) {
          elem.textContent = `0${timer.days}`;
        } else {
          elem.textContent = `${timer.days}`;
        }
      });
      timerHour.forEach((elem) => {
        if (timer.hours < 10) {
          elem.textContent = `0${timer.hours}`;
        } else {
          elem.textContent = `${timer.hours}`;
        }
      });
      timerMinutes.forEach((elem) => {
        if (timer.minutes < 10) {
          elem.textContent = `0${timer.minutes}`;
        } else {
          elem.textContent = `${timer.minutes}`;
        }
      });
      timerSeconds.forEach((elem) => {
        if (timer.seconds < 10) {
          elem.textContent = `0${timer.seconds}`;
        } else {
          elem.textContent = `${timer.seconds}`;
        }
      });
    } else {
      timerDay.forEach((elem) => {
        elem.textContent = "00";
      });
      timerHour.forEach((elem) => {
        elem.textContent = "00";
      });
      timerMinutes.forEach((elem) => {
        elem.textContent = "00";
      });
      timerSeconds.forEach((elem) => {
        elem.textContent = "00";
      });
    }
  }
  updateClock();
  setInterval(function () {
    updateClock();
  }, 1000);
}
export default countTimer;
