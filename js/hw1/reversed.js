function reverseIt() {
  let number = document.getElementById("three").value;
  let text3;
  if (number.length === 4 && number.indexOf("-") > -1) {
    reverseda = number.split("").slice(1).reverse().join("");
    text3 = "Тримай -" + reverseda;
  } else if (isNaN(number) || number.length > 3 || number.length < 3) {
    text3 = "Ніт! Домовлялися тільки про трицифрове";
  } else {
    reversed = number.split("").reverse().join("");
    text3 = "Тримай " + reversed;
  }
  document.getElementById("showt").innerHTML = text3;
}
