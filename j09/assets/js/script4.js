const par1 = document.getElementById("par");
const setColor = document.getElementById("set-color");
const inp1 = document.getElementById("inp").value;
const body = document.getElementsByTagName("body")

// setColor.addEventListener("click", function () {
//     par1.classList.add("fail")
// })

setColor.addEventListener("click", function () {
    body.style.backgroundColor = inp1
})