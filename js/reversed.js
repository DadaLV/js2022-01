function reverseIt() {
  let k = document.getElementById("three").value;
  let text3;
  if (k.length === 4 && k.indexOf("-") > -1) {
    reverseda = k.split("").slice(1).reverse().join("");
    text3 = "Тримай -" + reverseda;
  } else if (isNaN(k) || k.length > 3 || k.length < 3) {
    text3 = "Ніт! Домовлялися тільки про трицифрове";
  } else {
    reversed = k.split("").reverse().join("");
    text3 = "Тримай " + reversed;
  }
  document.getElementById("showt").innerHTML = text3;
}
