let img = document.querySelector("#image");
let btn = document.querySelector(".button");

let isOn = false;

function bulb () {
    if (isOn) {
        img.setAttribute("src", "./assets/images/bulboff.gif");
        btn.textContent = "لامپ را روشن کنید";
    } else {
        img.setAttribute("src", "./assets/images/bulbon.gif");
        btn.textContent = "لامپ را خاموش کنید";
    }
    isOn = !isOn;
}

// btn.addEventListener("click", bulb)