import React from "react";
import "./../styles/ourteam.css";

const ourteam = ({ person }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={person.image} alt={`${person.name}`} />
        </div>
        <div className="flip-card-back">
          <h3>{person.name}</h3>
          <p>{person.title}</p>
        </div>
      </div>
    </div>
  );
};

const FlipCardContainer = () => {
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

export default ourteam ;
