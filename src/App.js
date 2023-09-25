import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Waitlist from "./components/Waitlist";
import { useState } from "react";
import Appguide from "./pages/Appguide";

function App() {
  const [nav, setNav] = useState(false);

  return (
    <div className="bgGrade scroll-smooth">
      <Router>
        <Navbar nav={nav} setNav={setNav} />
        <Routes>
          <Route path="/" element={<Homepage nav={nav} setNav={setNav} />} />
          <Route
            path="/appguide"
            element={<Appguide nav={nav} setNav={setNav} />}
          />
          <Route path="/about" element={<About nav={nav} setNav={setNav} />} />
          <Route
            path="/contact"
            element={<Contact nav={nav} setNav={setNav} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
