//========================================================================================================================
import { useEffect, useRef, useState } from "react";
import Plotly from "plotly.js-dist-min";
import "./GraphContainer.style.css";
//========================================================================================================================


//Here we set up the components and get the data from the api.
//========================================================================================================================
export function GraphContainer() {
  const chartRef = useRef(null);
  const [fires, setFires] = useState([]);
  const [graphType, setGraphType] = useState("size"); // 'size', 'time', 'top'

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


//Here we render the individual charts
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

    const config = { responsive: true, displayModeBar: false };

    //Fire Size Distribution
    //---------------------------------------------------------------------------------------------------
    if (graphType === "size") {
      const sizes = fires.map((f) => f.attributes.AREA_ESTIMATE || 1);
      data = [
        {
          x: sizes,
          type: "histogram",
          marker: { color: "#4caf50" },
        },
      ];
      layout.title = { text: "Fire Size Distribution (ha)", font: { size: 20 } };
      layout.yaxis = { type: "log", title: "Count", gridcolor: "#444" };
      layout.xaxis = { title: "Size (ha)" };
    }
    //---------------------------------------------------------------------------------------------------



    //Fires Over Time
    //---------------------------------------------------------------------------------------------------
    else if (graphType === "time") {
      const countsByDate = {};
      fires.forEach((fire) => {
        const rawDate = fire.attributes.FIRE_STATUS_DATE;
        if (!rawDate) return;
        const date = new Date(rawDate).toLocaleDateString();
        countsByDate[date] = (countsByDate[date] || 0) + 1;
      });
      const sortedDates = Object.keys(countsByDate).sort(
        (a, b) => new Date(a) - new Date(b)
      );
      data = [
        {
          x: sortedDates,
          y: sortedDates.map((d) => countsByDate[d]),
          type: "scatter",
          mode: "lines+markers",
          line: { shape: "spline", color: "#ff4d4d" },
        },
      ];
      layout.title = { text: "Fires Over Time", font: { size: 20 } };
      layout.yaxis = { title: "Count", gridcolor: "#444" };
      layout.xaxis = { title: "Date", tickangle: -30 };
    }
    //---------------------------------------------------------------------------------------------------


    //Top 10 Largest Fires
    //---------------------------------------------------------------------------------------------------
    else if (graphType === "top") {
      const topFires = [...fires]
        .sort((a, b) => (b.attributes.AREA_ESTIMATE || 0) - (a.attributes.AREA_ESTIMATE || 0))
        .slice(0, 10);
      data = [
        {
          x: topFires.map((_, i) => `#${i + 1}`),
          y: topFires.map((f) => f.attributes.AREA_ESTIMATE || 0),
          type: "bar",
          text: topFires.map((f) => f.attributes.LABEL),
          hovertemplate: "%{text}<br>Size: %{y} ha<extra></extra>",
          marker: { color: "#ffa500" },
        },
      ];
      layout.title = { text: "Top 10 Largest Fires", font: { size: 20 } };
      layout.yaxis = { title: "Size (ha)", gridcolor: "#444" };
      layout.xaxis = { title: "Rank" };
    }
    //---------------------------------------------------------------------------------------------------

    Plotly.react(chartRef.current, data, layout, config);
  }, [fires, graphType]);
//========================================================================================================================


//This is where we return it for rendering and add the dropodwn menu.
//========================================================================================================================
  return (
    <div className="graph-wrapper">
      <select
        className="graph-selector"
        value={graphType}
        onChange={(e) => setGraphType(e.target.value)}
      >
        <option value="size">Fire Size Distribution</option>
        <option value="time">Fires Over Time</option>
        <option value="top">Largest Fires</option>
      </select>
      <div ref={chartRef} style={{ width: "100%", height: "450px" }} />
    </div>
  );
}
//========================================================================================================================