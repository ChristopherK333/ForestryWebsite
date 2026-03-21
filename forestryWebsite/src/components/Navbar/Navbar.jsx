import { Link } from "react-router-dom";
import "./Navbar.style.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/education"><button>Education</button></Link>
      <Link to="/contact"><button>Contact</button></Link>

      <div className="nav-right">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Sign-up</button></Link>
      </div>
    </nav>
  );
}