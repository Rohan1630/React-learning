import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherForm from './components/WeatherForm';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '48ddc33229534f288f0155424240907'; // Replace with your WeatherAPI key
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
