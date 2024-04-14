import React from 'react';
import './Greetings.css'; 
import greetingsData from '../../data/greetingsData';

const Greetings = () => {
  return (
    <div className="greetings-container">
      <h2>{greetingsData.title}</h2>
      <div className="greetings-list">
        {greetingsData.content.map((greeting, index) => (
          <div key={index} className="greeting-item">
            <h3>{greeting.phrase}</h3>
            <p>{greeting.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Greetings;
