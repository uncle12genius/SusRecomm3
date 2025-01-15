import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Footer from './components/footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default App;
