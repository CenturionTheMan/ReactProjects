import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Sections/Navigation";
import HeroSection from "./Sections/HeroSection";
import BrowseSection from "./Sections/BrowseSection";
import Footer from "./Sections/Footer";
import HotelPage from "./Sections/HotelPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <HeroSection />
                <BrowseSection />
                <Footer />
              </div>
            }
          />
          <Route exact path="hotel" element={<HotelPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
