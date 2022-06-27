function profit() {
  let prise = [A1, A2, A3];
  sortedPrise = prise.sort((a, b) => b - a);
  let capacity = [B1, B2, B3];
  sortedCapacity = capacity.sort((a, b) => b - a);
  let bestIncome = 0;
  for (let i = 0; i < sortedPrise.length; i++) {
    bestIncome += sortedPrise[i] * sortedCapacity[i];
  }
  console.log(bestIncome);
}
