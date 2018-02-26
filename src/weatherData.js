import 'whatwg-fetch';

var apiUrl = 'https://api.openweathermap.org/data/2.5/';
var apiKey = 'appid=5918d7d94b22217a39b1afe7fe4b34e5';

function parseJSON(response) {
  return response.json();
}

export default function getForecast(callback) {
  fetch(apiUrl + 'forecast?q=New%20York&units=imperial&' + apiKey)
    .then(parseJSON)
    .then(callback);
}