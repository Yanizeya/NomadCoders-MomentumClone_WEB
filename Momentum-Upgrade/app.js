// const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginButton(potato){
    potato.preventDefault();
    console.log(potato);
}

loginButton.addEventListener("submit", onLoginButton);