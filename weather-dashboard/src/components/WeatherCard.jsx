function WeatherCard({ weather }) {
  const temperature = Math.round(weather.main.temp);

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">

      <div className="location">
        <h2>
          {weather.name}, {weather.sys.country}
        </h2>
      </div>

      <div className="main-weather">

        <div className="weather-icon">
          <img
            src={iconUrl}
            alt={weather.weather[0].description}
          />
        </div>

        <div className="temperature">
          <h3>{temperature}°C</h3>
          <p>
            {weather.weather[0].description}
          </p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;