import React from "react";
import "./rating.css"; 

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? "filled" : ""}`}>&#9733;</span>
      ))}
    </div>
  );
};

export default Rating;
