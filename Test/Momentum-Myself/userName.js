const nameForm = document.querySelector("#nameForm")
const inputName = nameForm.querySelector("input");
const userName = nameForm.querySelector("h2");
const USERNAME = 'userName';

function printName(){
    console.log("printName!");
    inputName.classList.toggle('off');
    userName.innerText = `Hello ${localStorage.getItem(USERNAME)}`;
    document.querySelector("#toDosForm").querySelector("input").classList.toggle('off');
}

function handleEvent(event){
    console.log("handleEvent!");
    event.preventDefault();
    localStorage.setItem(USERNAME, inputName.value)
    printName();
}

function getName(){
    console.log("getName!");
    nameForm.addEventListener('submit', handleEvent);
}

function checkName(){
    const userNameHave = localStorage.getItem(USERNAME)===null?false:true;
    if(userNameHave){
        printName();
    } else{
        getName();
    }

    
}

function init(){
    checkName();
}

init();