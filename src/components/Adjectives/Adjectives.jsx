import React from 'react';
import './Adjectives.css';
import adjectivesData from '../../data/adjectivesData';

const Adjectives = () => {
  return (
    <div className="adjectives-container">
      <h2>{adjectivesData.title}</h2>
      <div className="adjectives-list">
        {adjectivesData.content.map((adjective, index) => (
          <div key={index} className="adjective">
            <h3>{adjective.word}</h3>
            <p><strong>Definition:</strong> {adjective.definition}</p>
            <p><strong>Example:</strong> {adjective.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adjectives;
