import "./Signup.style.css"
import SignupForm from "./SignupForm";
import Footer from "../../components/Footer/Footer"; 

import heroImg from "./pictures/shayd-johnson.jpg"; 

export function Signup() {
    return (
        <main>
            <div class = "hero">
                <img
                    src={heroImg}
                    alt="Forestry"
                    title="Photo by Shayd Johnson from Unsplash">
                </img>

            </div>

        <SignupForm/>
        <Footer/>
        </main>



    )


}