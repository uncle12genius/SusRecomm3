import React from "react";
import "./../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Building the Future</h1>
        <p>Transforming spaces with innovation and precision.</p>
        <a href="#projects" className="hero-button">View Our Work</a>
      </div>
    </section>
  );
};

export default Hero;
