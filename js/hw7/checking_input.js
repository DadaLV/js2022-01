function checking_input() {
  const name = document.getElementById("name").value;
  let answer;
  if (name.test(/\d/) === true) {
    answer = "Name can't contain digits";
  } else {
    answer = name;
  }
  document.getElementById("answer").innerHTML = answer;
}
