import React from 'react';
import './Adverbs.css';
import adverbsData from '../../data/adverbsData';

const Adverbs = () => {
  return (
    <div className="adverbs-container">
      <h2>{adverbsData.title}</h2>
      <div className="adverbs-list">
        {adverbsData.content.map((adverb, index) => (
          <div key={index} className="adverb">
            <h3>{adverb.word}</h3>
            <p><strong>Definition:</strong> {adverb.definition}</p>
            <p><strong>Example:</strong> {adverb.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adverbs;
