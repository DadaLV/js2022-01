function happyTicket() {
  let ticketNumber = document.getElementById("ticket").value.split("");
  let tickeNumber = Array.from(ticketNumber);
  let firstThreeNumber = parseInt(tickeNumber[0]) + parseInt(tickeNumber[1]) + parseInt(tickeNumber[2]);
  let secondThreeNumber = parseInt(tickeNumber[3]) + parseInt(tickeNumber[4]) + parseInt(tickeNumber[5]);
  let text4;
  if (firstThreeNumber === secondThreeNumber) {
    text4 = "You have Happy ticket";
  } else {
    text4 = "Not this time...";
  }
  document.getElementById("showtick").innerHTML = text4;
}

