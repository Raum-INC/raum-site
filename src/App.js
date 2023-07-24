import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Waitlist from "./components/Waitlist";
import { useState } from "react";

function App() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bgGrade">
      <Router>
        <Navbar nav={nav} setNav={setNav} />
        <Routes>
          <Route path="/" element={<Homepage nav={nav} setNav={setNav} />} />
          <Route path="/about" element={<About nav={nav} setNav={setNav} />} />
          <Route
            path="/contact"
            element={<Contact nav={nav} setNav={setNav} />}
          />
        </Routes>
        <Waitlist />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
