import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";  // Import motion from framer-motion
import "./../styles/Hero.css";

const Hero = () => {
  const images = [
    "image1.jpeg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleScroll = () => {
    document.getElementById("next-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="hero-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }} // Smooth fade-in effect
    >
      <div className="hero-overlay">
        <h1 className="hero-title">Innovating for a Sustainable Future</h1>
        <p className="hero-subtitle">
          Explore our solutions for a better tomorrow.
        </p>
        <button className="hero-button" onClick={handleScroll}>
          Explore Now
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
