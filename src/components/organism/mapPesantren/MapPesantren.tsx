'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Pesantren } from '@/types/pesantren';

interface Props {
  data: Pesantren[];
}

export default function MapPesantren({ data }: Props) {
  return (
    <MapContainer center={[-2.5, 118]} zoom={5} className="h-125 w-full rounded-lg">
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((item) => (
        <Marker key={item.id} position={[item.latitude, item.longitude]}>
          <Popup>
            <strong>{item.name}</strong>
            <p>{item.address}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
