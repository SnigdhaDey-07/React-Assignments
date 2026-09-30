import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || "d80ffea7bd6add65fe7ecf17dcf57c30";

  const fetchWeather = async (searchCity) => {
    if (!searchCity.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found. Please enter a valid city name.");
      }

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      setWeather(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city.trim()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchWeather(city);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  return (
    <div className="app">
      <div className="weather-container">

        <header className="header">
          <div className="header-icon">☁️</div>
          <h1>Weather Dashboard</h1>
          <p>Check the weather anywhere in the world</p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading weather...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-message">
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        {weather && !loading && !error && (
          <>
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
          </>
        )}

        <footer>
          <p>Weather Dashboard • Powered by OpenWeatherMap</p>
        </footer>

      </div>
    </div>
  );
}

export default App;