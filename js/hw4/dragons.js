function power(quantaty, heads) {
  let power;
  let dragonPower;
  if (quantaty === 1) {
    return (power = heads);
  } else {
    power = heads.reduce((a, b) => a * b, 1);
    return power;
  }
}

console.log(power(1, 6));
console.log(power(3, [4, 2, 5]));
