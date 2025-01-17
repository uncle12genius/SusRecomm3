import React from "react";
import { useInView } from "react-intersection-observer"; 
import "./../styles/About.css";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <div
      id="about"
      className={`about-section ${inView ? "visible" : ""}`} 
      ref={ref}
    >
      <div className={`flip-card-container ${inView ? "animate" : ""}`}>
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
