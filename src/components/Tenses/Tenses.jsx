import React from 'react';
import './Tenses.css';
import tensesData from '../../data/tensesData';

const Tenses = () => {
  return (
    <div className="tenses-container">
      <h2>{tensesData.title}</h2>
      <div className="tenses-list">
        {tensesData.content.map((tense, index) => (
          <div key={index} className="tense">
            <h3>{tense.name}</h3>
            <ul>
              {tense.examples.map((example, i) => (
                <li key={i}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tenses;
