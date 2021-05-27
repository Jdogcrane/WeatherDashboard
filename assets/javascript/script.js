// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// values
var inputText = document.querySelector('.inputText');
var button = document.querySelector('.btn');
var showData = document.querySelector('.data');
var showData5 = document.querySelector('.data5')
// grabbing api data
var apiKey = "58d4139f26e4fb35c4f0440bbeb79e2a";

button.addEventListener('click', function () {

    var date = moment().format('MMMM Do');

    // captures input value from the search input
    var cityInput = inputText.value;
    // Request url modifiable by inputText 
    var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&APPID=${apiKey}`
    var requestUrl5 = `http://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=imperial&APPID=${apiKey}`


    fetch(requestUrl5)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            showData5.innerHTML =
                `
       <ul>
           <li>${data.list[0].dt_txt}</li>
           <li>${data.list[0].weather[0].description}</li>
           <li>${data.list[0].main.temp}°F</li>
           <li>Humidity level:${data.list[0].main.humidity}</li>
           <li>Wind Speed:${data.list[0].wind.speed}
       </ul>
       
       <ul>

       <li>${data.list[8].dt_txt}</li>
       <li>${data.list[8].weather[0].description}</li>
       <li>${data.list[8].main.temp}°F</li>
       <li>Humidity level:${data.list[0].main.humidity}</li>
       <li>Wind Speed:${data.list[8].wind.speed}

       </ul>
       
       <ul>

       <li>${data.list[16].dt_txt}</li>
       <li>${data.list[16].weather[0].description}</li>
       <li>${data.list[16].main.temp}°F</li>
       <li>Humidity level:${data.list[0].main.humidity}</li>
       <li>Wind Speed:${data.list[16].wind.speed}

       </ul>
       
       <ul>

       <li>${data.list[24].dt_txt}</li>
       <li>${data.list[24].weather[0].description}</li>
       <li>${data.list[24].main.temp}°F</li>
       <li>Humidity level:${data.list[0].main.humidity}</li>
       <li>Wind Speed:${data.list[24].wind.speed}

       </ul>
       
       <ul>

       <li>${data.list[32].dt_txt}</li>
       <li>${data.list[32].weather[0].description}</li>
       <li>${data.list[32].main.temp}°F</li>
       <li>Humidity level:${data.list[0].main.humidity}</li>
       <li>Wind Speed:${data.list[32].wind.speed}

       </ul>
           `;
        });

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // clears input field after user submits
            inputText.value = " ";

            // modifying the html using innerHTML
            // filling with the 
            showData.innerHTML =
                `
                                <ul>
                                    <li class="desk">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°F</li>
                                    <li>${date}</li>
                                </ul>
                                    `;
        });
});

