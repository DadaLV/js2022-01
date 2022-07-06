function drawing(width, symbol) {
  let line;
  for (let i = 0; i < width; i++) {
    line = symbol.repeat(i + 1);
  }
  return line;
}
console.log(drawing(7, "&"));
