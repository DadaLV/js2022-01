function calculate(a, b, operand) {
  if (operand === "+") {
    return a + b;
  } else if (operand === "-") {
    return a - b;
  } else if (operand === "*") {
    return a * b;
  } else if (operand === "/" && operand !== 0) {
    return a / b;
  } else {
    return "mistake";
  }
}
console.log(calculate(12, 4, "+"));
console.log(calculate(1, 4, "-"));
console.log(calculate(12, 5, "/"));
console.log(calculate(1.2, 3, "*"));
