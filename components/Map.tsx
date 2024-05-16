"use client";

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  position: [number, number] | null;
  address: string;
}

const DynamicMap = dynamic(
  () => import('./DynamicLeafletMap'),
  { ssr: false }
);

const Map: React.FC<MapProps> = ({ position, address }) => {
  return (
    <div className="-z-50">
      <DynamicMap position={position} address={address} />
    </div>
  );
};

export default Map;
