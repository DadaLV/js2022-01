function CelsiusToFahrenheit() {
  let text6;
  let celsius = document.getElementById("degrees").value.replace(/,/, ".");
  fahrenheit = celsius * 1.8 + 32;
  document.getElementById("showfh").innerHTML = fahrenheit;
}
