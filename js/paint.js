function paint() {
  let h = document.getElementById("hight").value;
  let l = document.getElementById("length").value;
  let w = document.getElementById("width").value;

  bottles =
    (parseInt(h) * parseInt(l) * 2 + parseInt(h) * parseInt(w) * 2) / 16;
  console.log(bottles);
  document.getElementById("amount").innerHTML = bottles;
}
