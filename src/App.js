import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Appguide from "./pages/Appguide";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useBearStore from "./store/store";
import Modal from "./components/Modal";
import ReactGA from "react-ga";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";

function App() {
  const { isOpen } = useBearStore();

  const TRACKING_ID = "G-M6PS6FQH1P"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <div
      className={`bgGrade scroll-smooth ${
        isOpen && "h-screen overflow-hidden"
      }`}
    >
      {/* modal */}
      <Modal />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          {/* <Route path="/appguide" element={<Appguide />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
