// let a = 10;
// let b = 20;
// // a += b;
// a = a + b
// console.log(a);

let num1 = 20;
let op = "/";
let num2 = 10;
let a = "a";

// if (op === "+"){
//   console.log(num1 + num2);
// } else if (op == "-") {
//   console.log(num1 - num2);
// } else if (op == "*") {
//   console.log(num1 * num2);
// } else if (op == "/") {
//   console.log(num1 / num2);
// }

switch (op) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    switch (num2) {
      case 0:
        console.log("num2 must be not zero");
        break;
      default:
        console.log(num1 / num2);
        break;
    }
}
