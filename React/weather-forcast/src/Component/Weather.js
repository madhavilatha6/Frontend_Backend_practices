import React, { useState, useEffect } from "react";
import "./Weather.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: "",
    humidity: "",
    tempMax: "",
    tempMin: "",
    speed: "",
  });

  const apiKey = "aba6ff9d6de967d5eac6fd79114693cc";

  const searchWeather = async (city) => {
    try {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

     
     
    

      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const [displaydata,setdisplaydata] = useState(false);
  const handletoggle = () =>{
    setdisplaydata(!displaydata);
x
  }
  const displayWeather = (data) => {
    const { name, main, wind } = data;
    const { temp, humidity, temp_max, temp_min } = main;
    const { speed } = wind;

    setWeatherData({
      city: `Weather in ${name}`,
      temp: `${temp}°C`,
      humidity: `Humidity: ${humidity}%`,
      tempMax: `Max Temperature: ${temp_max}°C`,
      tempMin: `Min Temperature: ${temp_min}°C`,
      speed: `Wind speed: ${speed} km/h`,
    });

    console.log("Weather data:", data);

    document.querySelector(".weather").classList.remove("loading");
  };

  useEffect(() => {
    const reverseGeocode = (latitude, longitude) => {
      const apikey = "90a096f90b3e4715b6f2e536d934c5af";
      const api_url = "https://api.opencagedata.com/geocode/v1/json";
      const request_url =
        api_url +
        "?" +
        `key=${apikey}&q=${encodeURIComponent(
          latitude + "," + longitude
        )}&pretty=1&no_annotations=1`;

      fetch(request_url)
        .then((response) => response.json())
        .then((data) => {
          searchWeather(data.results[0].components.city);
          console.log(data.results[0].components.city);
        })
        .catch((error) => {
          console.error("Error in reverse geocoding:", error);
        });
    };

    const getLocation = () => {
      function success(data) {
        reverseGeocode(data.coords.latitude, data.coords.longitude);
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, console.error);
      } else {
        searchWeather("Manipal");
      }
    };

    getLocation();
  }, []);

  const debounce = (fn, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const debouncedSearchWeather = debounce(searchWeather, 300);


  const handleSearch = () => {
    const city = document.querySelector(".search-bar").value;
    searchWeather(city);
  };

  return (
    <div>
      <img
        className="main-logo"
        src="https://weatherstack.com/site_images/weather_icon_full_clouds.svg"
        alt=""
      />
      <h1 className="heading">Weather Forecast</h1>
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter city name..."
          onKeyUp={(event) => {
            if (event.key === "Enter") handleSearch();
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="weather loading">
        <h1 className="city">{weatherData.city}</h1>
        <p>{displaydata ? '{weatherData.city}' : "not found"}</p>
        {/* <p onClick={showAlert}>weather not found</p> */}
        <div className="weather-boxes">
          <div className="weather-box">
            <img
              className="small-logo"
              src="https://weatherstack.com/site_images/weather_icon_full_sun.svg"
              alt=""
            />
            <h2 className="weather-box-label">Temperature</h2>
            <p className="weather-box-value">{weatherData.temp}</p>
          </div>
          <div className="weather-box">
            <img
              className="small-logo"
              src="https://weatherstack.com/site_images/weather_icon_full_sun.svg"
              alt=""
            />
            <h2 className="weather-box-label">Humidity</h2>
            <p className="weather-box-value">{weatherData.humidity}</p>
          </div>
          <div className="weather-box">
            <img
              className="small-logo"
              src="https://weatherstack.com/site_images/weather_icon_full_sun.svg"
              alt=""
            />
            <h2 className="weather-box-label">Max Temperature</h2>
            <p className="weather-box-value">{weatherData.tempMax}</p>
          </div>
          <div className="weather-box">
            <img
              className="small-logo"
              src="https://weatherstack.com/site_images/weather_icon_full_sun.svg"
              alt=""
            />
            <h2 className="weather-box-label">Min Temperature</h2>
            <p className="weather-box-value">{weatherData.tempMin}</p>
          </div>
          <div className="weather-box">
            <img
              className="small-logo"
              src="https://weatherstack.com/site_images/weather_icon_full_sun.svg"
              alt=""
            />
            <h2 className="weather-box-label">Wind Speed</h2>
            <p className="weather-box-value">{weatherData.speed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
