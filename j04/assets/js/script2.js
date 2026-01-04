let x = 3;

let win = false;
while (x) {
  let guess = prompt("حدس بزنید")
  if (guess === "سلام") {
    win = true;
    break;
  }
  x--;
}
if (!win) {
  alert("باختی")
}