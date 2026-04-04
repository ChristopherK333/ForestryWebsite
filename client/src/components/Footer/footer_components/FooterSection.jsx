import "./FooterSection.style.css";

export function FooterSection(props) {
  return (
    <div className="footerSectionLayout">
      <h2 className="footerCategory ">{props.title}</h2>
      <ul className="footerList">
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
        <li>{props.item4}</li>
      </ul>
    </div>
  );
}
