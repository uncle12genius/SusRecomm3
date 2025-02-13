import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Story from "./pages/Story.jsx";
import OurTeam from "./pages/Ourteam.jsx";
// import Ourcore from "./pages/Ourcore.jsx";
import Footer from "./components/Footer.jsx";

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
              <Story />
              <OurTeam />
              {/* <Ourcore /> */}
              <Footer />
            </>
          }
        />
      
      </Routes>
    </Router>
  );
};

export default App;
