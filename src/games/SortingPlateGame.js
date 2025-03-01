// SortingPlateGame.js
import React, { useContext, useState } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import './games.css';

const allergenEmojis = {
  milk: '🥛',
  peanuts: '🥜',
  eggs: '🥚',
  wheat: '🌾',
  fish: '🐟',
  shellfish: '🦐',
  soy: '🌱',
  'tree nuts': '🌰'
};

const foodItems = [
  // ... same items as before
];

function SortingPlateGame({ next }) {
  const { allergen, ageGroup, lives, setLives, score, setScore } = useContext(UserSettingsContext);
  const [safePlate, setSafePlate] = useState([]);
  const [message, setMessage] = useState('');
  const [mistakes, setMistakes] = useState(0); // Track how many allergen mistakes

  const currentAllergen = allergen || 'peanuts';
  const allergenSymbol = allergenEmojis[currentAllergen];

  // For younger ages, we might skip certain items or reduce difficulty
  let displayedItems = foodItems;
  if (ageGroup === '2-4') {
    displayedItems = foodItems.slice(0, 5); // fewer items
  }

  const handleFoodClick = (item) => {
    if (item.allergens.includes(currentAllergen)) {
      setMistakes(mistakes + 1);
      setMessage(`Oops! ${item.emoji} ${item.name} has ${allergenSymbol}.`);
      // If we allow 3 mistakes before losing
      if (mistakes + 1 >= 3) {
        setLives(lives - 1);
        // End this game by calling next with lostLife = true
        next(0, true);
      }
    } else {
      setSafePlate([...safePlate, item]);
      setMessage(`Great job! ${item.emoji} ${item.name} is safe!`);
      // Increase score by 10 for each safe item
      setScore(score + 10);
      // Example win condition: if user collects X safe items
      if (safePlate.length + 1 >= 5 && ageGroup === '2-4') {
        // Completed the game
        next(50, false); // +50 bonus points
      } else if (safePlate.length + 1 >= 8 && ageGroup !== '2-4') {
        // Harder condition for older kids
        next(100, false);
      }
    }
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Sorting Plate Game</h2>
      <p className="instructions">
        Tap a food item to add it to your plate. Avoid foods with {allergenSymbol}!
        <br />
        Mistakes allowed before losing: 3
      </p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {displayedItems.map(item => (
          <button
            key={item.id}
            onClick={() => handleFoodClick(item)}
            className="food-button"
            style={{ minWidth: '100px', minHeight: '100px' }}
          >
            <span style={{ fontSize: '2em' }}>{item.emoji}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      <div style={{
        marginTop: '30px',
        border: '2px dashed #ccc',
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          fontSize: '4em',
          opacity: 0.1,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          🍽
        </div>
        {/* Show safePlate items in a grid or stacked */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          padding: '10px',
          justifyContent: 'center'
        }}>
          {safePlate.map((item, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '5px',
              padding: '2px 5px',
              fontSize: '0.8em'
            }}>
              {item.emoji}
            </div>
          ))}
        </div>
      </div>

      {message && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</p>}
    </div>
  );
}

export default SortingPlateGame;
