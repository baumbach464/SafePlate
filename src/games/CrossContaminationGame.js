// CrossContaminationGame.js
import React, { useContext, useState } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import './games.css';

function CrossContaminationGame({ next }) {
  const { allergen, ageGroup, lives, setLives, score, setScore } = useContext(UserSettingsContext);
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);

  // For brevity, we’ll do a simpler approach:
  // user picks correct utensils for each food. If they pick incorrectly,
  // they lose a life or a point.

  // Possibly you could do a drag-and-drop system with “Allergen Station” vs. “Safe Station.”

  const handleFinish = () => {
    // Example: awarding points or removing life if user messed up
    // If user has enough correct answers, they “win” this level
    setScore(score + 50);
    setDone(true);
    // Then call next after a short delay or a “Finish” button
  };

  if (done) {
    // Call next with some points
    next(50, false);
    return null;
  }

  return (
    <div className="game-container">
      <h2 className="game-title">Cross-Contamination Kitchen</h2>
      <p className="instructions">
        Keep foods with {allergen} away from safe foods. Use separate utensils for each station.
      </p>
      {/* Show some puzzle or drag area. Omitted for brevity. */}
      <p>Imagine a drag-and-drop area here with utensils and food stations.</p>
      <button onClick={handleFinish}>I’m Done!</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CrossContaminationGame;
