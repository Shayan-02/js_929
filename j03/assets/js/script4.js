let i = 10;
let sumNumbers = 0;
while (i >= 1) {
  let num = +prompt()
  sumNumbers += num;
  i -= 2;
}

let avg = sumNumbers / 5;
alert(avg)