const form = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-button");
const statusMessage = document.querySelector("#status");
const weatherCard = document.querySelector("#weather-card");

function showStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("error", isError);
}

function getApiKey() {
  // config.js defines API_KEY. The workflow creates this file from a repository secret.
  return typeof API_KEY === "string" ? API_KEY.trim() : "";
}

function displayWeather(data) {
  const weather = data.weather && data.weather[0] ? data.weather[0] : {};
  document.querySelector("#city-name").textContent =
    data.name && data.sys && data.sys.country
      ? `${data.name}, ${data.sys.country}`
      : data.name || "Weather";
  document.querySelector("#weather-date").textContent =
    new Date().toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  document.querySelector("#weather-description").textContent =
    weather.description || "Current conditions";
  document.querySelector("#temperature").textContent =
    Math.round(data.main.temp);
  document.querySelector("#feels-like").textContent =
    Math.round(data.main.feels_like);
  document.querySelector("#humidity").textContent =
    `${data.main.humidity}%`;
  document.querySelector("#wind-speed").textContent =
    `${data.wind.speed} m/s`;
  document.querySelector("#pressure").textContent =
    `${data.main.pressure} hPa`;
  document.querySelector("#visibility").textContent =
    typeof data.visibility === "number"
      ? `${(data.visibility / 1000).toFixed(1)} km`
      : "Unavailable";

  const icon = document.querySelector("#weather-icon");
  if (weather.icon) {
    icon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    icon.alt = weather.description || "Weather icon";
    icon.hidden = false;
  } else {
    icon.hidden = true;
    icon.removeAttribute("src");
  }

  weatherCard.hidden = false;
}

async function searchWeather(city) {
  const apiKey = getApiKey();
  if (!apiKey || apiKey === "YOUR_OPENWEATHERMAP_API_KEY") {
    weatherCard.hidden = true;
    showStatus(
      "Weather API key is missing. Add your OpenWeather key to config.js, or configure the OPENWEATHER_API_KEY GitHub secret for deployment.",
      true,
    );
    return;
  }

  searchButton.disabled = true;
  searchButton.textContent = "Searching…";
  showStatus("Fetching current weather…");

  try {
    const params = new URLSearchParams({
      q: city,
      appid: apiKey,
      units: "metric",
    });
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${params.toString()}`,
    );
    const data = await response.json();

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found. Check the spelling and try again.");
      }
      if (response.status === 401) {
        throw new Error("The weather API key was rejected. Check your OpenWeather API key.");
      }
      throw new Error(data.message || "Weather request failed. Please try again.");
    }

    if (!data.main || !data.weather || !data.wind) {
      throw new Error("The weather service returned incomplete data.");
    }

    displayWeather(data);
    showStatus(`Latest weather for ${data.name}.`);
  } catch (error) {
    weatherCard.hidden = true;
    showStatus(error instanceof Error ? error.message : "Something went wrong.", true);
  } finally {
    searchButton.disabled = false;
    searchButton.textContent = "Search weather";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) {
    showStatus("Please enter a city name.", true);
    cityInput.focus();
    return;
  }
  searchWeather(city);
});
