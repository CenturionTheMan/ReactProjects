import "./App.css";
import Navigation from "./Sections/Navigation";
import HeroSection from "./Sections/HeroSection";
import BrowseSection from "./Sections/BrowseSection";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <BrowseSection />
      <Footer />
    </div>
  );
}

export default App;
