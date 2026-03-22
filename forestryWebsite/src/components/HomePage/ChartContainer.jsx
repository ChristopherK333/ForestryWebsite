import "./ChartContainer.style.css";
import chartImage from "../../assets/chart.svg";

export function ChartContainer() {
  return (
    <div className="chart-wrapper">
      <img className="chart" src={chartImage} alt="Chart" />
    </div>
  );
}
