function power(quantaty, heads) {
  let power;
  if (quantaty === 1) {
    return (power = heads);
  } else {
    for (let i = 1; i < heads; i++) {
      power *= heads[i] * quantaty;
    }
  }
}
console.log(power(1, 6));
console.log(power(2, 4));
