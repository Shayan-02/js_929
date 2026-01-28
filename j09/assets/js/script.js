// Add your JavaScript code here
// const par1 = document.getElementById("par");
const par2 = document.getElementsByClassName("pa");
// const par3 = document.querySelector("p");
// const par4 = document.querySelectorAll("p");

// ❌
// par1.innerHTML = "salam";

// ✅
// par3.textContent = "salam chetori";
// par1.style.color = "red";
// par1.style.color = "green";

// par4.forEach((item => item.textContent = "salam chetori"));

for (i = 0; i < par2.length; i++) {
    par2[i].textContent = "salam"
}

// par2.forEach((value) => {
//     par2[value].textContent = "salam"
// })