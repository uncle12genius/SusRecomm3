
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
      title: "Co-founder & CEO",
      image: "jim.png",
    },
    {
      name: "Charles Nyamwaro",
      title: "Chief Business Development Officer",
      image: "chuck.png",
    },
    {
      name: "Florence Njoki",
      title: "Chief Operation Officer",
      image: "njoki.jpg",
    },
  ];

  return (
    <div id="our-team" className="our-team-section">
      <h4 className="our-team-title">Our Team</h4>
      <div className="team-container">
        {people.map((person, index) => (
          <FlipCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
