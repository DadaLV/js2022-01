function numberConverter(number) {
  let num = [];
  if (number >= 10 && number < 20) {
    switch (number) {
      case "10":
        num = "десять";
        break;
      case "11":
        num = "одинадцять";
        break;
      case "12":
        num = "дванадцять";
        break;
      case "13":
        num = "тринадцять";
        break;
      case "14":
        num = "чотирнадцять";
        break;
      case "15":
        num = "п'ятнадцять";
        break;
      case "16":
        num = "шістнадцять";
        break;
      case "17":
        num = "сімнадцять";
        break;
      case "18":
        num = "вісімнадцять";
      case "19":
        num = "дев'ятнадцять";
        break;
    }
    return num;
  } else {
    switch (number[0]) {
      case "2":
        num[0] = "двадцять";
        break;
      case "3":
        num[0] = "тридцять";
        break;
      case "4":
        num[0] = "сорок";
        break;
      case "5":
        num[0] = "п'ятдесят";
        break;
      case "6":
        num[0] = "шістдесят";
        break;
      case "7":
        num[0] = "сімдесять";
        break;
      case "8":
        num[0] = "вісімдесять";
        break;
      case "9":
        num[0] = "дев'яносто";
        break;
    }

    switch (number[1]) {
      case "2":
        num[1] = "двa";
        break;
      case "3":
        num[1] = "три";
        break;
      case "4":
        num[1] = "чотири";
        break;
      case "5":
        num[1] = "п'ять";
        break;
      case "6":
        num[1] = "шість";
        break;
      case "7":
        num[1] = "сім";
        break;
      case "8":
        num[1] = "вісім";
        break;
      case "9":
        num[1] = "дев'ять";
        break;
      case "0":
        num[1] = "";
    }
    return num[0] + " " + num[1];
  }
}
console.log(numberConverter("44"));
console.log(numberConverter("16"));
