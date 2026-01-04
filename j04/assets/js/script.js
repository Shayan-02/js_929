const rounds = +prompt("تعداد دست ها وارد کنید");

let attemps = rounds;
let user1Wins = 0;
let user2Wins = 0;
while (attemps) {
  alert(`دست ${rounds - attemps + 1}\nسنگ\nکاغذ\nقیچی`)
  let user1 = prompt("کاربر 1");
  let user2 = prompt("کاربر 2");
  if (user1 === "سنگ" || user1 === "کاغذ" || user1 === "قیچی") {
    if (user2 === "سنگ" || user2 === "کاغذ" || user2 === "قیچی") {
      if (user1 === user2) alert("مساوی");
      else if (user1 === "سنگ" && user2 === "کاغذ") {
        alert("کاربر 2 برنده شد");
        user2Wins++;
      }
      else if (user1 === "سنگ" && user2 === "قیچی") {
        alert("کاربر 1 برنده شد");
        user1Wins++;
      }
      else if (user1 === "کاغذ" && user2 === "قیچی") {
        alert("کاربر 2 برنده شد");
        user2Wins++;
      }
      else if (user1 === "کاغذ" && user2 === "سنگ") {
        alert("کاربر 1 برنده شد");
        user1Wins++;
      }
      else if (user1 === "قیچی" && user2 === "سنگ") {
        alert("کاربر 2 برنده شد");
        user2Wins++;
      }
      else if (user1 === "قیچی" && user2 === "کاغذ") {
        alert("کاربر 1 برنده شد");
        user1Wins++;
      }
      attemps--;
    } else {
      alert("کاربر 2 اشتباه وارد کرده است");
    }
  } else {
    alert("کاربر 1 اشتباه وارد کرده است");
  }
}

const winner = user1Wins > user2Wins ? "کاربر 1" : "کاربر2";

if (user1Wins === user2Wins) {
  alert(
    `کاربر1: ${user1Wins}\nکاربر 2: ${user2Wins}\nمساوی: ${
      rounds - (user1Wins + user2Wins)
    }\nمساوی شدید`
  );
} else {
  alert(
    `کاربر1: ${user1Wins}\nکاربر 2: ${user2Wins}\nمساوی: ${
      rounds - (user1Wins + user2Wins)
    }\nبرنده : ${winner}`
  );
}
