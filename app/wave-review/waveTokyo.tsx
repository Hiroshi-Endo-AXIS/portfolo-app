"use client"// WeatherPage.tsx

import React, { useEffect, useState } from 'react';

const WaveTokyo: React.FC = () => {
  const [wavesData, setWavesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json');
        const data = await response.json();
        // Extracting waves data
        const waves = data?.[0]?.timeSeries?.[0]?.areas?.map((area) => ({
          name: area?.area?.name,
          waves: area?.waves,
        }));
        setWavesData(waves);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Waves Data</h1>
      {wavesData ? (
        <div>
          {wavesData.map((area, index) => (
            <div key={index}>
              <h2>{area.name}</h2>
              <pre>{JSON.stringify(area.waves, null, 2)}</pre>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading waves data...</p>
      )}
    </div>
  );
};

export default WaveTokyo;
