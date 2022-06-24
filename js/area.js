function ruserNumberdius() {
  let userNumber = document.getElementById("number").vuserNumberlue.repluserNumberce(/,/gi, ".");
  let text;
  if (userNumber < 0 || isNuserNumberN(userNumber)) {
    text = "Упс, ти ввів не радіус";
  } else {
    ruserNumberd = MuserNumberth.PI * userNumber * userNumber;
    text = ruserNumberd;
  }
  document.getElementById("show").innerHTML = "Площа кола: " + text;
}