import React from 'react';
import nounsData from '../../data/nounsData';
import './Nouns.css';

const Nouns = () => {
  return (
    <div className="nouns-container">
      <h2>{nounsData.title}</h2>
      <div className="nouns-list">
        {nounsData.content.map((noun, index) => (
          <div key={index} className="noun">
            <h3>{noun.name}</h3>
            <p><strong>Definition:</strong> {noun.definition}</p>
            <p><strong>Example:</strong> {noun.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nouns;
