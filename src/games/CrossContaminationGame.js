// /src/games/CrossContaminationGame.js
import React, { useContext, useState, useEffect } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import './games.css';

function CrossContaminationGame({ next }) {
  const { allergen, lives, setLives, score, setScore, ageGroup } = useContext(UserSettingsContext);
  const [round, setRound] = useState(0);
  const [message, setMessage] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [timer, setTimer] = useState(20);
  
  // Simulated rounds with various items
  const rounds = [
    {
      item: { name: 'Peanut Sauce', allergens: ['peanuts'], emoji: '🥜' },
      correctZone: 'Contaminated'
    },
    {
      item: { name: 'Grilled Chicken', allergens: [], emoji: '🍗' },
      correctZone: 'Clean'
    },
    {
      item: { name: 'Egg Salad', allergens: ['eggs'], emoji: '🥚' },
      correctZone: 'Contaminated'
    },
    {
      item: { name: 'Fresh Salad', allergens: [], emoji: '🥗' },
      correctZone: 'Clean'
    }
  ];

  const currentRound = rounds[round];

  // Timer for each round (more important for older kids)
  useEffect(() => {
    if (ageGroup === '8-12' || ageGroup === 'teens') {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setMessage("Time's up for this round!");
            // Penalize and move to next round
            setLives(lives - 1);
            if (lives - 1 <= 0) {
              next(0, true);
              return 0;
            }
            setRound(round + 1);
            setTimer(20);
            return 20;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [round, lives, ageGroup, next]);

  const handleZoneSelection = (zone) => {
    setSelectedZone(zone);
    if (zone === currentRound.correctZone) {
      setMessage(`Correct! ${currentRound.item.emoji} ${currentRound.item.name} belongs in the ${zone} Zone.`);
      setScore(score + 20);
    } else {
      setMessage(`Oops! ${currentRound.item.emoji} ${currentRound.item.name} belongs in the ${currentRound.correctZone} Zone.`);
      setLives(lives - 1);
      if (lives - 1 <= 0) {
        next(0, true);
        return;
      }
    }
  };

  const handleNextRound = () => {
    setSelectedZone('');
    setMessage('');
    setTimer(20);
    if (round + 1 < rounds.length) {
      setRound(round + 1);
    } else {
      next(score + 50, false); // Level completed, bonus points
    }
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Cross-Contamination Kitchen</h2>
      {(ageGroup === '8-12' || ageGroup === 'teens') && <p className="timer-display">Time remaining: {timer} sec</p>}
      <p className="instructions">
        Decide which zone is correct for:
      </p>
      <div style={{ fontSize: '2em', margin: '20px 0' }}>
        <span>{currentRound.item.emoji} {currentRound.item.name}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <button className="start-game-button" onClick={() => handleZoneSelection('Clean')}>Clean Zone</button>
        <button className="start-game-button" onClick={() => handleZoneSelection('Contaminated')}>Contaminated Zone</button>
      </div>
      {message && <p className="plate-message" style={{ marginTop: '20px' }}>{message}</p>}
      {selectedZone && (
        <button className="start-game-button" style={{ marginTop: '20px' }} onClick={handleNextRound}>
          Next Round
        </button>
      )}
    </div>
  );
}

export default CrossContaminationGame;
