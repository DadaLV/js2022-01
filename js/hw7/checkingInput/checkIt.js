let input = document.getElementById("checkIt");

const invalidInput = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// const invalidInput = input.match(/[0-9]/g);

checkIt.addEventListener("keydown", function (i) {
  if (invalidInput.includes(i.key)) {
    i.preventDefault();
  }
});
