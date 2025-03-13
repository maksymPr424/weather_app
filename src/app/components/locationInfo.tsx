import { ILocation } from '@/lib/api';

interface ILocationInfoProps {
  location: ILocation | null;
}

export default function LocationInfo({ location }: ILocationInfoProps) {
  if (!location) {
    return (
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Please, choose a place
        </h2>
        <p className="text-gray-600 sm:text-sm mb-6">
          Their you will be local time
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">
        {location.name}, {location.region && `${location.region},`}{' '}
        {location.country}
      </h2>
      <p className="text-gray-400 sm:text-sm mb-6">
        Local time: {location.localtime.split(' ')[1]}
      </p>
    </div>
  );
}
