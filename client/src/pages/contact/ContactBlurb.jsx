import mailImage from "./pictures/mail-icon.jpg"

export default function ContactBlurb() {
    return (
        <div class="contactBlurb">
            <div class="mailIcon">
                <img src={mailImage} alt="Mail"
                    title="Illustration by Round Icons from Unsplash">
                </img>
            </div>

            <div class="blurbInfo">
                <h1>Contact Us</h1>
                <p>Get in touch with our team for more information about our mission and goals
                    using the contact form below. We are happy to answer questions and concerns
                    that could aid us in providing better fire safety information and services!
                </p>
            </div>
        </div>
    )
}