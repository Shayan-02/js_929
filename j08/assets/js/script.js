// Add your JavaScript code here

function showNumbers(start, end) {
    let index = 1;
    for (i = start; i<=end; i++){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(`${index} -> ${i}`);
            index++
        }
    }
}

const s = +prompt("شروع بازه");
const e = +prompt("پایان بازه");

showNumbers(s, e)