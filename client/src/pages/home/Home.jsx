import Footer from "../../components/Footer/Footer";
import { GraphContainer } from "../../components/HomePage/GraphContainer";
import { ChartContainer } from "../../components/HomePage/ChartContainer";
import "./Home.style.css";
import Map from "../../components/HomePage/Map";

export function Home() {
  return (
    <main className="#">
      <section className="homeLayout">
        <div className="map-container">
          <Map />
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
