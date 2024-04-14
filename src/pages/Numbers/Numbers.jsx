import React from 'react';
import './Numbers.css';
import numbersData from '../../data/numbersData';

const Numbers = () => {
  return (
    <div className="numbers-container">
      <h2>{numbersData.title}</h2>
      <div className="numbers-list">
        {numbersData.content.map((item, index) => (
          <div key={index} className="number-item">
            <h3>{item.number}</h3>
            <p>{item.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;
