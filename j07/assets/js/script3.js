// define function
const showMax = function (a, b) {
  if (a > b) {
    alert(a);
  } else if (b > a) {
    alert(b);
  } else alert("equal");
};

const number1 = +prompt("عدد اول را وارد کنید");
const number2 = +prompt("عدد دوم را وارد کنید");

// calling function
showMax(number1, number2)