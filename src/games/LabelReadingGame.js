// LabelReadingGame.js
import React, { useContext, useState } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import './games.css';

function LabelReadingGame({ next }) {
  const { allergen, score, setScore, lives, setLives } = useContext(UserSettingsContext);
  const [selectedWords, setSelectedWords] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [done, setDone] = useState(false);

  // For demonstration, a short label with hidden allergen references
  const label = "Peanut oil, sugar, wheat flour, salt";
  const words = label.split(', ');

  const handleWordClick = (word) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleFinish = () => {
    // Check if user found all relevant allergens
    const foundAllergen = selectedWords.some(w => w.toLowerCase().includes(allergen));
    if (foundAllergen) {
      setFeedback(`Oops! This label contains your allergen.`);
      setLives(lives - 1);
      if (lives - 1 <= 0) {
        next(0, true);
      }
    } else {
      setScore(score + 30);
      setFeedback(`Good job! You avoided ${allergen}!`);
    }
    setDone(true);
  };

  if (done) {
    // Wait a moment or provide a button to continue
    return (
      <div className="game-container">
        <h2 className="game-title">Label Reading Results</h2>
        <p>{feedback}</p>
        <button onClick={() => next(30, false)}>Continue</button>
      </div>
    );
  }

  return (
    <div className="game-container">
      <h2 className="game-title">Label Reading Challenge</h2>
      <p className="instructions">
        Tap words in the ingredient list that might indicate your allergen ({allergen}).
      </p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        {words.map((word, index) => (
          <span
            key={index}
            onClick={() => handleWordClick(word)}
            style={{
              padding: '10px',
              border: selectedWords.includes(word) ? '2px solid #4fc1e9' : '1px solid #aaa',
              borderRadius: '5px',
              cursor: 'pointer',
              background: selectedWords.includes(word) ? '#4fc1e9' : '#fff',
              color: selectedWords.includes(word) ? '#fff' : '#333'
            }}
          >
            {word}
          </span>
        ))}
      </div>
      <button onClick={handleFinish} className="start-game-button">
        Done
      </button>
    </div>
  );
}

export default LabelReadingGame;
