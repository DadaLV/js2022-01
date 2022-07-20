let input = document.getElementById("checkIt");

const invalidInput = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//const invalidInput = input.matches(/^[A-Za-z]gi/).split('')

checkIt.addEventListener("keydown", function (i) {
  if (invalidInput.includes(i.key)) {
    i.preventDefault();
  }
});
