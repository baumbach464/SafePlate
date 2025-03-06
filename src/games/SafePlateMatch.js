// src/games/SafePlateMatch.js
import React, { useState, useEffect, useContext } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import { FOOD_ITEMS } from '../foodItems';

// Utility: Pick a random item from an array.
function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// SafePlateMatch game for ages 2–4
function SafePlateMatch({ onReturnToMenu }) {
  const { allergen } = useContext(UserSettingsContext);
  const currentAllergen = allergen || 'peanuts';
  // For this age group, choose a limited subset of foods.
  const availableItems = FOOD_ITEMS.filter(item =>
    item.allergens.includes(currentAllergen) || item.allergens.length === 0
  ).slice(0, 5);

  const totalRounds = 5;
  const [round, setRound] = useState(1);
  const [currentFood, setCurrentFood] = useState(null);
  const [message, setMessage] = useState('');
  const [plate, setPlate] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [score, setScore] = useState(0);

  // Set a new food on mount and each round.
  useEffect(() => {
    if (round <= totalRounds) {
      const newFood = getRandomItem(availableItems);
      setCurrentFood(newFood);
    } else {
      setGameOver(true);
      setTimeout(() => setShowEndModal(true), 500);
    }
  }, [round, availableItems, totalRounds]);

  // Handle user choice.
  const handleChoice = (choice) => {
    if (!currentFood || gameOver) return;
    // Determine if current food is safe (does not include the allergen)
    const isSafe = !currentFood.allergens.includes(currentAllergen);
    if ((choice === 'safe' && isSafe) || (choice === 'unsafe' && !isSafe)) {
      setMessage("Great job!");
      setPlate(prev => [...prev, currentFood]);
      setScore(prev => prev + 10);
    } else {
      setMessage("Oops, that's not safe!");
    }
    // After a brief pause, move to next round.
    setTimeout(() => {
      setMessage("");
      setRound(prev => prev + 1);
    }, 1000);
  };

  // End modal with options.
  const endGameModal = (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
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
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Game Over!</h1>
      <p style={{ fontSize: '1.8em', marginBottom: '20px' }}>
        You completed {plate.length} out of {totalRounds} rounds.
      </p>
      <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>Score: {score}</p>
      <div>
        <button 
          onClick={() => window.location.reload()}
          style={{
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
        <button 
          onClick={onReturnToMenu}
          style={{
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
      <h1 style={{ fontSize: '2.8em', marginBottom: '20px' }}>Safe Plate Match</h1>
      {!gameOver && currentFood && (
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '5em', margin: '20px' }}>
            {currentFood.emoji}
          </div>
          <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>
            Round {round} of {totalRounds}
          </p>
          <div>
            <button 
              onClick={() => handleChoice('safe')}
              style={{
                fontSize: '2em',
                margin: '10px',
                padding: '10px 20px',
                borderRadius: '20px',
                backgroundColor: '#27ae60',
                color: '#fff',
                cursor: 'pointer'
              }}>
              Safe
            </button>
            <button 
              onClick={() => handleChoice('unsafe')}
              style={{
                fontSize: '2em',
                margin: '10px',
                padding: '10px 20px',
                borderRadius: '20px',
                backgroundColor: '#e74c3c',
                color: '#fff',
                cursor: 'pointer'
              }}>
              Not Safe
            </button>
          </div>
          {message && <p style={{ fontSize: '1.5em', color: message.includes("Great") ? '#27ae60' : '#e74c3c' }}>{message}</p>}
        </div>
      )}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '1.6em', marginBottom: '15px', color: '#555' }}>Your Safe Plate</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          {plate.map((item, index) => (
            <span key={index} style={{ fontSize: '2em' }}>{item.emoji}</span>
          ))}
        </div>
      </div>
      {showEndModal && endGameModal}
    </div>
  );
}

export default SafePlateMatch;
