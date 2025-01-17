import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
<<<<<<< HEAD
import Story from "./pages/Story.jsx";
=======

>>>>>>> 5c838c0144c4b81d5566e08052c508ab2d62d9f0
import OurTeam from "./pages/OurTeam.jsx";
import Ourcore from "./pages/Ourcore.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
<<<<<<< HEAD
      <Hero />
      <About />
      <Story />
      <OurTeam />
      <Footer />
    </div>
=======
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
>>>>>>> 5c838c0144c4b81d5566e08052c508ab2d62d9f0
  );
};

export default App;
