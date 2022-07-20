function updateClock() {
  let currentTime = new Date();
  let currentHoursAP = currentTime.getHours();
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  let currentTimeString =
    "Місцевий час: " +
    currentHours +
    ":" +
    currentMinutes +
    ":" +
    currentSeconds;
    document.getElementById("clock").innerHTML = currentTimeString;
  }
  setInterval(updateClock, 1000);