import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Appguide from "./pages/Appguide";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useBearStore from "./store/store";

function App() {
  const { isOpen } = useBearStore();

  return (
    <div
      className={`bgGrade scroll-smooth ${
        isOpen && "h-screen overflow-hidden"
      }`}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/appguide" element={<Appguide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Waitlist name="joinus" /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
