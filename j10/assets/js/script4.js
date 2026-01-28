let user = document.querySelector("#user");
let pass = document.querySelector("#pass").value;
let btn = document.querySelector("#submit");


let formValidate = function () {
    if (user.value.length < 3) {
        alert("طول نام کاربری باید حداقل 3 کاراکتر باشد")
    }
}


btn.addEventListener("click", formValidate)