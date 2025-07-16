import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import components
import Home from "./components/Home";
import About from "./components/AboutUs";
import BoardMembers from "./components/BoardMembers";
import TeamMembers from "./components/TeamMembers";
import Services from "./components/Services";
import OurProcess from "./components/OurProcess";
import Training from "./components/Training";
import ContactUs from "./components/ContactUs";
import Directory from "./components/Directory";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="App">
              <Home />
              <About />
              <BoardMembers />
              <TeamMembers />
              <Services />
              <OurProcess />
              <Training />
              <ContactUs />
            </div>
          }
        />

        {/* Directory opens as separate page */}
        <Route path="/directory" element={<Directory />} />
      </Routes>
    </Router>
  );
}

export default App;
