const number1 = +prompt("عدد اول را وارد کنید");
const op = prompt("عملگر را وارد کنید");
const number2 = +prompt("عدد دوم را وارد کنید");

// let sumNumbers = number1 + number2
// let subNumbers = number1 - number2
// let mulNumbers = number1 * number2
// let divNumbers = number1 / number2
if (op == "+") {alert(`${number1} + ${number2} = ${number1 + number2}`);}
else if (op == "-") alert(`${number1} - ${number2} = ${number1 - number2}`);
else if (op == "*") alert(`${number1} * ${number2} = ${number1 * number2}`);
else alert(`${number1} / ${number2} = ${number1 / number2}`);
