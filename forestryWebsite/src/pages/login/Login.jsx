import "./Login.style.css"
import LoginForm from "./LoginForm";
import Footer from "../../components/Footer/Footer";
import heroImg from "./pictures/shayd-johnson.jpg"; 



export function Login() {
    return (
        <main>
            <div class="hero">
                        <img
                    src={heroImg}
                    alt="Forestry"
                    title="Photo by Shayd Johnson from Unsplash">
                    </img>

            </div>

        <LoginForm/>
        <Footer/>

        </main>







 

    );




}