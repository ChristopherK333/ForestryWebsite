import "./GraphContainer.style.css";
import graphImage from "../../assets/bar-fill-vertical.svg";

export function GraphContainer() {
  return (
    <div className="graph-wrapper">
      <img className="graph" src={graphImage} alt="Graph" />
    </div>
  );
}
