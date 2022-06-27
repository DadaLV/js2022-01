function co() {
  let a = document.getElementById("some").value;
  const myArray = a.split("");
  let text8;
  let counter = {};
  for (element of myArray) {
    if (typeof element === "string") {
      let newItem = element.toLowerCase();
      if (counter[newItem]) {
        counter[newItem] += 1;
      } else {
        counter[newItem] = 1;
      }
    } else {
      if (counter[element]) {
        counter[element] += 1;
      } else {
        counter[element] = 1;
      }
    }
  }

  for (const prop in counter) {
    if (counter[prop] < 2) {
      Reflect.deleteProperty(counter, prop);
    }
    
  }
  text8 = "Кількість повторів " + Object.keys(counter).length + ", a саме: " + `${prop} = ${counter[prop]}`;
  console.log(counter);
  console.log(Object.keys(counter).length);
  document.getElementById("showo").innerHTML =
    text8;
};
