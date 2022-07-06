function order(str) {
  if (str === "") {
    return "";
  } else {
    let words = str.split(" ");
    words.sort((a, b) => a.replace(/[^\d]+/g, "") - b.replace(/[^\d]+/g, ""));
    return words.join(" ");
  }
}
console.log(order("is2 Thi1s T4est 3a"));
console.log(order(""));
