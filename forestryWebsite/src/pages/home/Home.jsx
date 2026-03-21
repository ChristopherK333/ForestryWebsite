import Footer from "../../components/Footer/Footer";
import { MapContainer } from "../../components/HomePage/MapContainer";
import "./Home.style.css";

export function Home() {
  return (
    <div className="homeLayout">
      {/* <h1>Welcome to the Forestry Website!</h1> */}
      <MapContainer />

      <Footer />
    </div>
  );
}
