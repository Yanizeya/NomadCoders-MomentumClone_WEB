// const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginButton(){
    const value = loginInput.value;
    if(value === ""){
        alert("Please write your name")
    }else if(username.length > 15){
        alert("Your name is too long");
    }
}

loginButton.addEventListener("click", onLoginButton);