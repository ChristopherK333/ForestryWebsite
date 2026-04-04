export default function LoginForm() {
  return (
    <div className="loginContainer">
      <div className="loginFormCard">
        <form id="loginForm">
          <div className="loginFormGrid">


            <div className="formGroup">
            <label htmlFor="name">Username:</label>
            <input type="text" id="name" required />
            </div>

            <div className="formGroup">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" minLength="6" required />
            </div>


          </div>

          <div className="loginButtons">
            <button id="loginSubmit" type="submit">Login</button>
          </div>

        </form>
      </div>
    </div>
  );
}