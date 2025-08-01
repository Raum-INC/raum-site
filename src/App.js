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
import Navigation from "./components/Navigation";
import ListingDetails from "./pages/ListingDetails";
import NotFound from "./pages/NotFound";
import React, { useEffect, useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import SelfHelp from "./components/SelfHelp";
import DashFilter from "./pages/DashFilter";
import ReserveBooking from "./pages/ReserveBooking";
import DashResult from "./pages/DashResult";
import { AnimatePresence } from "framer-motion";
import InvestPage from "./pages/InvestPage";
import InvestDetails from "./pages/InvestDetails";
import GuestPage from "./pages/GuestPage";

function ContentWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [contentData, setContentData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Prevent fetching for /not-found route
    if (!id || id === "not-found") {
      navigate("/not-found", { replace: true });
      return;
    }

    const fetchContent = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://cp.raum.africa/store/content-block/${id}`,
        );
        if (response.ok) {
          const data = await response.json();
          if (data.content) {
            setContentData(data.content);
          } else {
            navigate("/not-found", { replace: true });
          }
        } else {
          navigate("/not-found", { replace: true });
        }
      } catch (error) {
        navigate("/not-found", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id, navigate]);

  if (loading) {
    // You can use your spinner here
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  if (!contentData) {
    return null;
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
    <div className="relative h-auto w-full">
      <Modal />
      <Router>
        <div className="relative z-50">
          <Navigation />
          <SelfHelp />
        </div>
        <div onClick={falseNav} className="">
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/host" element={<Host />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/invest" element={<InvestPage />} />
              <Route path="/guest" element={<GuestPage />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin-dashboard/filter" element={<DashFilter />} />
              <Route
                path="/admin-dashboard/filter/result"
                element={<DashResult />}
              />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/invest/:slug" element={<InvestDetails />} />
              <Route
                path="/admin-dashboard/product/:productId"
                element={<ListingDetails />}
              />
              <Route
                path="/admin-dashboard/product/reserve/:productId"
                element={<ReserveBooking />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/:id"
                element={
                  <ContentWrapper>
                    <ContentBlock />
                  </ContentWrapper>
                }
              />
              {/* Catch-all route for 404 - must be last */}
              <Route path="*" element={<NotFound />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
