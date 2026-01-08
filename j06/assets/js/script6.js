let running = true;
let numbers = []
let numbers2 = []

while (running) {
  let answer = prompt("یک عدد وارد کنید");
  if (answer === "end"){
    running = false;
  }
  else{
    if (+answer == answer){
        numbers.push(+answer)
    }
  }
}

alert(numbers)

// for (i = numbers.length - 1; i >= 0; i--){
//     numbers2.push(numbers[i])
// }
const l = numbers.length
for (i = 0; i < l; i++){
    numbers2.push(numbers.pop())
}

alert(numbers2)