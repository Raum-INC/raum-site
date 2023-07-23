import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="bgGrade">
      <Navbar />
      <div>
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
