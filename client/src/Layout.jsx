import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export function Layout({ loggedInUser, setLoggedInUser }) {
  return (
    <div>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
