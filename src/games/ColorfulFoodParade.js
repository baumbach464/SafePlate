// src/games/ColorfulFoodParade.js
import React, { useState, useEffect, useContext } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import { FOOD_ITEMS } from '../foodItems';

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function ColorfulFoodParade({ onReturnToMenu }) {
  const { allergen } = useContext(UserSettingsContext);
  const currentAllergen = allergen || 'peanuts';
  const [paradeItems, setParadeItems] = useState([]);
  const [plate, setPlate] = useState([]);
  const [feedbackBubbles, setFeedbackBubbles] = useState([]);
  const [round, setRound] = useState(1);
  const totalRounds = 10;

  // Use a limited set for simplicity.
  const availableItems = FOOD_ITEMS.filter(item =>
    item.allergens.includes(currentAllergen) || item.allergens.length === 0
  ).slice(0, 5);

  // Add new items every 2 seconds.
  useEffect(() => {
    if (round > totalRounds) return;
    const interval = setInterval(() => {
      const newItem = { ...availableItems[randomBetween(0, availableItems.length - 1)] };
      newItem.id = Date.now() + Math.random();
      newItem.left = randomBetween(5, 95) + '%';
      newItem.top = randomBetween(10, 90) + '%';
      setParadeItems(prev => [...prev, newItem]);
    }, 2000);
    return () => clearInterval(interval);
  }, [round, availableItems, totalRounds]);

  // Handle tap on an item.
  const handleTap = (item, event) => {
    if (round > totalRounds) return;
    const isSafe = !item.allergens.includes(currentAllergen);
    const clickX = event.clientX;
    const clickY = event.clientY;
    // Remove tapped item.
    setParadeItems(prev => prev.filter(i => i.id !== item.id));
    // Create feedback.
    createFeedback(isSafe ? "✅ Great!" : "🚫 Oops!", clickX, clickY);
    if (isSafe) {
      setPlate(prev => [...prev, item]);
    }
    // Advance round.
    setRound(prev => prev + 1);
  };

  // Create ephemeral feedback.
  const createFeedback = (text, x, y) => {
    const id = Date.now() + Math.random();
    setFeedbackBubbles(prev => [...prev, { id, text, x, y }]);
    setTimeout(() => {
      setFeedbackBubbles(prev => prev.filter(fb => fb.id !== id));
    }, 1000);
  };

  // End-of-game overlay.
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
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Game Over!</h1>
      <p style={{ fontSize: '1.8em', marginBottom: '20px' }}>
        You completed {plate.length} safe picks in {totalRounds} rounds.
      </p>
      <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>
        Score: {plate.length * 10}
      </p>
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
    <div style={{ position: 'relative', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.8em', marginBottom: '20px' }}>Colorful Food Parade</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>
        Round: {round} of {totalRounds}
      </p>
      <div style={{
        position: 'relative',
        height: '300px',
        background: 'linear-gradient(135deg, #fff1f0, #fef9e7)',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        {paradeItems.map(item => (
          <div
            key={item.id}
            onClick={(e) => handleTap(item, e)}
            style={{
              position: 'absolute',
              left: item.left,
              top: item.top,
              transform: 'translate(-50%, -50%)',
              fontSize: '3em',
              cursor: 'pointer',
              userSelect: 'none',
              animation: 'floatAnim 3s ease-in-out infinite'
            }}>
            {item.emoji}
          </div>
        ))}
        {feedbackBubbles.map(fb => (
          <div key={fb.id} style={{
            position: 'fixed',
            left: fb.x,
            top: fb.y,
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            padding: '5px 10px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
            fontSize: '1.5em',
            color: '#333',
            zIndex: 3000
          }}>
            {fb.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '1.4em', marginBottom: '15px', color: '#555' }}>Your Plate</h3>
        <div style={{ fontSize: '2em' }}>
          {plate.map((item, i) => (
            <span key={i}>{item.emoji} </span>
          ))}
        </div>
      </div>
      {round > totalRounds && renderEndOverlay()}
    </div>
  );
}

export default ColorfulFoodParade;
