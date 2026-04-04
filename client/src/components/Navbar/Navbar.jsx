import { Link } from "react-router-dom";
import "./Navbar.style.css";

export function Navbar({ loggedInUser, setLoggedInUser }) {
  async function handleLogout() {

    try {
      const response = await fetch("http://localhost:3001/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setLoggedInUser(null);
      }
    }

    catch (err) {
      console.error("Error");
    }

  }

  return (
    <nav className="navbar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/education"><button>Education</button></Link>
      <Link to="/contact"><button>Contact</button></Link>

      <div className="nav-right">
        {loggedInUser ? (
          <>
            <span>Welcome, {loggedInUser}!</span>
            <button onClick={() => handleLogout()}>Logout</button>
          </>
        ) : (
          <>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Sign-up</button></Link>
          </>
        )}
      </div>
    </nav>
  );
}