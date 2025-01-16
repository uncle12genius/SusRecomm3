import React from "react";
import "./../styles/About.css";

const About = () => {
  const cards = [
    {
      title: "About",
      content: "Empowering communities with sustainable infrastructural solutions for a prosperous future.",
    },
    {
      title: "Our Vision",
      content: "Africa's hub of sustainable infrastructural solutions.",
    },
    {
      title: "Our Mission",
      content: "To design, recommend, and implement sustainable infrastructural solutions for individuals, households, and communities across Africa.",
    },
  ];

  return (
    <div id="about" className="about-section">
      <div className="flip-card-container">
        {cards.map((card, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{card.title}</h2>
              </div>
              <div className="flip-card-back">
                <p>{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
