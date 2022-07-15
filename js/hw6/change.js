function change(str) {
  let result = str
    .replace(/[0-9]/g, "_")
    .split("")
    .map(function (el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    })
    .join("");
  return result;
}
console.log(change("ghGIfj99gy65"));
