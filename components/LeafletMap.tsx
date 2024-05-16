"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix for default marker icon issue in Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LeafletMapProps {
  address: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ address }) => {
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]); // Default position

  useEffect(() => {
    if (address) {
      // Utiliser une API de géocodage pour convertir l'adresse en coordonnées
      const geocodeAddress = async (address: string) => {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        }
      };

      geocodeAddress(address);
    }
  }, [address]);

  return (
    <MapContainer center={position} zoom={13} className='h-[65vh] w-full z-0'> 
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{address || 'Default Location'}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;