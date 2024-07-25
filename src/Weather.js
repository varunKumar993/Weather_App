import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`f5a6c01ae5f4b591f28020ff97d8fe6e`}`
      );
      console.log(response);
      setWeather(response.data);
    } catch (error) {
      console.log("Error fetching weather data", error);
    }
  };

  const handleClick = () => {
    fetchWeather();
  };

  return (
    <>
      <div className="weather-container">
        <h2>Weather App</h2>
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={handleCityChange}
        ></input>
        <button onClick={handleClick}>Get Weather</button>
        {weather && (
          <>
            <div className="weather-info">
              <h3>City:{weather.name}</h3>
              <h4>Temp: {(weather.main.temp - 273.15).toFixed(2)}°C</h4>
              <h4>Weather: {weather.weather[0].description}</h4>
            </div>
          </>
        )}
      </div>
    </>
  );
}
