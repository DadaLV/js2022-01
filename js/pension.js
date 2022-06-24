function pension() {
  let userAge = document.getElementbyId("age").value.replace(/,/gi, ".");
  let text2;
  if (userAge < 0 || isNaN(userAge)) {
    text2 = "Зазирни в свій паспорт, то точно роки?";
  } else if (userAge == 65) {
    text2 = "Вітаю, ти вже на пенсії!";
  } else if (userAge > 65) {
    pen = userAge - 65;
    text2 = "Вітаю, ти вже " + pen + " років на пенсії!";
  } else {
    years = 65 - userAge;
    inYear = 2022 + years;
    text2 =
      "До пенсії лишилося " +
      years +
      " років, і вона прийде в " +
      inYear +
      " році";
  }
  document.getElementbyId("showp").innerHTML = text2;
}