import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Appguide from "./pages/Appguide";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useBearStore from "./store/store";
import Modal from "./components/Modal";
import ReactGA from "react-ga";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Host from "./pages/Host";
import ContentBlock from "./pages/ContentBlock";
import Hidden from "./pages/Hidden";
import Navigation from "./components/Navigation";
import DashHome from "./pages/DashHome";
import ListingDetails from "./components/listings/ListingDetails";

function App() {
  const { falseNav } = useBearStore();

  const TRACKING_ID = "G-M6PS6FQH1P"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <div>
      <Modal />
      <Router>
        <div className="relative z-50">
          <Navigation />
        </div>
        <div onClick={falseNav} className="">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/host" element={<Host />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin-dashboard" element={<DashHome />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route
              path="/admin-dashboard/product/:productId"
              element={<ListingDetails />}
            />
            {/* <Route path="/appguide" element={<Appguide />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:id" element={<ContentBlock />} />
            <Route path="/hidden" element={<Hidden />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
