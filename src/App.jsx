import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";

import OurTeam from "./pages/OurTeam.jsx";
import Ourcore from "./pages/Ourcore.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <OurTeam />
              <Ourcore />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
