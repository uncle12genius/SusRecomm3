import React, { useEffect, useState } from "react";
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
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="sustain-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <h1 className="sustain-text">SUSTAIN YOUR FUTURE</h1>
    </div>
  );
};

export default Hero;
