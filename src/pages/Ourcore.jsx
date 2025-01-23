import React from "react";
import { useInView } from "react-intersection-observer"; 
import "./../styles/Ourcore.css";

const Ourcore = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      title: "Partnership",
      content: "We foster enduring collaborations with clients, experts, and communities to achieve impactful results.",
    },
    {
      title: "Results",
      content: "Delivering measurable impacts aligned with our mission of creating sustainable futures",
    },
    {
      title: "Integrity",
      content: "Upholding transparency and accountability in all our endeavors.",
    },
    {
      title: "Trust",
      content: "Building and maintaining trust as the foundation of our relationships and operations",
    },
    {
      title: "Efficiency",
      content: "Combining creativity and practicality to deliver economic and effective solutions.",
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

export default Ourcore;
