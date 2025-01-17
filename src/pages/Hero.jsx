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
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageLoad = () => {
    setImageLoaded(true); 
  };

  const handleScroll = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="hero-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0 }} 
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
      <img
        src={images[currentImageIndex]}
        alt="Background"
        className="hidden-background-image"
        onLoad={handleImageLoad}
      />
    </motion.div>
  );
};

export default Hero;
