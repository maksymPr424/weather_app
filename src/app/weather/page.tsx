'use client';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import L from 'leaflet';
import customMarkerIcon from '../../../public/images/marker.png';

const myIcon = new L.Icon({
  iconUrl: customMarkerIcon.src,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function Weather() {
  const [position, setPosition] = useState<[number, number] | null>([
    50.4501, 30.5234,
  ]); // Київ за замовчуванням

  function LocationMarker() {
    useMapEvents({
      click(e) {
        console.log([e.latlng.lat, e.latlng.lng]);

        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return position ? (
      <Marker position={position} icon={myIcon}>
        <Popup>
          📍 Ви вибрали точку: {position[0].toFixed(4)},{' '}
          {position[1].toFixed(4)}
        </Popup>
      </Marker>
    ) : null;
  }

  return (
    <div className="w-[500px] h-[500px]">
      <MapContainer
        center={position!}
        zoom={6}
        className="h-full w-full rounded-lg shadow-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
