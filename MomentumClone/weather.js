const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = 'ffb1fec7a6da1a9830082fc1aed6c297';


function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
    `).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    console.log("handleGeoSucces()!")
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
       latitude,
       longitude
   };
   saveCoords(coordsObj);
   getWeather(latitude, longitude);
}
function handGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();