const selectElement = document.querySelector('#current-city');
selectElement.addEventListener('change', (event) => {
    const city = event.target.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.querySelector('#current-temperature').innerText = data.main.temp;
        })
});