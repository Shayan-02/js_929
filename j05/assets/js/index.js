// const tedad = +prompt("تعداد اعداد را وارد کنید")
// let t = tedad;

// let tedad = +prompt("تعداد اعداد را وارد کنید");
let sumNumbers = 0;
let tedad = 0;
while (true) {
  let number = prompt("یک عدد وارد کنید")
  if (number === "پایان") break;
  else{
    sumNumbers += +number
    tedad++;
  }
}

alert(`میانگین ${sumNumbers/tedad}`)