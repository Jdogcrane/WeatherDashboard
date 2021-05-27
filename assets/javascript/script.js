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
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&APPID=${apiKey}`
    var requestUrl5 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=imperial&APPID=${apiKey}`

    // Five day weather forecast displayed depending on city input (sorry this is not cleaner I had 6 hours to do this after class today...)
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
            <li>Wind Speed:${data.list[0].wind.speed}</li>
       </ul>
       
       <ul>
            <li>${data.list[8].dt_txt}</li>
            <li>${data.list[8].weather[0].description}</li>
            <li>${data.list[8].main.temp}°F</li>
            <li>Humidity level:${data.list[0].main.humidity}</li>
            <li>Wind Speed:${data.list[8].wind.speed}</li>
        </ul>
       
       <ul>
            <li>${data.list[16].dt_txt}</li>
            <li>${data.list[16].weather[0].description}</li>
            <li>${data.list[16].main.temp}°F</li>
            <li>Humidity level:${data.list[0].main.humidity}</li>
            <li>Wind Speed:${data.list[16].wind.speed}</li>
        </ul>
       
        <ul>
            <li>${data.list[24].dt_txt}</li>
            <li>${data.list[24].weather[0].description}</li>
            <li>${data.list[24].main.temp}°F</li>
            <li>Humidity level:${data.list[0].main.humidity}</li>
            <li>Wind Speed:${data.list[24].wind.speed}</li>
        </ul>
       
        <ul>
            <li>${data.list[32].dt_txt}</li>
            <li>${data.list[32].weather[0].description}</li>
            <li>${data.list[32].main.temp}°F</li>
            <li>Humidity level:${data.list[0].main.humidity}</li>
            <li>Wind Speed:${data.list[32].wind.speed}</li>
        </ul>
           `;
        });

// Grabs the current day weather
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
                <li>${data.weather[0].description}</li>
                <li>${data.name}</li>
                <li>${data.main.temp}°F</li>
                <li>${date}</li>              
                </ul>
                `;
        });
});

