const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `hello ${text}`
}

function saveName(text){
  console.log("currenttext :"+text);
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    console.log("handleSubmit()!");
    event.preventDefault();
    console.log(input.value);
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  } else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();
