let appId = 'cbbe9863b40ca678807ac98154208e5f';
let units = 'imperial';
let searchMethod = 'zipcode';

function getSearchMethod(searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zipcode';
    else
        searchMethod = 'q';
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm},us&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}   

function init (resultFromServer) {
    switch (resultFromServer.weather[0].main) {
        case 'Clear':

            break;

        case 'Clouds':
            break;

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            break;

        case 'Thunderstorm':
            break;

        case 'Snow':
            break;
        default:
            break;
    }
    

    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg'); 

    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176F';
    windSpeedElement.innerHTML = 'Wind Speed: ' + Math.floor(resultFromServer.wind.speed) + ' m/s';
    cityHeader.innerHTML = resultFromServer.name;
    humidityElement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + '%';
    console.log(resultFromServer)
}


document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm)
        searchWeather(searchTerm);
})




