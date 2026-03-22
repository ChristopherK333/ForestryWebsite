import "./Footer.style.css";
import { FooterSection } from "./footer_components/FooterSection";
import logo from "../../assets/Logo.svg";

export default function Footer() {
  return (
    <div className="footerLayout">
      <div className="logoSection">
        <div className="logoWrapper">
          <img src={logo} alt="Forestry Logo" className="logo" />
        </div>

        <h1>Burnstown</h1>
      </div>

      <div className="linksDiv">
        <FooterSection
          title="Contact Us"
          item1="Email: info@forestrywebsite.com"
          item2="Phone: (123) 456-7890"
          item3="Address: 123 Forest Road"
          item4="Hours: Mon-Fri, 9AM-5PM"
        />
        <FooterSection
          title="Quick Links"
          item1="Home"
          item2="About"
          item3="Education"
          item4="Contact"
        />
        <FooterSection
          title="Follow Us"
          item1="Facebook"
          item2="Twitter"
          item3="Instagram"
          item4="LinkedIn"
        />
      </div>
      <div className="lowerFooter">
        <div className="allRightsSection">
          <p>&copy; 2026 Forestry Website. All rights reserved.</p>
        </div>
        <div className="legalSection">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
