// /src/games/LabelReadingGame.js
import React, { useContext, useState, useEffect } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import './games.css';

function LabelReadingGame({ next }) {
  const { allergen, lives, setLives, score, setScore, ageGroup } = useContext(UserSettingsContext);
  const [selectedWords, setSelectedWords] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(ageGroup === 'teens' ? 20 : 30);
  const [finished, setFinished] = useState(false);

  const labelText = "Peanut oil, sugar, wheat flour, salt, milk powder, egg whites, natural flavors";
  const words = labelText.split(', ');

  // Timer for older kids
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setFeedback("Time's up! You didn't finish the challenge.");
          setLives(lives - 1);
          if (lives - 1 <= 0) {
            next(0, true);
            return 0;
          }
          setFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [lives, next]);

  const handleWordClick = (word) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleFinish = () => {
    const containsAllergen = selectedWords.some(word => word.toLowerCase().includes(allergen));
    if (containsAllergen) {
      setFeedback(`Oops! You selected a word indicating your allergen.`);
      setLives(lives - 1);
      if (lives - 1 <= 0) {
        next(0, true);
        return;
      }
    } else {
      setFeedback(`Great job! You avoided any dangerous ingredients.`);
      setScore(score + 40);
    }
    setFinished(true);
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Label Reading Challenge</h2>
      <p className="instructions">
        Tap the words in the ingredient list that indicate your allergen ({allergen}).
        { (ageGroup === '8-12' || ageGroup === 'teens') && <span> Time remaining: {timeLeft} sec</span> }
      </p>
      <div className="ingredient-list">
        {words.map((word, index) => (
          <span
            key={index}
            onClick={() => handleWordClick(word)}
            className={`ingredient-word ${selectedWords.includes(word) ? 'selected' : ''}`}
          >
            {word}
          </span>
        ))}
      </div>
      <button className="start-game-button" onClick={handleFinish}>Submit Answers</button>
      {feedback && <p className="plate-message">{feedback}</p>}
      {finished && (
        <button className="start-game-button" style={{ marginTop: '20px' }} onClick={() => next(40, false)}>
          Continue
        </button>
      )}
    </div>
  );
}

export default LabelReadingGame;
