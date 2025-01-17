import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";  
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
    // Preload images
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    preloadImages();

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

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
      transition={{ duration: 2 }} 
    >
      <div className="hero-overlay">
       
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
