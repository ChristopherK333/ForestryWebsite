//========================================================================================================================
import { useEffect, useRef, useState } from "react";
import Plotly from "plotly.js-dist-min";
import "./ChartContainer.style.css";
//========================================================================================================================


//Here we get components and setup the colormap.
//========================================================================================================================
export function ChartContainer() {
  const chartRef = useRef(null);
  const [fires, setFires] = useState([]);
  const [graphType, setGraphType] = useState("status"); // 'status' or 'cause'

  const colorMap = {
    "Out of Control": "#ff4d4d",
    "Being Held": "#ffa500",
    "Under Control": "#4caf50",
    "Unknown": "#888",
  };
//========================================================================================================================



//Here we setup and get the api data.
//========================================================================================================================
  useEffect(() => {
    const fetchFires = async () => {
      try {
        const res = await fetch(
          "https://services.arcgis.com/Eb8P5h4CJk8utIBz/ArcGIS/rest/services/Active_Wildfires_/FeatureServer/0/query?where=1=1&outFields=*&returnGeometry=false&f=json"
        );
        const data = await res.json();
        setFires(data.features || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFires();
  }, []);
//========================================================================================================================


//Here is where we render the charts.
//========================================================================================================================
  useEffect(() => {
    if (!chartRef.current || fires.length === 0) return;

    let data = [];
    let layout = {
      paper_bgcolor: "#1e1e1e",
      plot_bgcolor: "#1e1e1e",
      font: { color: "#ffffff" },
      margin: { t: 50, l: 50, r: 20, b: 50 },
    };

    //Pie chart for Fire Status
    //---------------------------------------------------------------------------------------------------
    if (graphType === "status") {
      const counts = {};
      fires.forEach((fire) => {
        const status = fire.attributes.FIRE_STATUS || "Unknown";
        counts[status] = (counts[status] || 0) + 1;
      });

      const labels = Object.keys(counts);
      const values = Object.values(counts);

      data = [
        {
          labels,
          values,
          type: "pie",
          hole: 0.4,
          marker: { colors: labels.map((l) => colorMap[l] || "#888") },
          textinfo: "label+percent",
          hoverinfo: "label+value+percent",
        },
      ];

      layout.title = { text: "Wildfires by Status", font: { size: 20 } };
    }
    //---------------------------------------------------------------------------------------------------



    //Pie chart for Fire Causes
    //---------------------------------------------------------------------------------------------------
    if (graphType === "cause") {
      const counts = {};
      fires.forEach((fire) => {
        const cause = fire.attributes.GENERAL_CAUSE || "Unknown";
        counts[cause] = (counts[cause] || 0) + 1;
      });

      const labels = Object.keys(counts);
      const values = Object.values(counts);

      data = [
        {
          labels,
          values,
          type: "pie",
          hole: 0.4,
          marker: {
            colors: labels.map((label) => {
              if (label === "Lightning") return "#4caf50";
              if (label === "Human") return "#ff4d4d";
              if (label === "Under Investigation") return "#ffa500";
              return "#888";
            }),
          },
          textinfo: "label+percent",
          hoverinfo: "label+value+percent",
        },
      ];

      layout.title = { text: "Wildfires by Cause", font: { size: 20 } };
    }
    //---------------------------------------------------------------------------------------------------

    const config = { responsive: true, displayModeBar: false };
    Plotly.react(chartRef.current, data, layout, config);
  }, [fires, graphType]);
//========================================================================================================================



//========================================================================================================================
  return (
    <div className="chart-wrapper">
      <select
        className="graph-selector"
        value={graphType}
        onChange={(e) => setGraphType(e.target.value)}
      >
        <option value="status">Fire Status</option>
        <option value="cause">Fire Causes</option>
      </select>
      <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
    </div>
  );
}
//========================================================================================================================