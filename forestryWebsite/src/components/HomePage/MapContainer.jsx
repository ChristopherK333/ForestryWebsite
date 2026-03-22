import "./MapContainer.style.css";
import mapImage from "../../assets/map_placeholder.jpg";

export function MapContainer() {
  return (
    <div className="map-wrapper">
      <img className="map" src={mapImage} alt="Map" />
    </div>
  );
}
