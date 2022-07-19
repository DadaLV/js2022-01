function checking_input() {
  const name = document.getElementById("name").value;
  let text;
  if (/\d/.test(name) === true) {
    text = "Name can't contain digits";
  } else {
    text = name;
  }
  document.getElementById("a").innerHTML = text;
};
