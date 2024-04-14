import React from 'react';
import daysAndMonthsData from '../../data/daysAndMonthsData';
import './DaysAndMonths.css';

const DaysAndMonths = () => {
  return (
    <div className="days-and-months-container">
      <h2>{daysAndMonthsData.title}</h2>
      <h3>Days</h3>
      <ul className="days-and-months-list">
        {daysAndMonthsData.days.map((day, index) => (
          <li key={index} className="item">
            {day.name}
          </li>
        ))}
      </ul>
      <h3>Months</h3>
      <ul className="days-and-months-list">
        {daysAndMonthsData.months.map((day, index) => (
          <li key={index} className="item">
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DaysAndMonths;
