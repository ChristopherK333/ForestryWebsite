import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

function WMSLegend() {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        // Create a new legend control
        const legend = L.control({ position: 'bottomleft' });

        legend.onAdd = () => {
            const div = L.DomUtil.create('div', 'info legend');
            const legendUrl = "https://geo.weather.gc.ca/geomet?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=RADAR_1KM_RRAI&format=image/png";
            div.innerHTML = `<img src="${legendUrl}" alt="legend" width="100px"/>`;
            return div;
        };

        legend.addTo(map);

        // Clean up on unmount
        return () => {
            legend.remove();
        };
    }, [map]);

    return null;
}

export default WMSLegend;