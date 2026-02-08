const tempInput = document.querySelector(".temp-input");
const resultElem = document.querySelector(".f-result");
const convertBtn = document.querySelector(".convert-btn");
const clearBtn = document.querySelector(".clear-btn");
const clear = document.getElementById("clear")

function calcTemp() {
  const cTemp = +tempInput.value;

  if (!isNaN(cTemp)) {
    const fTemp = cTemp * 1.8 + 32;
    resultElem.innerHTML = fTemp;
  }
}

// function clearData() {
//   tempInput.value = "";
//   resultElem.innerHTML = "";
// }

function clearForm() {
  tempInput.value = "";
  resultElem.innerHTML = "";
}

convertBtn.addEventListener("click", calcTemp);
// clearBtn.addEventListener("click", clearData);
clear.addEventListener("click", clearForm);
