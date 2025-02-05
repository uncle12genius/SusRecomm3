import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; 
import "./../styles/Hero.css";

const Hero = () => {
  const images = ["image1.jpeg", "image2.jpg", "image3.jpg", "image4.jpeg"];
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

  return (
    <motion.div
       id="home"
      className="hero-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      <div className="hero-overlay">
        <p className="hero-subtitle">
         solutions for a better tomorrow.
        </p>
        <ScrollLink
        
         to="about" 
         smooth={true}
         duration={800}
         offset={-70} 
         className="hero-button"
       >
         More About Us 
       
        </ScrollLink>
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
