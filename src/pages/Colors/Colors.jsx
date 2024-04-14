import React from 'react';
import colorsData from '../../data/colorsData';
import './Colors.css'; 

const Colors = () => {
  return (
    <div className="colors-container">
      <h2>{colorsData.title}</h2>
      <ul className="colors-list">
        {colorsData.content.map((color, index) => (
          <li key={index} className="color-item">
            <div className="color-box" style={{ backgroundColor: color.hex }}></div>
            <span className="color-name">{color.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
