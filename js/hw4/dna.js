function dna(initial) {
  let pairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return initial.replace(/A|T|C|G/g, function (match) {
    return pairs[match];
  });
}

console.log(dna("ATTCG"));
