import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setLoggedInUser }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setLoggedInUser(data.username);
      navigate("/");
    }

    else {
      setMessage(data.message);
    }
  }

  return (
    <div className="loginContainer">
      <div className="loginFormCard">
        <form id="loginForm" onSubmit={handleLogin} className="stack">
          <div className="loginFormGrid">


            <div className="formGroup">
              <label htmlFor="name">Username:</label>
              <input
                type="text"
                placeholder="Username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>


          </div>

          <div className="loginButtons">
            <button id="loginSubmit" type="submit">Login</button>
          </div>

        </form>

        <p className="message">{message}</p>

      </div>
    </div>
  );
}