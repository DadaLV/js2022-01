function numberConverter(number) {
  let num = [];

  switch (number[0]) {
    case 2:
      console.log("двадцять");
      break;
    case 3:
      console.log("тридцять");
      break;
    case "4":
      num[0] = "сорок";
      break;
    case "5":
      console.log("п'ятдесят");
      break;
    case 6:
      console.log("шістдесят");
      break;
    case 7:
      console.log("сімдесять");
      break;
    case 8:
      console.log("вісімдесять");
      break;
    case 9:
      console.log("дев'яносто");
      break;
  }

  switch (number[1]) {
    case "2":
      console.log("двa");
      break;
    case "3":
      console.log("три");
      break;
    case "4":
      num[1] = "чотири";
      break;
    case "5":
      console.log("п'ять");
      break;
    case "6":
      console.log("шість");
      break;
    case "7":
      console.log("сім");
      break;
    case "8":
      console.log("вісім");
      break;
    case "9":
      console.log("дев'ять");
      break;
  }
  return num;
}
console.log(numberConverter("44"));
console.log(numberConverter("56"));
