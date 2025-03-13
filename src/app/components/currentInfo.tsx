import { ICurrent } from '@/lib/api';
import Image from 'next/image';
import Weather from '../../../public/images/weather-base.webp';

interface ICurrentInfoProps {
  current: ICurrent | null;
}

export default function CurrentInfo({ current }: ICurrentInfoProps) {
  if (!current) {
    return (
      <div className="max-w-xl mb-4 md:mb-4 mx-auto rounded-lg shadow-lg">
        <div>
          <div className="flex items-center mb-4">
            <Image
              src={Weather}
              alt="Base icon"
              width={100}
              height={100}
              className="w-16 h-16 mr-4"
            />
            <div>
              <p className="text-xl font-medium">Condition</p>
              <p className="text-gray-500">Temperature in °C</p>
              <p className="text-gray-500">Feels like in °C</p>
            </div>
          </div>

          <p className="text-slate-500">Humidity in %</p>
          <p className="text-slate-500">Cloud cover in %</p>
          <p className="text-slate-500">Precipitation in mm</p>
          <p className="text-slate-500">Pressure in mb</p>
          <p className="text-slate-500">Wind in kph</p>
          <p className="text-slate-400 text-sm mt-4">Last updated date</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full md:max-w-max mx-auto rounded-lg shadow-lg">
      <div className="rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Image
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            width={100}
            height={100}
            className="w-16 h-16 mr-4"
          />
          <div>
            <p className="text-xl font-medium">{current.condition.text}</p>
            <p className="text-slate-300">Temperature: {current.temp_c}°C</p>
            <p className="text-slate-300">
              Feels like: {current.feelslike_c}°C
            </p>
          </div>
        </div>

        <p className="text-slate-400">Humidity: {current.humidity}%</p>
        <p className="text-slate-400">Cloud cover: {current.cloud}%</p>
        <p className="text-slate-400">Precipitation: {current.precip_mm} mm</p>
        <p className="text-slate-400">Pressure: {current.peressure_mb} mb</p>
        <p className="text-slate-400">
          Wind: {current.wind_kph} kph {current.wind_dir}
        </p>
        <p className="text-slate-300 text-sm mt-4">
          Last updated: {current.last_updated}
        </p>
      </div>
    </div>
  );
}
