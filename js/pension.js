function pension() {
  let b = document.getElementById("age").value.replace(/,/gi, ".");
  let text2;
  if (b < 0 || isNaN(b)) {
    text2 = "Зазирни в свій паспорт, то точно роки?";
  } else if (b == 65) {
    text2 = "Вітаю, ти вже на пенсії!";
  } else if (b > 65) {
    pen = b - 65;
    text2 = "Вітаю, ти вже " + pen + " років на пенсії!";
  } else {
    years = 65 - b;
    inYear = 2022 + years;
    text2 =
      "До пенсії лишилося " +
      years +
      " років, і вона прийде в " +
      inYear +
      " році";
  }
  document.getElementById("showp").innerHTML = text2;
}