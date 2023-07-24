import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Waitlist from "./components/Waitlist";

function App() {
  return (
    <div className="bgGrade">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Waitlist />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
