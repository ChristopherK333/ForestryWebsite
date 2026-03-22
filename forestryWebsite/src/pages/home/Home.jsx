import Footer from "../../components/Footer/Footer";
import { MapContainer } from "../../components/HomePage/MapContainer";
import { GraphContainer } from "../../components/HomePage/GraphContainer";
import { ChartContainer } from "../../components/HomePage/ChartContainer";
import "./Home.style.css";

export function Home() {
  return (
    <main className="#">
      <section className="homeLayout">
        <div className="map-container">
          <MapContainer />
        </div>
        <div className="chart-container">
          <ChartContainer />
        </div>
        <div className="graph-container">
          <GraphContainer />
        </div>
      </section>

      <Footer />
    </main>
  );
}
