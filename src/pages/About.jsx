import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./../styles/About.css";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const AboutOurcore = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colors = {
    mission: "#007ACC",
    vision: "#005F8A",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const aboutCards = [
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
  ];

  const coreValues = [
    {
      title: "Partnership",
      content: "We foster enduring collaborations with clients, experts, and communities to achieve impactful results.",
      icon: "🤝",
    },
    {
      title: "Results",
      content: "Delivering measurable impacts aligned with our mission of creating sustainable futures.",
      icon: "📊",
    },
    {
      title: "Integrity",
      content: "Upholding transparency and accountability in all our endeavors.",
      icon: "🔍",
    },
    {
      title: "Trust",
      content: "Building and maintaining trust as the foundation of our relationships and operations.",
      icon: "🛡️",
    },
    {
      title: "Efficiency",
      content: "Combining creativity and practicality to deliver economic and effective solutions.",
      icon: "⚡",
    },
  ];

  return (
    <div id="about" className={`about-section ${inView ? "visible" : ""}`} ref={ref}>
      {/* About Section */}
      <div className="cards-container">
        {aboutCards.map((card, index) => (
          <div
            className={`card ${hoveredIndex === index ? "hovered" : ""}`}
            key={index}
            style={{
              backgroundColor: card.color,
              transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="icon-container">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-content">{card.content}</p>
          </div>
        ))}
      </div>

      {/* Core Values Section */}
      <div className={`scrolling-card-container ${inView ? "animate" : ""}`}>
        {coreValues.map((card, index) => (
          <div className="scrolling-card" key={index}>
            <div className="scrolling-card-inner">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutOurcore;
