const h1 = document.querySelector("h1");

function handleH1Click(){
    const currentClass = h1.className;
    let newClass;
    const clickedClass = "active"
    if(currentClass !== clickedClass){
        newClass = clickedClass;
    } else{
        newClass = "";
    }
    h1.className = newClass;
}

h1.addEventListener("click", handleH1Click);