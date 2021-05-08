const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

  let toDos = [];

  

  function cleantoDos(){

  }

  function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
  }

function saveToDos(){
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
function paintToDo(paintText){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = '❌'
  delBtn.addEventListener("click",deleteToDo);
  const newId = toDos.length+1;
  const span = document.createElement("span");
  span.innerText = paintText;

  li.appendChild(delBtn);
  li.appendChild(span);
  
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: paintText,
    id : newId
  }
  toDos.push(toDoObj);
  saveToDos(); 
}

  function paintHandleSubmit(event){
      event.preventDefault();
      const currentValue = toDoInput.value;
      paintToDo(currentValue);
      saveToDos(currentValue);
      toDoInput.value = "";
  }

const TODOS_LS = 'toDos';

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null)  {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    })
  }
}

  function init(){
    loadToDos();
    toDoForm.addEventListener("submit", paintHandleSubmit);
  }

  init();
