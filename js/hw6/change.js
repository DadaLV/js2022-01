function change(str) {
  return str.toUpperCase().replace(/[0-9]/g, "_");
}
console.log(change("ghjhfj99gy65"));
