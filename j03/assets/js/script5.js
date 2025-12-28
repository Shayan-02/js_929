// let i = 1;

// while (i <= 20) {
//   if (i % 15 === 0) {
//     break
//   }
//   else {
//     console.log(i);
//     i++;
//   }
// }

let countNumber = 0;
let sumNumbers = 0;
while (true) {
  let num = +prompt();
  if (num === 0) {
    break
  }
  else {
    sumNumbers += num;
    countNumber++;
  }
}

let avg = sumNumbers / countNumber;
alert(avg);