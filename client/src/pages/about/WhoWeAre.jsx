import heroImg from "./pictures/hannah-busing-Zyx1bK9mqmA-unsplash.jpg";

export default function WhoWeAre() {
    return (
        <div className="container">
            <div className="cardPic">
                <img
                    src={heroImg}
                    alt="Forestry"
                    title="Photo by Hannah Busing from Unsplash">
                </img>
            </div>

            <div className="cardInfo">
                <h1>Who We Are</h1>
                <p>
                    We are a team of five, dedicated to building a web-based platform
                    that focuses on providing wildfire information. Our main goal is to
                    help forestry management services in addition to the public by
                    providing them with a tool that offers valuable wildfire information.
                </p>
            </div>

        </div>
    );
}