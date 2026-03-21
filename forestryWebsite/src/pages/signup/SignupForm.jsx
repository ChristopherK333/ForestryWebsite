export default function SignupForm() {
    return (
        <div className="loginContainer">
            <div className="loginFormCard">

            
            <form id="loginFormCard">
                <div className="loginFormGrid">

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="example@gmail.com" required></input>

                <label for="password">Password</label>
                <input type="password" id="password" minLength="6" required></input>

                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword"  minLength="6" required></input>

                <label for="name">Username</label>
                <input type="text" id="name" required></input>

                <label for="firstName">First Name</label>
                <input type="text" id="firstName" required></input>

                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" required></input>

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" placeholder="(123) 456-7890" pattern="^(\+?1\s?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$" required></input>

                <label for="address">Address Line 1</label>
                <input type="text" id="address" required></input>

                <label for="address2">Address Line 2</label>
                <input type="text" id="address2"></input>

                <label for="city">City</label>
                <input type="text" id="city" required></input>

                <label for="province">Province</label>
                <input type="text" id="province" required></input>

                <label for="postalCode">Zip/Postal Code</label>
                <input type="text" id="postalCode" placeholder="A1A 1A1" pattern="^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$" required></input>

                </div>


            <div class="loginButtons">
                <button id="loginSubmit" type="submit">Sign Up</button>

            </div>

            
            </form>
            </div>


        </div>



    );


}