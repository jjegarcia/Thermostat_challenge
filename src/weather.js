// interface.js, within the document.addEventListener('DOMContentLoaded' ... ) callback
fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
    });