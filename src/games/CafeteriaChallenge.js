// src/games/CafeteriaChallenge.js
import React, { useState, useContext } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';

const scenarios = [
  {
    id: 1,
    prompt: "During lunch, you see two trays: one with processed food and one with freshly prepared food. Which tray do you choose?",
    options: [
      { text: "Processed tray", safe: false, explanation: "Processed foods may hide allergens." },
      { text: "Fresh tray", safe: true, explanation: "Fresh foods are generally safer." }
    ]
  },
  {
    id: 2,
    prompt: "A friend offers you a snack from her lunchbox. What should you do?",
    options: [
      { text: "Accept without asking", safe: false, explanation: "You should always check if it's safe first." },
      { text: "Politely ask about the ingredients", safe: true, explanation: "Great! Always ask to be sure." }
    ]
  },
  {
    id: 3,
    prompt: "Your teacher places a bowl of cookies on the counter. What is your best action?",
    options: [
      { text: "Help yourself", safe: false, explanation: "Cookies might contain allergens like eggs or wheat." },
      { text: "Ask the teacher if they're safe", safe: true, explanation: "Smart move! Always check with an adult." }
    ]
  },
  {
    id: 4,
    prompt: "At the cafeteria, you notice a label on a snack that looks unclear. What should you do?",
    options: [
      { text: "Ignore the label", safe: false, explanation: "Ignoring the label could be dangerous." },
      { text: "Ask a teacher to help read it", safe: true, explanation: "Excellent! Always get help if unsure." }
    ]
  }
];

function CafeteriaChallenge({ onReturnToMenu }) {
  const { allergen } = useContext(UserSettingsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const currentScenario = scenarios[currentIndex];

  const handleOptionClick = (option) => {
    setFeedback(option.explanation);
    if (option.safe) {
      setScore(prev => prev + 10);
    }
    setTimeout(() => {
      setFeedback('');
      if (currentIndex + 1 < scenarios.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCompleted(true);
      }
    }, 2000);
  };

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
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Cafeteria Challenge Complete!</h1>
      <p style={{ fontSize: '1.8em', marginBottom: '20px' }}>Final Score: {score}</p>
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
      <h1 style={{ fontSize: '2.8em', marginBottom: '20px' }}>Cafeteria Challenge</h1>
      <p style={{ fontSize: '1.4em', margin: '20px' }}>{currentScenario.prompt}</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap'
      }}>
        {currentScenario.options.map((option, idx) => (
          <button 
            key={idx} 
            onClick={() => handleOptionClick(option)}
            style={{
              fontSize: '1.2em',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: option.safe ? '#27ae60' : '#e74c3c',
              color: '#fff',
              margin: '10px'
            }}>
            {option.text}
          </button>
        ))}
      </div>
      {feedback && <p style={{ fontSize: '1.2em', marginTop: '20px' }}>{feedback}</p>}
      <div style={{ marginTop: '20px', fontSize: '1.2em', color: '#ddd' }}>
        Round {currentIndex + 1} of {scenarios.length} | Score: {score}
      </div>
      {completed && renderEndOverlay()}
    </div>
  );
}

export default CafeteriaChallenge;
