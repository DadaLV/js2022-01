function statistics(str) {
  let letters, symbol, digit;
  if (str.match(/[a-zA-Z]/g) !== null) {
    letters = str.match(/[a-zA-Z]/g).length;
  } else {
    letters = "0";
  }
  if (str.match(/[0-9]/g) !== null) {
    digit = str.match(/[0-9]/g).length;
  } else {
    digit = "0";
  }
  if (str.match(/[^A-Za-z0-9]/g) !== null) {
    symbol = str.match(/[^A-Za-z0-9]/g).length;
  } else {
    symbol = "0";
  }
  return (
    "We have " +
    letters +
    " letters " +
    digit +
    " digits " +
    symbol +
    " symbols"
  );
}
console.log(statistics("AFjjk12lEE,++.66"));
console.log(statistics("AFjjk12lEE66"));
