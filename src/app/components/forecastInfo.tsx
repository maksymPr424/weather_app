'use client';

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { IHourlyData } from '../weather/@forecast/page';

interface IForecastInfoProps {
  hourlyData: IHourlyData[] | null;
}

export default function ForecastInfo({ hourlyData }: IForecastInfoProps) {
  return (
    <div className="mx-auto bg-gray-800 p-4 rounded-lg shadow-md min-h-[374px] md:m-0 md:w-full">
      <h2 className="text-lg md:text-xl font-semibold text-center mb-4">
        Humidity Throughout the Day
      </h2>
      <div className="overflow-x-auto">
        {!hourlyData ? (
          <div className="w-[400px] md:w-full">
            <p className="text-sm text-slate-500 text-center">
              *Place not chosen*
            </p>
          </div>
        ) : (
          <div className="w-[400px] md:w-full">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hourlyData}>
                <XAxis
                  dataKey="time"
                  stroke="#8884d8"
                  label={{
                    value: 'Time (h)',
                    position: 'insideBottom',
                    offset: -3,
                  }}
                  height={40}
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
        )}
      </div>
    </div>
  );
}
