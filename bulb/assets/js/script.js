const img = document.querySelector("img");
const btn = document.querySelector(".button");

let isOn = false;

btn.addEventListener("click", function() {
    if (isOn){
        img.setAttribute("src", "./assets/images/bulboff.gif");
        btn.innerHTML = "لامپ را روشن کنید";
        isOn = false;
    }
    else{
        img.setAttribute("src", "./assets/images/bulbon.gif");
        btn.innerHTML = "لامپ را خاموش کنید";
        isOn = true;
    }
})
