function paint() {
  let h = document.getElementById("hight").value;
  let l = document.getElementById("length").value;
  let w = document.getElementById("width").value;
  const paintConsumption = 16;
  bottles = ((parseInt(l) + parseInt(w)) * parseInt(h) * 2) / paintConsumption;
  console.log(bottles);
  document.getElementById("amount").innerHTML = bottles;
}
