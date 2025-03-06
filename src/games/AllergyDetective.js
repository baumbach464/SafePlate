// src/games/AllergyDetective.js
import React, { useState, useContext, useEffect } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';

// Sample label data simulating food packaging.
const labelData = [
  {
    id: 1,
    product: "Crunchy Cereal",
    ingredients: ["Whole Grain", "Sugar", "Wheat Flour", "Salt"],
    allergen: "wheat"
  },
  {
    id: 2,
    product: "Fruit Yogurt",
    ingredients: ["Milk", "Fruit Puree", "Sugar", "Pectin"],
    allergen: "milk"
  },
  {
    id: 3,
    product: "Peanut Butter Crunch",
    ingredients: ["Peanuts", "Sugar", "Salt", "Oil"],
    allergen: "peanuts"
  },
  {
    id: 4,
    product: "Oat Granola",
    ingredients: ["Oats", "Honey", "Tree Nuts", "Raisins"],
    allergen: "tree_nuts"
  },
  {
    id: 5,
    product: "Vanilla Ice Cream",
    ingredients: ["Milk", "Sugar", "Cream", "Vanilla Extract"],
    allergen: "milk"
  }
  // Add more label data if needed.
];

function AllergyDetective({ onReturnToMenu }) {
  const { allergen } = useContext(UserSettingsContext);
  const currentAllergen = allergen || 'peanuts';
  const [currentLabel, setCurrentLabel] = useState(labelData[0]);
  const [round, setRound] = useState(1);
  const totalRounds = labelData.length;
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showEndModal, setShowEndModal] = useState(false);

  // Cycle to next label.
  const handleIngredientClick = (ingredient) => {
    const isAllergen = ingredient.toLowerCase().includes(currentAllergen.toLowerCase());
    if (isAllergen) {
      setFeedback(`Correct! ${ingredient} contains ${currentAllergen}.`);
      setScore(prev => prev + 10);
    } else {
      setFeedback(`Oops! ${ingredient} is safe.`);
    }
    setTimeout(() => {
      setFeedback('');
      if (round < totalRounds) {
        setCurrentLabel(labelData[round]);
        setRound(prev => prev + 1);
      } else {
        setShowEndModal(true);
      }
    }, 1500);
  };

  // End overlay.
  const renderEndOverlay = () => (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      zIndex: 1000
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Allergy Detective Complete!</h1>
      <p style={{ fontSize: '1.8em', marginBottom: '20px' }}>Your final score: {score}</p>
      <div>
        <button onClick={() => window.location.reload()} style={{
          fontSize: '1.5em',
          padding: '10px 20px',
          marginRight: '20px',
          borderRadius: '10px',
          backgroundColor: '#27ae60',
          color: '#fff',
          cursor: 'pointer'
        }}>
          Play Again
        </button>
        <button onClick={onReturnToMenu} style={{
          fontSize: '1.5em',
          padding: '10px 20px',
          borderRadius: '10px',
          backgroundColor: '#4fc1e9',
          color: '#fff',
          cursor: 'pointer'
        }}>
          Return to Menu
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.8em', marginBottom: '20px' }}>Allergy Detective: Label Reader</h1>
      <h2 style={{ fontSize: '1.8em', marginBottom: '10px' }}>{currentLabel.product}</h2>
      <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>Ingredients:</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '15px',
        marginBottom: '20px'
      }}>
        {currentLabel.ingredients.map((ing, idx) => (
          <button 
            key={idx}
            onClick={() => handleIngredientClick(ing)}
            style={{
              fontSize: '1em',
              padding: '8px 12px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}>
            {ing}
          </button>
        ))}
      </div>
      {feedback && <p style={{ fontSize: '1.2em', marginTop: '20px' }}>{feedback}</p>}
      <div style={{ fontSize: '1.2em', marginTop: '20px', color: '#777' }}>
        Round {round} of {totalRounds} | Score: {score}
      </div>
      {showEndModal && renderEndOverlay()}
    </div>
  );
}

export default AllergyDetective;
