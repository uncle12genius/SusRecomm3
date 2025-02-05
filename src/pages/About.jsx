import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./../styles/About.css"; // Ensure this path is correct
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colors = {
    mission: "#007ACC",
    vision: "#005F8A",
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
  ];

  const coreValues = [
    { title: "Partnership", content: "We foster collaborations for impactful results.", icon: "🤝" },
    { title: "Results", content: "Delivering measurable impacts for sustainable futures.", icon: "📊" },
    { title: "Integrity", content: "Upholding transparency and accountability.", icon: "🔍" },
    { title: "Trust", content: "Building trust as the foundation of our operations.", icon: "🛡️" },
    { title: "Efficiency", content: "Delivering economic and effective solutions.", icon: "⚡" },
  ];

  return (
    <div className={`about-section ${inView ? "visible" : ""}`} id="about" ref={ref}>
      {/* Mission & Vision Cards */}
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
            style={{ backgroundColor: card.color }}
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
      <div className="core-values-section">
        <h2 className="core-title">Our Core Values</h2>
        <div className="scrolling-card-container">
          {coreValues.map((value, index) => (
            <div className="scrolling-card" key={index}>
              <div className="scrolling-card-inner">
                <div className="card-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
