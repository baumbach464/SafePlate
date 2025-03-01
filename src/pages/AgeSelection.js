import React from 'react';
import { Link } from 'react-router-dom';

function AgeSelection() {
  return (
    <div className="age-selection" style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h2>Select Your Age Group</h2>
      <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
        Choose the experience that’s best for you!
      </p>
      <div className="age-cards" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <Link to="/games" state={{ ageGroup: '2-4' }} className="age-card">Ages 2-4</Link>
        <Link to="/games" state={{ ageGroup: '5-7' }} className="age-card">Ages 5-7</Link>
        <Link to="/games" state={{ ageGroup: '8-12' }} className="age-card">Ages 8-12</Link>
        <Link to="/games" state={{ ageGroup: 'teens' }} className="age-card">Teens</Link>
      </div>
    </div>
  );
}

export default AgeSelection;
