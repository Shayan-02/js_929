function sumNumbers(arr) {
    let numbers2 = [];
    let sums = 0;
    let len = 0;
    for (i = 0; i < arr.length; i++) {
        sums += arr[i];
        len++;
        numbers2.push(sums / len);
    }
    return numbers2;
}

let numbers = [];

while (true) {
    let a = +prompt("یک عدد وارد کنید");
    if (a === 0) {
        break;
    } else {
        numbers.push(a);
    }
}

alert(sumNumbers(numbers));
