// "https://api.openweathermap.org/data/2.5/weather?q=denver&appid=dfeb86f33435a4e2395cd13a740cbcb0"
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "dfeb86f33435a4e2395cd13a740cbcb0";
var city = document.querySelector('#search-input');

$(document).ready(function(){
    $('#searchBtn').on("click",function(event){
        console.log("clicked");
        event.preventDefault();
        searchBar = $('#search-input').val();
        getAPI(searchBar);
    });
    });
    
    function weatherCards (name1, icon1, description1, temp1, tempMax1, tempMin1,) {
        return '<div class="card-deck" id="cards">' + '<div class="card"  style="border-radius: 15px; background-color: rgb(182, 218, 249); border: solid;">' + '<div class="card-body">' + '<h3 class="card-title">' + 'Hello from ' + name1 + '</h3>' 
        + '<img class="cards-img id="weatherIcon src="https://openweathermap.org/img/wn/' + icon1 + '.png" alt="weather icon">'  + description1 + '<p class="card-text">The current temperature is: ' + temp1 + '°F</p>' + '<p class="card-text">With a high of: ' + tempMax1 + '°F</p>' +
        '<p class="card-text">With a low of: ' + tempMin1 + '°F</p>' + 
        '</div>'
    
    };

    function getAPI(city) {
    var apiUrl = `${requestUrl}${city}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(function(response){ 
            return response.json();
    })
    .then (function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
        console.log(data.weather[0].description);
        console.log(data.weather[0].icon);
        title = data.name;
        theTemp = data.main.temp;
        theTempMax = data.main.temp_max;
        theTempMin = data.main.temp_min;
        description = data.weather[0].description;
        icon = data.weather[0].icon;
        temp = Math.floor(1.8*(theTemp-273));
        tempMax = Math.floor(1.8*(theTempMax-273));
        tempMin = Math.floor(1.8*(theTempMin-273));
        $('#weather-cont').append(weatherCards(title, icon, description, temp, tempMax, tempMin));
    }) 
};

