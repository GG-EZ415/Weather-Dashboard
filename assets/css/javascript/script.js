// "https://api.openweathermap.org/data/2.5/weather?q=denver&appid=dfeb86f33435a4e2395cd13a740cbcb0"
var searchBtn = document.getElementById('search-input');
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "dfeb86f33435a4e2395cd13a740cbcb0";
var city = document.querySelector('#search-input');

var getAPi = function (city) {
    var apiUrl = `${requestUrl}${city}&appid=${apiKey}`;
    
    fetch(apiUrl)
    .then(function(response){ 
            return response.json();
    })
    .then (function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++)  {

        }
    })
  
};
searchBtn.addEventListener('click', getAPi);
  
//         const { name } = data;
//         const { icon } = data.weather[0];
//         const { description } = data.weather[0];
//         const { temp } = data.main;
//         const { humidity } = data.main;
//         const { visibility } = data.visibility;
//         const { speed } = data.wind;
//         // I have no idea where the UV index is, i guess its the visabilty????
//         document.querySelector("city").innerHTML = "The weather in " + name;
//         document.querySelector("icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector("description").innerHTML = description;
//         document.querySelector("temp").innerHTML = temp + "°";
//         document.querySelector("humidity").innerHTML = "The Humidity is " + humidity + "%";
//         document.querySelector("visibility").innerHTML = "The visibility is " + visibility;
//         document.querySelector("speed").innerHTML = "The wind speed is " + speed;
//     })
//     function searchWeather() {
//         this.fetchWeather(document.querySelector(".form-input").value);
//     }
// document.querySelector(".search button").addEventListener('click', function (){
//     weather.searchWeather();
//  function displayWeather (data){
//         const { name } = data;
//         const { icon } = data.weather[0];
//         const { description } = data.weather[0];
//         const { temp } = data.main;
//         const { humidity } = data.main;
//         const { visibility } = data.visibility;
//         const { speed } = data.wind;
//         // I have no idea where the UV index is, i guess its the visabilty????
//         document.querySelector(".city").innerHTML = "The weather in " + name;
//         document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description").innerHTML = description;
//         document.querySelector(".temp").innerHTML = temp + "°";
//         document.querySelector(".humidity").innerHTML = "The Humidity is " + humidity + "%";
//         document.querySelector(".visibility").innerHTML = "The visibility is " + visibility;
//         document.querySelector(".speed").innerHTML = "The wind speed is " + speed;
//     };
//     function searchWeather() {
//         this.fetchWeather(document.querySelector(".form-input").value);
//     };
// document.querySelector(".search button").addEventListener('click', function (){
//     weather.searchWeather();
// });