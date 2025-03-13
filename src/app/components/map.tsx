/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState, useRef } from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ICoordinates } from '@/lib/api';
import { getWeatherData } from '@/redux/weather/operations';
import { useAppDispatch } from '@/redux/hooks';

export default function Map() {
  const dispatch = useAppDispatch();
  const mapRef = useRef<L.Map | null>(null);
  const [marker, setMarker] = useState<L.Marker | null>(null);

  const handleGetWeather = async (coordinates: ICoordinates) => {
    await dispatch(getWeatherData(coordinates));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView([52.2298, 21.0118], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(mapRef.current);
      }

      const customIcon = L.icon({
        iconUrl: '/images/marker.png',
        iconSize: [32, 42],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const handleClick = (e: L.LeafletMouseEvent): void => {
        const { lat, lng } = e.latlng;

        if (marker) {
          marker.remove();
        }

        const newMarker = L.marker([lat, lng], { icon: customIcon })
          .addTo(mapRef.current as L.Map)
          .bindPopup(
            `Aktualne współrzędne: ${lat.toFixed(5)}, ${lng.toFixed(5)}`,
          )
          .openPopup();

        setMarker(newMarker);
        handleGetWeather({ lat, lng });
      };

      mapRef.current.on('click', handleClick);

      return () => {
        if (mapRef.current) {
          mapRef.current.off('click', handleClick);
        }
      };
    }
  }, [marker]);

  return (
    <div>
      <div>
        <div id="map" className="w-full h-[450px] xl:h-[600px]"></div>
      </div>
    </div>
  );
}
