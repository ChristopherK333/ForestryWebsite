import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm({ setLoggedInUser }) {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [registerEmail, setRegisterEmail] = useState("");

    const [registerFirst, setRegisterFirst] = useState("");
    const [registerLast, setRegisterLast] = useState("");

    const [registerPhone, setRegisterPhone] = useState("");
    const [registerAddress, setRegisterAddress] = useState("");

    const [registerCity, setRegisterCity] = useState("");
    const [registerProvince, setRegisterProvince] = useState("");
    const [registerPostal, setRegisterPostal] = useState("");

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:3001/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                username: registerUsername,
                password: registerPassword,
                email: registerEmail,
                first: registerFirst,
                last: registerLast,
                phone: registerPhone,
                address: registerAddress,
                city: registerCity,
                province: registerProvince,
                postalCode: registerPostal
            }),
        });

        const data = await response.json();

        if (response.ok) {
            navigate("/login");
        }

        else {
            setMessage(data.message);
        }
    }

    return (
        <div className="loginContainer">
            <div className="loginFormCard">
                <form id="loginFormCard" onSubmit={handleRegister} className="stack">
                    <div className="loginFormGrid">
                        <div className="formGroup">
                            <label htmlFor="email">Email:</label>
                            <input type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                value={registerEmail}
                                onChange={(e) => setRegisterEmail(e.target.value)}
                                required></input>
                        </div>

                        <div className="formGroup">
                            <label for="password">Password:</label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={registerPassword}
                                onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                        </div>

                        <div className="formGroup">
                            <label for="confirmPassword">Confirm Password:</label>
                            <input type="password" id="password" minLength="6" required></input>
                        </div>

                        <div className="formGroup">
                            <label for="name">Username:</label>
                            <input
                                type="text"
                                placeholder="Username"
                                value={registerUsername}
                                onChange={(e) => setRegisterUsername(e.target.value)}
                            />
                        </div>

                        <div className="formGroup">
                            <label for="firstName">First Name:</label>
                            <input type="text"
                                id="firstName"
                                value={registerFirst}
                                onChange={(e) => setRegisterFirst(e.target.value)}
                                required></input>
                        </div>

                        <div className="formGroup">
                            <label for="lastName">Last Name:</label>
                            <input type="text"
                                id="lastName"
                                value={registerLast}
                                onChange={(e) => setRegisterLast(e.target.value)}
                                required></input>
                        </div>

                        <div className="formGroup">
                            <label for="phone">Phone Number:</label>
                            <input type="tel"
                                id="phone"
                                placeholder="(123) 456-7890"
                                pattern="^(\+?1\s?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$"
                                value={registerPhone}
                                onChange={(e) => setRegisterPhone(e.target.value)}
                                required></input>
                        </div>

                        <div className="formGroup">
                            <label for="address">Address Line 1:</label>
                            <input type="text"
                                id="address"
                                value={registerAddress}
                                onChange={(e) => setRegisterAddress(e.target.value)}
                                required></input>
                        </div>

                        <div className="formGroup">
                            <label for="address2">Address Line 2:</label>
                            <input type="text" id="address2"></input>
                        </div>

                        <div className="formGroup">
                            <label for="city">City:</label>
                            <input type="text"
                                id="city"
                                value={registerCity}
                                onChange={(e) => setRegisterCity(e.target.value)}
                                required></input>
                        </div>

                        <div className="formGroup">
                            <label for="province">Province:</label>
                            <input type="text"
                                id="province"
                                value={registerProvince}
                                onChange={(e) => setRegisterProvince(e.target.value)}
                                required></input>
                        </div>

                        <div className="formGroup">
                            <label for="postalCode">Zip/Postal Code:</label>
                            <input type="text"
                                id="postalCode"
                                placeholder="A1A 1A1"
                                pattern="^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$"
                                value={registerPostal}
                                onChange={(e) => setRegisterPostal(e.target.value)}
                                required></input>
                        </div>
                    </div>

                    <div className="loginButtons">
                        <button id="loginSubmit" type="submit">Sign Up</button>

                    </div>
                </form>

                <p className="message">{message}</p>
            </div>
        </div>
    );
}