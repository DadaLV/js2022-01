function ruserNumberdius() {
  let userNumber = document.getElementById("number").value.replace(/,/gi, ".");
  let text;
  if (userNumber < 0 || isNaN(userNumber)) {
    text = "Упс, ти ввів не радіус";
  } else {
    rad = Math.PI * userNumber * userNumber;
    text = rad;
  }
  document.getElementById("show").innerHTML = "Площа кола: " + text;
}