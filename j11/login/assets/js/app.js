const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const usernameMessage = document.querySelector(".username-message");
const passwordMessage = document.querySelector(".password-message");
const loginBtn = document.querySelector(".login-button");
const modal = document.querySelector(".modal-screen");
const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-text");
const modalBtn = document.querySelector(".modal-button");

usernameInput.addEventListener("keyup", function () {
  const username = usernameInput.value;

  usernameMessage.classList.remove("hidden");

  if (username.length >= 3) {
    usernameMessage.classList.remove("unsuccess");
    usernameMessage.classList.add("success");
    usernameMessage.innerHTML = "نام کاربری صحیح می‌باشد";
  } else {
    usernameMessage.classList.remove("success");
    usernameMessage.classList.add("unsuccess");
    usernameMessage.innerHTML = "نام کاربری حداقل باید 3 کاراکتر داشته باشد";
  }
});

passwordInput.addEventListener("keyup", function () {
  const password = passwordInput.value;

  passwordMessage.classList.remove("hidden");

  if (password.length >= 8) {
    passwordMessage.classList.remove("unsuccess");
    passwordMessage.classList.add("success");
    passwordMessage.innerHTML = "گذرواژه صحیح می‌باشد";
  } else {
    passwordMessage.classList.remove("success");
    passwordMessage.classList.add("unsuccess");
    passwordMessage.innerHTML = "گذرواژه حداقل باید 8 کاراکتر داشته باشد";
  }
});

usernameInput.addEventListener("blur", function () {
  const username = usernameInput.value;

  usernameMessage.classList.remove("hidden");

  if (username.length >= 3) {
    usernameMessage.classList.remove("unsuccess");
    usernameMessage.classList.a;
    dd("success");
    usernameMessage.innerHTML = "نام کاربری صحیح می‌باشد";
  } else {
    usernameMessage.classList.remove("success");
    usernameMessage.classList.add("unsuccess");
    usernameMessage.innerHTML = "نام کاربری حداقل باید 3 کاراکتر داشته باشد";
  }
});

usernameInput.addEventListener("focus", function () {
  const username = usernameInput.value;

  usernameMessage.classList.remove("hidden");

  if (username.length >= 3) {
    usernameMessage.classList.remove("unsuccess");
    usernameMessage.classList.add("success");
    usernameMessage.innerHTML = "نام کاربری صحیح می‌باشد";
  } else {
    usernameMessage.classList.remove("success");
    usernameMessage.classList.add("unsuccess");
    usernameMessage.innerHTML = "نام کاربری حداقل باید 3 کاراکتر داشته باشد";
  }
});

passwordInput.addEventListener("blur", function () {
  const password = passwordInput.value;

  passwordMessage.classList.remove("hidden");

  if (password.length >= 8) {
    passwordMessage.classList.remove("unsuccess");
    passwordMessage.classList.add("success");
    passwordMessage.innerHTML = "گذرواژه صحیح می‌باشد";
  } else {
    passwordMessage.classList.remove("success");
    passwordMessage.classList.add("unsuccess");
    passwordMessage.innerHTML = "گذرواژه حداقل باید 8 کاراکتر داشته باشد";
  }
});

loginBtn.addEventListener("click", function () {
  const username = usernameInput.value;
  const password = passwordInput.value;

  modal.classList.remove("hidden");

  if (username.length >= 3 && password.length >= 8) {
    modalImg.setAttribute("src", "./assets/images/success.png");
    modalText.innerHTML = "عملیات با موفقیت انجام شد";
  } else {
    modalImg.setAttribute("src", "./assets/images/failed.png");
    modalText.innerHTML = "اطلاعات وارد شده صحیح نمی‌باشند";
  }
});

modalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});
