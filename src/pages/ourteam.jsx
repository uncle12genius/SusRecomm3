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

const profileCardContainer = () => {
  const people = [
    {
      name: "John Doe",
      title: "Software Engineer",
      image: "https://via.placeholder.com/200x300",
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      image: "https://via.placeholder.com/200x300",
    },
    {
      name: "Sam Wilson",
      title: "UI/UX Designer",
      image: "https://via.placeholder.com/200x300",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      {people.map((person, index) => (
        <FlipCard key={index} person={person} />
      ))}
    </div>
  );
};

export default profileCardContainer;
