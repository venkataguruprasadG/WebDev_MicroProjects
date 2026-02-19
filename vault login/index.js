const loginForm = document.getElementById('login-form');
const errorDisplay = document.getElementById('errorMessage');

const passwordCheckBox = document.getElementById('showPassword');

passwordCheckBox.addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('password').type = "text";
    }
    else {
        document.getElementById('password').type = "password";
    }
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;

    console.log("Attempting login with:", emailValue);

    if (passwordValue.length < 8 || !emailValue.includes("@")) {
        errorDisplay.innerText = "Invalid Credentials";
        document.getElementById('password').value = "";
    }
    else {
        errorDisplay.innerText = "";
        alert("Vault gratn access granted");
    }

});
