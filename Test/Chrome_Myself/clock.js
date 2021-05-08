
const clock = document.getElementById("clock");

function chnageTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerHTML = `${hour<10?"0"+hour:hour} : 
    ${minutes<10?"0"+minutes:minutes} : 
    ${seconds<10?"0"+seconds:seconds}`;
    
}

function showTime(){
    chnageTime();
    setInterval(chnageTime, 1000);
}

function init(){
    showTime();
}

init();