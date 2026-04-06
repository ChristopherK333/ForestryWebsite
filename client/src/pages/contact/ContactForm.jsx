import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactMessage, setContactMessage] = useState("");

    const [message, setMessage] = useState("");

    async function handleContact(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:3001/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                fullName: contactName,
                email: contactEmail,
                phone: contactPhone,
                message: contactMessage
            }),
        });

        const data = await response.json();
        setMessage(data.message);
    
    }

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
                <form id="contactForm" onSubmit={handleContact} className="stack">
                    <div class="formGrid">
                        <label for="name">Full Name:</label>
                        <input type="text"
                            id="name"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}></input>

                        <label for="email">Email:</label>
                        <input type="text"
                            id="email"
                            placeholder="example@gmail.com"
                            pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}></input>

                        <label for="phone">Phone Number:</label>
                        <input type="tel"
                            id="phone"
                            placeholder="(123) 456-7890"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}></input>

                        <label for="message">Message:</label>
                        <textarea
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}></textarea>
                    </div>

                    <div class="contactButtons">
                        <button id="contactSubmit" type="submit">Send Message</button>
                        <button id="contactReset" type="reset">Reset</button>
                    </div>
                </form>

                <p className="message">{message}</p>

            </div>
        </div>
    )
}