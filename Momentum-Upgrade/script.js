const title = document.getElementById("title");

function handleTitleClick(){
    if(title.style.color !== "blue"){
        title.style.color = "blue";
    } else{
        title.style.color = "black";
    }
}

function handleMouseEnter(){
    title.innerText = "Mouse is here";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);