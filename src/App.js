import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
import NotFound from "./pages/NotFound";
import React, { useEffect, useState } from "react";

function ContentWrapper({ children }) {
  const [isContentAvailable, setIsContentAvailable] = useState(false);
  const [contentData, setContentData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          `https://cp.raum.africa/store/content-block/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.content) {
            setIsContentAvailable(true);
            setContentData(data.content);
          } else {
            navigate("/not-found");
          }
        } else {
          navigate("/not-found");
        }
      } catch (error) {
        navigate("/not-found");
      }
    };

    fetchContent();
  }, [id, navigate]);

  if (!isContentAvailable) {
    return null; // Or a loading spinner, etc.
  }

  return React.cloneElement(children, { contentData });
}

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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hidden" element={<Hidden />} />
            <Route
              path="/:id"
              element={
                <ContentWrapper>
                  <ContentBlock />
                </ContentWrapper>
              }
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
