import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Sections/Navigation";
import HeroSection from "./Sections/HeroSection";
import BrowseSection from "./Sections/BrowseSection";
import Footer from "./Sections/Footer";
import HotelPage from "./Sections/HotelPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                <section class="entry">
                  <p class="entry-text">
                    Welcome, your tranquillity oasis awaits
                  </p>
                </section>
                <BrowseSection />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route exact path="hotel/:id" element={<HotelPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
