// values
var inputText = document.querySelector('.inputText');
var button = document.querySelector('.btn');
var showData = document.querySelector('.data');

// grabbing api data
var apiKey = "58d4139f26e4fb35c4f0440bbeb79e2a";

button.addEventListener('click', function() {
    // captures input value from the search input
var cityInput = inputText.value;
var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&APPID=${apiKey}`

fetch(requestUrl)
.then(function(response) {
    return response.json();
})
.then(function(data) {
console.log(data);
});
});