'use client';

import LocationInfo from '@/app/components/locationInfo';
import { ILocation } from '@/lib/api';
import { selectIsInitialData, selectLocation } from '@/redux/weather/selectors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Location() {
  const [location, setLocation] = useState<ILocation | null>(null);

  const locationData = useSelector(selectLocation);
  const isInitialData = useSelector(selectIsInitialData);

  useEffect(() => {
    if (isInitialData) {
      setLocation(null);
      return;
    }

    setLocation(locationData);
  }, [isInitialData, locationData]);

  return <LocationInfo location={location} />;
}
