import React from 'react';
import './PlateDisplay.css';

function PlateDisplay({ items }) {
  // Uses CSS Grid to automatically arrange items inside the plate boundary.
  return (
    <div className="plate-display">
      {items.map((item, index) => (
        <div key={index} className="plate-item">
          <span className="food-emoji">{item.emoji}</span>
          <span className="food-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default PlateDisplay;
