const correctNumber = 50;

const level = prompt("سطح بازی: \nآسان\nمتوسط\nسخت")
let win = false;
let attemps;

if (level === "آسان" || level === "متوسط" || level === "سخت") {
  if (level == "آسان") attemps = 5;
  else if (level == "متوسط") attemps = 4;
  else if (level == "سخت") attemps = 3;
  alert(`شما ${attemps} شانس دارید`)
}
else alert("سطح انتخابی معتبر نیست")

let round = 1;

while(attemps) {
  let guess = +prompt(`حدس شماره ${round}`)
  if (guess === correctNumber) {
    alert("برنده شدی")
    win = true;
    break;
  }
  else if (guess < correctNumber) alert("بزرگتر انتخاب کن")
  else if (guess > correctNumber) alert("کوچکتر انتخاب کن")
alert(`شما ${attemps - round} شانس دیگر دارید`)
  attemps--;
  round++;
}

if (!win){
  alert("باختی")
}