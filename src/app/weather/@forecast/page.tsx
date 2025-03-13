'use client';
import ForecastInfo from '@/app/components/forecastInfo';
import { selectForecast } from '@/redux/weather/selectors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export interface IHourlyData {
  time: number;
  humidity: number;
}

export default function Forecast() {
  const forecastData = useSelector(selectForecast);
  const [hourlyData, setHourlyData] = useState<IHourlyData[] | null>(null);

  useEffect(() => {
    if (!forecastData) return;
    const formattedData = forecastData.hour.map((hour, index) => ({
      time: index,
      humidity: hour.humidity,
    }));

    setHourlyData(formattedData);
  }, [forecastData]);

  return <ForecastInfo hourlyData={hourlyData} />;
}
