import React from "react";
import "./../styles/Story.css";

const Story = () => {
  const cards = [
    {
      title: "Our Story",
      content:
        "We are a Kenyan Incorporated and 100% youth-owned company endeavoring to deliver a sustainable future through innovative solutions to households and communities. We dream of a sustainable world where we are prepared even for the once-in-a-million-years calamity occurrences. We continuously and iteratively engage our young minds to blend social, financial, environmental, and technological tools at our disposal in tackling infrastructural challenges around us. We are driven by social entrepreneurial fierceness and spirit to challenge orthodoxies and reinvent. This we accomplish through knowledge sharing with our partners and innovating towards a sustainable future. Key pillars to our mission are the universally adopted Sustainable Development Goals (SDGs), which presents an opportunity to leave a sustainability imprint in each project undertaken. Our strategy is geared towards facilitating the achievement of SDG 6: Clean water and sanitation access, SDG 7: Affordable and clean energy, SDG 9: Industry, Innovation, and Infrastructure, SDG 11: Sustainable Cities and Communities, and SDG 17: Partnership for the Goals. Because we are impact-driven, we have greater responsibilities – to clients, partners, and colleagues, even if it means making short-term financial sacrifices where there is a clear long-term benefit. We are positioning ourselves as the partner of choice for experts and organizations. Our business model is built around the integration of sustainability-driven experts and contractors who can be accessed and efficiently managed through our platform. I am confident and committed to delivering a sustainable future to everyone.",
    },
  ];

  return (
    <div id="story" className="story-section">
      {cards.map((card, index) => (
        <div key={index} className="story-card">
          <h1 className="story-title">{card.title}</h1>
          <p className="story-content">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Story;
