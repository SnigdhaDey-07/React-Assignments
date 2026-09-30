function WeatherDetails({ weather }) {

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="details-grid">

      <div className="detail-card">
        <div className="detail-icon">💧</div>
        <div>
          <p>Humidity</p>
          <h3>{weather.main.humidity}%</h3>
        </div>
      </div>

      <div className="detail-card">
        <div className="detail-icon">💨</div>
        <div>
          <p>Wind Speed</p>
          <h3>{weather.wind.speed} m/s</h3>
        </div>
      </div>

      <div className="detail-card">
        <div className="detail-icon">🌅</div>
        <div>
          <p>Sunrise</p>
          <h3>{formatTime(weather.sys.sunrise)}</h3>
        </div>
      </div>

      <div className="detail-card">
        <div className="detail-icon">🌇</div>
        <div>
          <p>Sunset</p>
          <h3>{formatTime(weather.sys.sunset)}</h3>
        </div>
      </div>

    </div>
  );
}

export default WeatherDetails;