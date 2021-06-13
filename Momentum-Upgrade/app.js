 const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(potato){
    potato.preventDefault();
    console.log(potato);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);