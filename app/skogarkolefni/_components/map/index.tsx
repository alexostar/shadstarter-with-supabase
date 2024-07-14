'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, LatLngTuple } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Icon } from 'leaflet';

import { Skogarkolefni } from '@/types/collection';

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
  places: Skogarkolefni[];
}

const defaults = {
  zoom: 6,
};

const yellowIcon = new Icon({
  iconUrl: '/yellow-icons8-map-marker-52.png',
  iconSize: [35, 35], // size of the icon
  iconAnchor: [18, 35], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -36], // point from which the popup should open relative to the iconAnchor
});

const greenIcon = new Icon({
  iconUrl: '/green-icons8-map-marker-52.png',
  iconSize: [35, 35], // size of the icon
  iconAnchor: [18, 35], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -36], // point from which the popup should open relative to the iconAnchor
});

const Map = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix } = Map;
  const places = Map.places;

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='Google Maps Satellite'
        url='https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
      />
      {places.map((place) => (
        <div key={place.id}>
          {place.certified === true ? (
            <Marker position={place.latlng} draggable={false} icon={greenIcon}>
              <div className='h-[200px] w-[300px]'>
                <Popup>
                  <ul className='mb-2'>
                    <li className='font-bold'>{place.name}</li>
                    {place.certified !== null && (
                      <li className=''>
                        Certified: {place.certified.toString()}
                      </li>
                    )}
                  </ul>
                  <ul>
                    <li>Company: {place.company}</li>
                    {place.year !== null && <li>Year: {place.year}</li>}
                    {place.size !== null && <li>Size (ha): {place.size}</li>}
                    {place.capture !== null && (
                      <li>CO2 (ton): {place.capture}</li>
                    )}
                    {place.species !== null && (
                      <li>Species: {place.species}</li>
                    )}
                    {place.albedo_color !== null && (
                      <li>Forest changes albedo? {place.albedo_color}</li>
                    )}
                    {place.albedo_snow !== null && (
                      <li>
                        Snow affects albedo? {place.albedo_snow.toString()}
                      </li>
                    )}
                  </ul>
                  {place.description !== null && (
                    <p>Additional info: {place.description}</p>
                  )}
                </Popup>
              </div>
            </Marker>
          ) : (
            <Marker position={place.latlng} draggable={false} icon={yellowIcon}>
              <div className='h-[200px] w-[300px]'>
                <Popup>
                  <ul className='mb-2'>
                    <li className='font-bold'>{place.name}</li>
                    {place.certified !== null && (
                      <li className=''>
                        Certified: {place.certified.toString()}
                      </li>
                    )}
                  </ul>
                  <ul>
                    <li>Company: {place.company}</li>
                    {place.year !== null && <li>Year: {place.year}</li>}
                    {place.size !== null && <li>Size (ha): {place.size}</li>}
                    {place.capture !== null && (
                      <li>CO2 (ton): {place.capture}</li>
                    )}
                    {place.species !== null && (
                      <li>Species: {place.species}</li>
                    )}
                    {place.albedo_color !== null && (
                      <li>Color affects albedo? {place.albedo_color}</li>
                    )}
                    {place.albedo_snow !== null && (
                      <li>
                        Snow affects albedo? {place.albedo_snow.toString()}
                      </li>
                    )}
                  </ul>
                  {place.description !== null && (
                    <p>Additional info: {place.description}</p>
                  )}
                </Popup>
              </div>
            </Marker>
          )}
        </div>
      ))}
    </MapContainer>
  );
};

export default Map;

{
  /* OTHER TILE LAYERS
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <TileLayer
        attribution='Google Maps'
        url='https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
      />
      */
}
