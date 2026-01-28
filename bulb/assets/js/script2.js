let btn = document.getElementById("btn");
let img = document.getElementById("image");

let isON = false;

function bulb() {
  if (!isON) {
    img.setAttribute("src", "./assets/images/bulbon.gif");
    btn.innerHTML = "لامپ را خاموش کنید";
    isON = true;
  } else {
    img.setAttribute("src", "./assets/images/bulboff.gif");
    btn.innerHTML = "لامپ را روشن کنید";
    isON = false;
  }
}

btn.addEventListener("click", bulb)
