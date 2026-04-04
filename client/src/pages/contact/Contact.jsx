import "./Contact.style.css";
import heroImage from "./pictures/erik-morales-0EYWRpNZ-Qs-unsplash.jpg"
import ContactBlurb from "./ContactBlurb";
import Footer from "../../components/Footer/Footer";
import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <main>
      <div class="banner">
        <img src={heroImage} alt="Fighting fires."
          title="Photo by Erik Morales from Unsplash">
        </img>
      </div>

      <ContactBlurb/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
