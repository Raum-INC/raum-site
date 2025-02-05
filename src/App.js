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
import ListingDetails from "./pages/ListingDetails";
import NotFound from "./pages/NotFound";
import React, { useEffect, useState } from "react";
import SelfHelp from "./components/SelfHelp";
import DashHome from "./pages/DashHome";

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

  // cache campaign parameters
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  // for android type campaigns
  if (params.utm_source) localStorage.setItem("utm_source", params.utm_source);
  if (params.utm_medium) localStorage.setItem("utm_medium", params.utm_medium);
  if (params.utm_campaign)
    localStorage.setItem("utm_campaign", params.utm_campaign);

  // for ios type campaigns
  if (params.mt) localStorage.setItem("mt", params.mt);
  if (params.ct) localStorage.setItem("ct", params.ct);
  if (params.pt) localStorage.setItem("pt", params.pt);

  return (
    <div className="w-full h-auto relative">
      <Modal />
      <Router>
        <div className="relative z-50">
          <Navigation />
          <SelfHelp />
        </div>
        <div onClick={falseNav} className="">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/host" element={<Host />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin-dashboard/*" element={<DashHome />} />
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
