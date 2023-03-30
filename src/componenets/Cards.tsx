import React from 'react';
import './cards.css'; // Import CSS stylesheet
interface myObj {
    imageSrc : any,
    title : any,
    description:any;
}

const StylishCard = ({ imageSrc, title, description }:myObj) => {
  return (
    <div className="card-container">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default StylishCard;