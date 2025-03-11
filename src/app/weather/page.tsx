'use client';

import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Coordinates, getWeatherData } from '@/lib/api';

export default function Weather() {
  const mapRef = useRef<L.Map | null>(null);
  const [marker, setMarker] = useState<L.Marker | null>(null);
  const [weatherData, setWeatherData] = useState({});

  const handleGetWeather = async (coordinates: Coordinates): Promise<void> => {
    const fetchedWeatherData = await getWeatherData(coordinates);

    if (Object.keys(fetchedWeatherData).length === 0) {
      return;
    }
    console.log(fetchedWeatherData);

    setWeatherData(fetchedWeatherData);
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
        <div id="map" style={{ width: '100%', height: '500px' }}></div>
        {Object.keys(weatherData).length === 0 ? <p>Nema</p> : <p>jest</p>}
      </div>
    </div>
  );
}
