import React from "react";
import "./../styles/ourteam.css";

const FlipCard = ({ person }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-inner">
        <div className="profile-card-front">
          <img src={person.image} alt={`${person.name}`} />
        </div>
        <div className="profile-card-back">
          <h3>{person.name}</h3>
          <p>{person.title}</p>
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const people = [
    {
      name: "James Ayako",
      title: "Co-founder & CEO ",
      image: "https://via.placeholder.com/200x300",
    },
    {
      name: "Charles Nyamwaro",
      title: "Chief Business Development office ",
      image: "https://via.placeholder.com/200x300",
    },
    {
      name: "Florence Njoki ",
      title: "Chief Operation Office ",
      image: "https://via.placeholder.com/200x300",
    },
  ];

  return (
    <div id="our-team" className="our-team-section">
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {people.map((person, index) => (
          <FlipCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
