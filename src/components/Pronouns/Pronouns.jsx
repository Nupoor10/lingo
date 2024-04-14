import React from 'react';
import './Pronouns.css'; 
import pronounsData from '../../data/pronounsData';

const Pronouns = () => {
  return (
    <div className="pronouns-container">
      <h2>{pronounsData.title}</h2>
      <div className="pronouns-list">
        {pronounsData.content.map((pronoun, index) => (
          <div key={index} className="pronoun">
            <div><strong>Subject:</strong> {pronoun.subject}</div>
            <div><strong>Object:</strong> {pronoun.object}</div>
            <div><strong>Possessive Adjective:</strong> {pronoun.possessiveAdjective}</div>
            <div><strong>Possessive Pronoun:</strong> {pronoun.possessivePronoun}</div>
            <div><strong>Reflexive:</strong> {pronoun.reflexive}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pronouns;
