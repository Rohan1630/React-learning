import React from 'react';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{weatherData.location.name}</div>
        <p className="text-gray-700 text-base">
          Temperature: {weatherData.current.temp_c}°C
        </p>
        <p className="text-gray-700 text-base">
          Weather: {weatherData.current.condition.text}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
