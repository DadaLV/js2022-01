function draw(width, character) {
  var line = "";
  for (var i = 0; i < width; i++) {
    line += character;
  }
  console.log(line);
}
console.log(draw(10, "*"));
