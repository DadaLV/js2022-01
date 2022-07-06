function co() {
  let a = document.getElementById("some").value;
  const myArray = a.split("");
  let text8;
  let counter = {};
  for (element of myArray) {
    let newItem = element.toLowerCase();
    if (counter[newItem]) {
      counter[newItem] += 1;
    } else {
      counter[newItem] = 1;
    }
  }
  for (const prop in counter) {
    if (counter[prop] < 2) {
      // Reflect.deleteProperty(counter, prop);
      delete counter[prop];
    }
  }
  text8 =
    "Кількість повторів " +
    Object.keys(counter).length +
    ", a саме: " +
    JSON.stringify(counter);
  console.log(counter);
  console.log(Object.keys(counter).length);
  document.getElementById("showo").innerHTML = text8;
}
