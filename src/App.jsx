import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import OurTeam from "./pages/OurTeam.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default App;

