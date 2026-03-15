import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { About } from "./pages/about/About.jsx";
import { Education } from "./pages/education/Education.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { Layout } from "./Layout.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
