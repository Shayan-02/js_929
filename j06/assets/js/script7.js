let numbers = []
let sumNumbers = 0
for (i = 1; i <= 5; i++){
    let number = +prompt("یک عدد وارد کنید");
    sumNumbers+= number
    numbers.push(sumNumbers)
}

alert(numbers)