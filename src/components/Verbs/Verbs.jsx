import React from 'react';
import './Verbs.css';
import verbsData from '../../data/verbsData';

const Verbs = () => {
  return (
    <div className="verbs-container">
      <h2>{verbsData.title}</h2>
      <div className="verbs-list">
        {verbsData.content.map((verb, index) => (
          <div key={index} className="verb">
            <h3>{verb.name}</h3>
            <p><strong>Definition:</strong> {verb.definition}</p>
            <p><strong>Example:</strong> {verb.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Verbs;
