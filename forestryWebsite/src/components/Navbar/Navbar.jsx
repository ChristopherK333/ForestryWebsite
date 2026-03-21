import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/education">
        <button>Education</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
         <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign-up</button>
      </Link>
    </nav>
  );
}
