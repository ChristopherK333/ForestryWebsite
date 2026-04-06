import { useEffect, useState } from "react";
import { CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


// Helper function to convert ArcGIS coords → lat/lng
const convertToLatLng = (x, y) => {
  const lng = (x / 20037508.34) * 180;
  let lat = (y / 20037508.34) * 180;

  lat =
    (180 / Math.PI) *
    (2 * Math.atan(Math.exp((lat * Math.PI) / 180)) - Math.PI / 2);

  return [lat, lng];
};

// Color based on fire status
const getColor = (status) => {
  switch (status) {
    case "Out of Control":
      return "red";
    case "Being Held":
      return "orange";
    case "Under Control":
      return "green";
    default:
      return "gray";
  }
};

const Wildfire = () => {
  const [fires, setFires] = useState([]);

  useEffect(() => {
    const fetchFires = async () => {
      try {
        const res = await fetch(
          "https://services.arcgis.com/Eb8P5h4CJk8utIBz/ArcGIS/rest/services/Active_Wildfires_/FeatureServer/0/query?where=1=1&outFields=*&returnGeometry=true&f=json"  //this is open source so we don't need an API key, wyatt found it.
        );
        const data = await res.json();  //this converts the response to a json. 

        setFires(data.features || []);
      } catch (err) {
        console.error("Error fetching wildfire data:", err);
      }
    };

    fetchFires();
  }, []);

  return (
    <>
      {fires.map((fire) => {
        if (!fire.geometry) return null;

        const [lat, lng] = convertToLatLng(
          fire.geometry.x,
          fire.geometry.y
        );

        return (
          <CircleMarker
            key={fire.attributes.OBJECTID}
            center={[lat, lng]}
            radius={6}
            pathOptions={{
              color: getColor(fire.attributes.FIRE_STATUS),
            }}
          > 
            <Popup>  
              🔥 <strong>{fire.attributes.LABEL}</strong> <br /> 
              Status: {fire.attributes.FIRE_STATUS}
            </Popup>
          </CircleMarker>
        );
      })}
    </>
  );
};

export default Wildfire;