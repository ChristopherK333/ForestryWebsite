import "./MapContainer.style.css";
import mapImage from "../../assets/map_placeholder.jpg";
import { useEffect } from "react";

import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js";

export function MapContainer() {
  // useEffect(() => {
  //   const map = new Map({
  //     basemap: "topo-vector",
  //   });
  // }, []);
  useEffect(() => {
    const map = new Map({
      basemap: "topo-vector",
    });

    let view = new MapView({
      map: map,
      container: "MapApp",
    });

    view.center = [-113.4937, 53.5462];
    view.zoom = 12;
  }, []);

  return (
    <div className="map-wrapper">
      <div
        id="MapApp"
        className="map-container"
        style={{ height: "120vh" }}
      ></div>
    </div>
  );
}
