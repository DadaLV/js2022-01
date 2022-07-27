function FunnyTale(str, funnyLetter) {
  return str.split(/[aeyuoiуеіаоєяию]/i).join(funnyLetter);
}
console.log(FunnyTale("якийсь матюк", "@"));
console.log(FunnyTale("Once upon a time", "i"));
