import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserSettingsContext } from '../UserSettingsContext';

function AgeAllergenSelection() {
  const { setAgeGroup, setAllergen, setLives, setScore } = useContext(UserSettingsContext);
  const navigate = useNavigate();

  const [tempAge, setTempAge] = useState('');
  const [tempAllergen, setTempAllergen] = useState('');

  const ageOptions = [
    { id: '2-4', label: 'Ages 2–4' },
    { id: '5-7', label: 'Ages 5–7' },
    { id: '8-12', label: 'Ages 8–12' },
    { id: 'teens', label: 'Teens' }
  ];

  const allergenOptions = [
    { id: 'milk', label: 'Milk 🥛' },
    { id: 'peanuts', label: 'Peanuts 🥜' },
    { id: 'eggs', label: 'Eggs 🥚' },
    { id: 'wheat', label: 'Wheat 🌾' },
    { id: 'fish', label: 'Fish 🐟' },
    { id: 'shellfish', label: 'Shellfish 🦐' }
  ];

  const handleSubmit = () => {
    setAgeGroup(tempAge);
    setAllergen(tempAllergen);
    setLives(3);  // Reset lives for a new session
    setScore(0);  // Reset score
    navigate('/games');
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h2>Select Your Age Group & Allergen</h2>
      <div style={{ marginBottom: '30px' }}>
        <h3>Age Group</h3>
        {ageOptions.map(opt => (
          <button
            key={opt.id}
            className={`selection-button ${tempAge === opt.id ? 'selected' : ''}`}
            onClick={() => setTempAge(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: '30px' }}>
        <h3>Allergen</h3>
        {allergenOptions.map(opt => (
          <button
            key={opt.id}
            className={`selection-button ${tempAllergen === opt.id ? 'selected' : ''}`}
            onClick={() => setTempAllergen(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {tempAge && tempAllergen && (
        <button className="start-game-button" onClick={handleSubmit}>
          Start Your SafePlate Experience
        </button>
      )}
    </div>
  );
}

export default AgeAllergenSelection;
