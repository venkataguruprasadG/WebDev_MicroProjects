const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const resultCard = document.getElementById('weather-result');
const errorMsg = document.getElementById('error-message');

// Elements to update
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temperature');
const desc = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

// Replace with your real API Key from OpenWeatherMap
const API_KEY = "YOUR_API_KEY_HERE";

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value;

    // Reset display
    errorMsg.style.display = "none";

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        // Update UI
        cityName.innerText = data.name;
        temp.innerText = Math.round(data.main.temp);
        desc.innerText = data.weather[0].description;
        humidity.innerText = data.main.humidity;
        wind.innerText = data.wind.speed;

        // Show the card with a smooth fade
        resultCard.style.display = "block";

    } catch (err) {
        resultCard.style.display = "none";
        errorMsg.style.display = "block";
    }
});