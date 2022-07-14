function Calculator(a, b, sign) {
  let result = eval(a + sign + b);
  return result % 1 === 0 ? result : result.toFixed(1);
}

console.log(Calculator(12, 4, "+"));
console.log(Calculator(18, 0, "/"));
