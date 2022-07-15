function change(str) {
  return str
    .replace(/[0-9]/g, "_")
    .split("")
    .map(function (el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    })
    .join("");
}
console.log(change("ghGIfj99gy65"));
