function calculate(a, b, operand) {
  if (operand === "+") {
    return a + b;
  } else if (operand === "-") {
    return a - b;
  } else if (operand === "*") {
    return a * b;
  } else {
    return a / b;
  };
}
console.log(calculate(12, 4, "+"));
console.log(calculate(1, 4, "-"));
console.log(calculate(12, 5, "/"));
console.log(calculate(1.2, 3, "*"));
