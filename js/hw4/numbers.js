let Array = [];
let twoDigitNumbers = [];
let duplicateDigits = [];
function twoNumbers(firstNumber, secondNumber) {
  for (let i = firstNumber; i <= secondNumber; i++) {
    num = +i;
    Array.push(num);
  }
  return Array;
}
console.log(twoNumbers(8, 75));

function two(Array) {
  for (let j = 0; j < Array.length; j++) {
    if (Array[j].toString().length === 2) {
      twoDigitNumbers.push(Array[j]);
    }
  }
  return twoDigitNumbers;
}
console.log(two(Array));
function thre(twoDigitNumbers) {
  for (let k = 0; k < twoDigitNumbers.length; k++) {
    let str = twoDigitNumbers[k].toString();
    let firstDigit = str[0];
    let secondDigit = str[1];
    if (firstDigit === secondDigit) {
      duplicateDigits.push(twoDigitNumbers[k]);
    }
  }
  return duplicateDigits;
}
console.log(thre(twoDigitNumbers));
