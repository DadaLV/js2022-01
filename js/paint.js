function paint() {
  let h = document.getElementById("hight").value;
  let l = document.getElementById("length").value;
  let w = document.getElementById("width").value;

  bottles =
    (parseInt(l) +  parseInt(w)) * parseInt(h) * 2 / 16;
  console.log(bottles);
  document.getElementById("amount").innerHTML = bottles;
}
