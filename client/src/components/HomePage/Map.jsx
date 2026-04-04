import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.style.css";

const Map = () => {
  const mapRef = useRef(null);
  const latitude = 53.5462;
  const longitude = -113.4937;

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        ref={mapRef}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Additional map layers or components can be added here */}
      </MapContainer>
    </div>
  );
};

export default Map;
