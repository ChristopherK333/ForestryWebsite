import * as S from "./Education.style";
import "./Education.style.css";
import heroImg from "./pictures/ilya-mirnyy-BkBnYuAlQ3k-unsplash.jpg";

import Prevention from "./Prevention.jsx";
import BeInformed from "./BeInformed.jsx";
import BePrepared from "./BePrepared.jsx";

export function Education() {
  return (
    <main>
      <div class="edu-hero">
        
        <img
          src={heroImg}
          alt="Fire Fighters"
          title="Photo by Ilya Mirnyy from Unsplash">
        </img>

        <h1>Wildfire Education and Saftey</h1>


        <p>Wild fires are incredibly dangerous and while they seem like a distant catastophe, prevention starts with you.</p>

        <p>While often starting small, wild fires can grow quickly. They ignite brush, trees, homes and buildings and the
          high heat can often throw burning debris up to two kilometers ahead of a wildfire. On average in Canada, wildfires
          burn 2.5 million ha/year. Much of the country is at risk, especially during April to September and during the heat
          summers and heat waves. It's important then to know how to prevent wildfires, to be informed on fire saftey and fire
          bans and to be prepared.
        </p>

      </div>

      <div class="edu-card-container">
        <Prevention />

        <BeInformed />

        <BePrepared />

      </div>

    </main>


  );
}
