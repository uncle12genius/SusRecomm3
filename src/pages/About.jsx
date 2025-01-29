import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./../styles/About.css";
import { FaBullseye, FaLightbulb, FaBalanceScale } from "react-icons/fa";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colors = {
    mission: "#007ACC",
    vision: "#005F8A",
    values: "#6B8E23",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      title: "OUR MISSION",
      content:
        "To design, recommend, and implement sustainable infrastructural solutions for individuals, households, and communities across Africa.",
      icon: <FaBullseye className="icon" />, 
      color: colors.mission,
    },
    {
      title: "OUR VISION",
      content: "Africa's hub of sustainable infrastructural solutions.",
      icon: <FaLightbulb className="icon" />, 
      color: colors.vision,
    },
    {
      title: "OUR VALUES",
      content: "Integrity, innovation, and sustainability in all our projects.",
      icon: <FaBalanceScale className="icon" />, 
      color: colors.values,
    },
  ];

  return (
    <div id="about" className={`about-section ${inView ? "visible" : ""}`} ref={ref}>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div 
            className={`card ${hoveredIndex === index ? "hovered" : ""}`} 
            key={index} 
            style={{ backgroundColor: card.color, transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)", transition: "transform 0.3s ease-in-out" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="icon-container">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
