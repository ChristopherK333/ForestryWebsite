import heroImg from "./pictures/margaret-giatras-V-CjxayQakE-unsplash.jpg";

export default function WhatWeDo() {
  return (
    <div className="containerReverse">
      <div className="cardPic">
        <img
          src={heroImg}
          alt="Forestry"
          title="Photo by Margaret Giatras from Unsplash"
        ></img>
      </div>

      <div className="cardInfo">
        <h1>What We Do</h1>
        <p>
          Fire Watch offers a tool that displays a real-time wildfire map, as
          well as providing information that helps educate the masses to prevent
          wildfires from happening in the first place.
        </p>

        <p>
          By making wildfire data easily accessible, we hope to raise awareness
          of wildfire prevention and safety.
        </p>
      </div>
    </div>
  );
}
