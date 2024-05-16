"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export interface LeafletMapProps {
  position: [number, number] | null;
  address: string;
}

const RecenterMap: React.FC<{ position: [number, number] | null }> = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);

  return null;
};

const LeafletMap: React.FC<LeafletMapProps> = ({ position, address }) => {
  return (
    <MapContainer center={position || [51.505, -0.09]} zoom={13} className='h-[80vh] w-full z-0'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && (
        <>
          <Marker position={position}>
            <Popup>{address || 'Default Location'}</Popup>
          </Marker>
          <RecenterMap position={position} />
        </>
      )}
    </MapContainer>
  );
};

export default LeafletMap;