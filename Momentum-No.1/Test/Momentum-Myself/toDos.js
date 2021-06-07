const toDosForm = document.querySelector("#toDosForm");
const inputToDos = toDosForm.querySelector("input");
const userToDos = toDosForm.querySelector("h2");

const USERTODOS = 'userToDos';
function printToDos(){
    console.log("printToDos!");
    inputToDos.classList.toggle('off');
    userToDos.innerText = `${localStorage.getItem(USERTODOS)} ❌`;
}

function handleEvent(event){
    console.log("handleEvent!");
    event.preventDefault();
    localStorage.setItem(USERTODOS, inputToDos.value)
    printToDos();
}

function getToDos(){
    console.log("getToDos!");
    toDosForm.addEventListener('submit', handleEvent);
}

function checkToDos(){
    const userToDosOn = localStorage.getItem(USERTODOS)===null?false:true;
    if(userToDosOn){
        console.log("ToDosOn!");
        printToDos();
    } else{
        getToDos();
    }

    
}
function init(){
    checkToDos();
}

init();