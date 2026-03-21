import "./About.style.css";
import heroImg from "./pictures/gustav-gullstrand-d6kSvT2xZQo-unsplash.jpg";

import WhoWeAre from "./WhoWeAre";
import Mission from "./Mission";
import WhatWeDo from "./WhatWeDo";
import Values from "./Values";

export function About() {
  return (
    <main>
      <div class="hero">
        <img
          src={heroImg}
          alt="Forestry"
          title="Photo by Gustav Gullstrand from Unsplash">
        </img>
      </div>

      <WhoWeAre />

      <WhatWeDo />

      <Mission />
      <Values />

    </main>
  );
}
