'use client';
import { selectForecast } from '@/redux/weather/selectors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface IHourlyData {
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

  if (!hourlyData) {
    return <div>Nema</div>;
  }

  return (
    <div className="mx-auto bg-gray-900 py-4 px-2 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-center mb-4">
        Humidity Throughout the Day
      </h2>
      <div className="max-w-[400px] overflow-x-auto">
        <ResponsiveContainer className="bg-gray-900" width="200%" height={300}>
          <LineChart data={hourlyData}>
            <XAxis
              dataKey="time"
              stroke="#8884d8"
              label={{
                value: 'Time (h)',
                position: 'insideBottom',
                offset: -5,
              }}
            />
            <YAxis
              stroke="#82ca9d"
              label={{
                value: 'Humidity (%)',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#4F46E5"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
