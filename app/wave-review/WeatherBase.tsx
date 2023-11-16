// WeatherPage.tsx
"use client"
import React, { useEffect, useState } from 'react';

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json');
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather Data</h1>
      {weatherData ? (
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherPage;
