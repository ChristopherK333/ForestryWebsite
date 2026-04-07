import React, { useRef } from "react";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.style.css";
import Wildfire from "./Wildfire";
import WMSLegend from "./WeatherLegend";

//Map component using coordinates of Edmonton Alberta Canada as centerpoint. 
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
        {/* Additional map layers or components can be added here */
          <Wildfire />
        }

        {/* Weather layer: Radar precipitation rate for rain [mm/hr]*/}
        <WMSTileLayer
          url="https://geo.weather.gc.ca/geomet?"
          params={{
            layers: 'RADAR_1KM_RRAI',
            format: 'image/png',
            transparent: true,
            opacity: 0.3,
            version: '1.3.0'
          }}
          attribution='Weather data <a href="https://eccc-msc.github.io/open-data/licence/readme_en/">ECCC</a>'
        />

        {/* Weather layer: Radar precipitation rate for snow [cm/hr]*/}
        <WMSTileLayer
          url="https://geo.weather.gc.ca/geomet?"
          params={{
            layers: 'RADAR_1KM_RSNO',
            format: 'image/png',
            transparent: true,
            opacity: 0.3,
            version: '1.3.0'
          }}
          attribution='Weather data <a href="https://eccc-msc.github.io/open-data/licence/readme_en/">ECCC</a>'
        />

        <WMSLegend />

      </MapContainer>
    </div>
  );
};

export default Map;
