// src/games/CrisisSimulator.js
import React, { useState, useContext, useEffect } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';

const crisisScenarios = [
  {
    id: 1,
    description: "You're at a restaurant when you suddenly start feeling the symptoms of an allergic reaction. What do you do first?",
    options: [
      { text: "Call 911 immediately", correct: true, explanation: "Correct! Immediate help is crucial." },
      { text: "Wait a few minutes", correct: false, explanation: "Not safe – delays can worsen the reaction." }
    ]
  },
  {
    id: 2,
    description: "Your symptoms worsen. What's your next step?",
    options: [
      { text: "Use your epinephrine auto-injector", correct: true, explanation: "Right – use your medication immediately!" },
      { text: "Call a friend for advice", correct: false, explanation: "Friends can help later, but medication is urgent." }
    ]
  },
  {
    id: 3,
    description: "After using your auto-injector, you're waiting for help. How do you act?",
    options: [
      { text: "Sit calmly and wait", correct: true, explanation: "Good – staying calm is important." },
      { text: "Run around", correct: false, explanation: "Not safe – physical activity can worsen your reaction." }
    ]
  },
  {
    id: 4,
    description: "As you wait, your condition begins to improve. What should you do next?",
    options: [
      { text: "Call for backup and inform the staff", correct: true, explanation: "Excellent – clear communication is key." },
      { text: "Ignore further instructions", correct: false, explanation: "Not safe – always follow emergency plans." }
    ]
  }
];

function CrisisSimulator({ onReturnToMenu }) {
  const { allergen } = useContext(UserSettingsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // Total simulation time.
  const [health, setHealth] = useState(100); // Health meter percentage.

  // Timer: Reduce time and health gradually.
  useEffect(() => {
    if (completed) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishSimulation(false);
          return 0;
        }
        return prev - 1;
      });
      setHealth(prev => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [completed]);

  const handleOption = (option) => {
    if (option.correct) {
      setFeedback(option.explanation);
      setScore(prev => prev + 10);
      setHealth(prev => Math.min(prev + 5, 100));
    } else {
      setFeedback(option.explanation);
      setHealth(prev => Math.max(prev - 10, 0));
    }
    setTimeout(() => {
      setFeedback('');
      if (currentIndex + 1 < crisisScenarios.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        finishSimulation(true);
      }
    }, 2000);
  };

  const finishSimulation = (won) => {
    setCompleted(true);
    // Optionally, adjust final score based on health remaining.
    setFeedback(won ? "Simulation Complete! You managed the crisis well." : "Simulation Over! Please review your emergency plan.");
  };

  const renderEndOverlay = () => (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.85)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      zIndex: 1000,
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Crisis Simulator</h1>
      <p style={{ fontSize: '1.8em', marginBottom: '20px' }}>Final Score: {score}</p>
      <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>Health Remaining: {health}%</p>
      <p style={{ fontSize: '1.3em', marginBottom: '20px' }}>{feedback}</p>
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

  const currentScenario = crisisScenarios[currentIndex];

  return (
    <div style={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
      <h1 style={{ fontSize: '2.8em', marginBottom: '20px' }}>Crisis Simulator: Allergy Edition</h1>
      {!completed && (
        <>
          <div style={{ marginBottom: '10px', fontSize: '1.2em', color: '#e74c3c' }}>
            Time Left: {timeLeft} sec | Health: {health}%
          </div>
          <p style={{ fontSize: '1.4em', margin: '20px' }}>{currentScenario.description}</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            {currentScenario.options.map((option, idx) => (
              <button 
                key={idx}
                onClick={() => handleOption(option)}
                style={{
                  fontSize: '1.2em',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  backgroundColor: option.correct ? '#27ae60' : '#e74c3c',
                  color: '#fff',
                  margin: '10px'
                }}>
                {option.text}
              </button>
            ))}
          </div>
          {feedback && <p style={{ fontSize: '1.2em', marginTop: '20px', color: '#fff' }}>{feedback}</p>}
        </>
      )}
      {completed && renderEndOverlay()}
    </div>
  );
}

export default CrisisSimulator;
