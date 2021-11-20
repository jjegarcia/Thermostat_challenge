const selectCity = document.querySelector('#current-city');
selectCity.addEventListener('change', (event) => {
    fetchWeather(getUrl(event.target.value));
});

function getUrl(city) {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`;
}

function fetchWeather(url) {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.querySelector('#current-temperature').innerText = data.main.temp;
        })
}
fetchWeather(getUrl(selectCity.value));