import React from "react";
import "./../styles/ourteam.css";

const ProfileCard = ({ person }) => {
  return (
    <div className="profile-card">
      <img src={person.image} alt={`${person.name}`} className="profile-image" />
      <h3 className="profile-name">{person.name}</h3>
      <p className="profile-title">{person.title}</p>
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
      image: "chuck.jpg",
    },
    {
      name: "Florence Njoki",
      title: "Chief Operation Officer",
      image: "njoki.jpg",
    },
  ];

  return (
    <div id="our-team" className="our-team-section">
      <h4 className="our-team-title">Leadership Team</h4>
      <div className="team-container">
        {people.map((person, index) => (
          <ProfileCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
