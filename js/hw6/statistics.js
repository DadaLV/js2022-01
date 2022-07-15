function statistics(str) {
  let letters = str.match(/[a-zA-Z]/g).length;
  let digit = str.match(/[0-9]/g).length;
  let symbol = str.match(/[^A-Za-z0-9]/g).length;
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
