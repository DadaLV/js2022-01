function happyTicket() {
  let tickeNumber = document.getElementById("ticket").value.split("");
  let firstThreeNumber = tickeNumber[0] + tickeNumber[1] + tickeNumber[2];
  let secondThreeNumber = tickeNumber[3] + tickeNumber[4] + tickeNumber[5];
  let text4;
  if (firstThreeNumber == secondThreeNumber) {
    text4 = "You have Happy ticket";
  } else {
    text4 = "Not this time...";
  }
  document.getElementById("showtick").innerHTML = text4;
}
