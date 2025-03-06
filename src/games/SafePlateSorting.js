// src/games/SafePlateSorting.js
import React, { useState, useContext } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import { FOOD_ITEMS } from '../data/foodItems';


function SafePlateSorting({ onReturnToMenu }) {
  const { allergen } = useContext(UserSettingsContext);
  const currentAllergen = allergen || 'peanuts';
  // Limit the food set for this age group.
  const availableItems = FOOD_ITEMS.filter(item =>
    item.allergens.includes(currentAllergen) || item.allergens.length === 0
  ).slice(0, 8);
  
  const totalRounds = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [plate, setPlate] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Drag and drop state (if needed for future enhancements)
  const [draggedItem, setDraggedItem] = useState(null);

  // When an item is dropped, process the drop.
  const handleDrop = (e, binType) => {
    e.preventDefault();
    const currentFood = availableItems[currentIndex];
    const isSafe = !currentFood.allergens.includes(currentAllergen);
    if ((binType === 'safe' && isSafe) || (binType === 'unsafe' && !isSafe)) {
      setFeedback("Great job!");
      setPlate(prev => [...prev, currentFood]);
      setScore(prev => prev + 10);
    } else {
      setFeedback("Oops! That wasn't safe.");
    }
    setTimeout(() => {
      setFeedback('');
      if (currentIndex + 1 < totalRounds) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCompleted(true);
      }
    }, 1000);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  // End game overlay.
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
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Game Over</h1>
      <p style={{ fontSize: '1.8em', marginBottom: '20px' }}>
        You sorted {plate.length} out of {totalRounds} items correctly.
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

  // For touch devices, we allow tapping as an alternative.
  const handleTap = (binType) => {
    handleDrop({ preventDefault: () => {} }, binType);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.8em', marginBottom: '20px' }}>Safe Plate Sorting</h1>
      {availableItems[currentIndex] && (
        <div style={{ fontSize: '4em', marginBottom: '20px' }}>
          {availableItems[currentIndex].emoji}
        </div>
      )}
      <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>{feedback}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '20px' }}>
        <div 
          onDrop={(e) => handleDrop(e, "safe")}
          onDragOver={allowDrop}
          onClick={() => handleTap("safe")}
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#27ae60',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5em',
            color: '#fff',
            cursor: 'pointer'
          }}>
          Safe
        </div>
        <div 
          onDrop={(e) => handleDrop(e, "unsafe")}
          onDragOver={allowDrop}
          onClick={() => handleTap("unsafe")}
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#e74c3c',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5em',
            color: '#fff',
            cursor: 'pointer'
          }}>
          Not Safe
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '1.6em', marginBottom: '15px', color: '#555' }}>Your Plate</h3>
        <div style={{ fontSize: '2em', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {plate.map((item, i) => (
            <span key={i}>{item.emoji}</span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: '30px', fontSize: '1.2em' }}>
        Round {currentIndex + 1} of {totalRounds} | Score: {score}
      </div>
      {completed && renderEndOverlay()}
    </div>
  );
}

export default SafePlateSorting;
