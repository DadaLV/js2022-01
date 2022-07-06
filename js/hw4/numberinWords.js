function sortStr(str) {
  arr = str.split(' ');
  console.log(arr);
  const result = [];

  for (let i = 0, j = 1; i < arr.length, j <= arr.length; i++, j++) {
    let jStr = j.toString();
    console.log(jStr);
    if (arr[i].includes(j.toString())) { 
      result[i] = arr[i];
    }
  }
  console.log(result);
}
console.log(sortStr("4of Fo1r pe6ople g3ood th5e the2"))

// function sortStr(str) {
//   arr = str.split(' ');
//   console.log(arr);
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes('1')) result[0] = arr[i];
//     if (arr[i].includes('2')) result[1] = arr[i];
//     if (arr[i].includes('3')) result[2] = arr[i];
//     if (arr[i].includes('4')) result[3] = arr[i];
//     if (arr[i].includes('5')) result[4] = arr[i];
//     if (arr[i].includes('6')) result[5] = arr[i];
//     if (arr[i].includes('7')) result[6] = arr[i];
//     if (arr[i].includes('8')) result[7] = arr[i];
//     if (arr[i].includes('9')) result[8] = arr[i];
//   }
//   console.log(result);
// }
// console.log(sortStr("4of Fo1r pe6ople g3ood th5e the2"))