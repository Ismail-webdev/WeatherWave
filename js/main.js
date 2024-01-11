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
function getPopularWeatherData() {
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

    fetch(`http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743,1850144&units=metric&appid=${apiKey}`)
        .then(function (popularResponse) {
            return popularResponse.json();
        })
        .then(function (popularData) {
            document.querySelector(".popular-destination .row").innerHTML =`<div class="weather-card first">
        <div class="icon"><img src=""></div>
        <div class="location">${popularData.list[0].name},${popularData.list[0].sys.country}</div>
        <div class="temperature">${parseInt(popularData.list[0].main.temp)}°C</div>
        <div class="condition">${popularData.list[0].weather[0].main}</div>
        <div class="details">
            <div class="humidity">Humidity: ${popularData.list[0].main.humidity}%</div>
            <div class="wind">Wind: ${popularData.list[0].wind.speed} km/h</div>
        </div>
        </div>
        <div class="weather-card second">
        <div class="icon"><img src=""></div>
        <div class="location">${popularData.list[1].name},${popularData.list[1].sys.country}</div>
        <div class="temperature">${parseInt(popularData.list[1].main.temp)}°C</div>
        <div class="condition">${popularData.list[1].weather[0].main}</div>
        <div class="details">
            <div class="humidity">Humidity: ${popularData.list[1].main.humidity}%</div>
            <div class="wind">Wind: ${popularData.list[1].wind.speed} km/h</div>
        </div>
        </div>
        <div class="weather-card third">
        <div class="icon"><img src=""></div>
        <div class="location">${popularData.list[2].name},${popularData.list[2].sys.country}</div>
        <div class="temperature">${parseInt(popularData.list[2].main.temp)}°C</div>
        <div class="condition">${popularData.list[2].weather[0].main}</div>
        <div class="details">
            <div class="humidity">Humidity: ${popularData.list[2].main.humidity}%</div>
            <div class="wind">Wind: ${popularData.list[2].wind.speed} km/h</div>
        </div>
        </div>
        <div class="weather-card fourth">
        <div class="icon"><img src=""></div>
        <div class="location">${popularData.list[3].name},${popularData.list[3].sys.country}</div>
        <div class="temperature">${parseInt(popularData.list[0].main.temp)}°C</div>
        <div class="condition">${popularData.list[3].weather[0].main}</div>
        <div class="details">
            <div class="humidity">Humidity: ${popularData.list[3].main.humidity}%</div>
            <div class="wind">Wind: ${popularData.list[3].wind.speed} km/h</div>
        </div>
        </div>
            `;

            const firstImg = document.querySelector(".first .icon img");
            const secondImg = document.querySelector(".second .icon img");
            const thirdImg = document.querySelector(".third .icon img");
            const fourthImg = document.querySelector(".fourth .icon img");

            for (let i = 0; i < 4; i++) {
                const currentCondition = popularData.list[i].weather[0].main;
                let currentImg;

                switch (i) {
                    case 0:
                        currentImg = firstImg;
                        break;
                    case 1:
                        currentImg = secondImg;
                        break;
                    case 2:
                        currentImg = thirdImg;
                        break;
                    case 3:
                        currentImg = fourthImg;
                        break;
                    default:
                        break;
                }

                switch (currentCondition) {
                    case "Rain":
                        currentImg.src = "img/rain.png";
                        break;
                    case "Clouds":
                        currentImg.src = "img/cloud.png";
                        break;
                    case "Clear":
                        currentImg.src = "img/clear.png";
                        break;
                    case 'Haze':
                        currentImg.src = "img/mist.png";
                        break;
                    case 'Snow':
                        currentImg.src = "img/snow.png";
                        break;
                    default:
                        currentImg.src = "";
                        break;
                }
            }
        })
        .catch(function (error) {
            console.error('Error fetching weather data:', error);
        });
}
getPopularWeatherData();
