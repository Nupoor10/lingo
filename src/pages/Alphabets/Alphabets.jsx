import React from 'react';
import './Alphabets.css';
import alphabetData from '../../data/alphabetData';

const Alphabets = () => {
  return (
    <div className="alphabet-container">
      <h2>{alphabetData.title}</h2>
      <div className="alphabet-list">
        {alphabetData.content.map((item, index) => (
          <div key={index} className="alphabet-item">
            <h3>{item.letter}</h3>
            <p>{item.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alphabets;
