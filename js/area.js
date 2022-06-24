function radius() {
  let a = document.getElementById("number").value.replace(/,/gi, ".");
  let text;
  if (a < 0 || isNaN(a)) {
    text = "Упс, ти ввів не радіус";
  } else {
    rad = Math.PI * a * a;
    text = rad;
  }
  document.getElementById("show").innerHTML = "Площа кола: " + text;
}