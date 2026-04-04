export default function ContactForm() {
    return (
        <div class="contactContainer">
            <div class="detailsCard">
                <h2>Our Details</h2>
                <ul>
                    <li><strong>Email:</strong> info@forestrywebsite.com</li>
                    <li><strong>Phone:</strong> +1 (123) 456-7890</li>
                    <li><strong>Address:</strong> 123 Forest Road</li>
                    <li><strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</li>
                </ul>
            </div>

            <div class="formCard">
                <form id="contactForm">
                    <div class="formGrid">
                        <label for="name">Full Name:</label>
                        <input type="text" id="name"></input>

                        <label for="email">Email:</label>
                        <input type="text" id="email" placeholder="example@gmail.com"
                            pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}"></input>

                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" placeholder="(123) 456-7890"></input>

                        <label for="message">Message:</label>
                        <textarea></textarea>
                    </div>

                    <div class="contactButtons">
                        <button id="contactSubmit" type="submit">Send Message</button>
                        <button id="contactReset" type="reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}