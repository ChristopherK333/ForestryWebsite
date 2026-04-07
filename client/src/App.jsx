import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Home } from "./pages/home/Home.jsx";
import { About } from "./pages/about/About.jsx";
import { Education } from "./pages/education/Education.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { Layout } from "./Layout.jsx";
import { Login } from "./pages/login/Login.jsx"
import { Signup } from "./pages/signup/Signup.jsx"

function App() {
  // const [token, setToken] = useState(null);  //groundwork for the login state
  // const logout = () => setToken(null);

  const [loggedInUser, setLoggedInUser] = useState(null);


  return (
    <Router>
      <Routes>
        <Route element={<Layout loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setLoggedInUser = { setLoggedInUser } />}/>
          <Route path="/Signup" element={<Signup /> } /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
