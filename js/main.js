const search = document.querySelector(".search-button");
const container = document.querySelector('.container');
const error404 = document.querySelector('.not-found');
const weatherbody = document.querySelector(".container .row");
const apiKey = 'd420ebdd784a4b04a1e7cef533d0809a';

search.addEventListener('click', () => {
    const city = document.querySelector('.search-box input').value;
    if (city === '')
        return;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if (data.cod === '404') {
                container.style.height = '400px';
                document.querySelector(".container .row .card").style.display = "none";
                error404.style.display = 'flex';
                error404.classList.add('fadeIn');
                return;
            }
            else {
                error404.style.display = 'none';
                error404.classList.remove('fadeIn');
                weatherbody.innerHTML = `<div class="card" id="weather-img">
            <h2 id="name">${data.name}</h2>
            <p class="med-font" id="weather-condition">${data.weather[0].main}</p>
            <h1 class="large-font" id="temperature">${parseInt(data.main.temp)}&#176C</h1>
            <h2 class="min_max">MAX TEMP ${parseInt(data.main.temp_max)}&#176C</h2>
            <h2 class="min_max">MIN TEMP ${parseInt(data.main.temp_min)}&#176C</h2>
        </div>`;
            }
            switch (data.weather[0].main) {
                case "Rain":
                    document.getElementById("weather-img").style.backgroundImage = "url('img/rain.jpg')";
                    document.querySelector(".card").style.color = "white";
                    break;
                case "Clouds":
                    document.getElementById("weather-img").style.backgroundImage = "url('img/cloud.jpg')";
                    document.querySelector(".card").style.color = "white";
                    break;
                case "Clear":
                    document.getElementById("weather-img").style.backgroundImage = "url('img/clear.jpg')";
                    break;
                case 'Haze':
                    document.getElementById("weather-img").style.backgroundImage = "url('img/mist.jpg')";
                    break;
                case 'Mist':
                    document.getElementById("weather-img").style.backgroundImage = "url('img/mist.jpg')";
                    break;
                case 'Smoke':
                    document.getElementById("weather-img").style.backgroundImage = "url('img/mist.jpg')";
                    break;
                case 'Snow':
                    document.getElementById("weather-img").style.backgroundImage = "url('img/snow.jpg')";
                    document.querySelector(".card").style.color = "white";
                    break;
                case 'Fog':
                    document.getElementById("weather-img").style.backgroundImage = "url('img/fog.jpg')";
                    document.querySelector(".card").style.color = "white";
                    break;
                default:
                    document.getElementById("weather-img").style.backgroundImage = "";
                    break;
            }

        })
        .catch(error => {
            // Handle errors that may occur during the fetch operation
            console.error('Error fetching weather data:', error);
        });
})
