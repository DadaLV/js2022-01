let minus = document.getElementById("minus-btn");
let plus = document.getElementById("plus-btn");
let count = document.getElementById("count");

let countNum = 0;
count.innerHTML = countNum;

minus.addEventListener("click", () => {
  countNum -= 1;
  count.innerHTML = countNum;
});

plus.addEventListener("click", () => {
  countNum += 1;
  count.innerHTML = countNum;
});
