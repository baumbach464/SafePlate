// src/games/AllergyAdventureStory.js
import React, { useState, useContext } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';

// Expanded story scenes with more detail.
const storyData = [
  {
    id: 1,
    scene: "It's snack time at school! You see a bowl of cookies and a plate of sliced apples on the table. What do you do?",
    choices: [
      { text: "Grab the cookies", safe: false, feedback: "Cookies often contain allergens like eggs or wheat." },
      { text: "Take the apples", safe: true, feedback: "Great! Apples are safe and nutritious." }
    ]
  },
  {
    id: 2,
    scene: "At a birthday party, a friend offers you a slice of cake. You know cake can be risky for your allergy. What do you do?",
    choices: [
      { text: "Eat the cake anyway", safe: false, feedback: "Cake can contain multiple allergens. Not safe!" },
      { text: "Politely decline and ask an adult", safe: true, feedback: "Smart move! Always check with an adult." }
    ]
  },
  {
    id: 3,
    scene: "During recess, your teacher offers two snacks: a bag of crackers and a chocolate bar. Which snack do you choose?",
    choices: [
      { text: "Chocolate bar", safe: false, feedback: "Chocolate often contains milk and nuts, which are risky." },
      { text: "Bag of crackers", safe: true, feedback: "Good choice! Crackers are usually allergen‑free." }
    ]
  },
  {
    id: 4,
    scene: "At the end of the day, you review your choices. Which option best describes your actions?",
    choices: [
      { text: "I made safe choices and asked when unsure.", safe: true, feedback: "Excellent! You know how to stay safe." },
      { text: "I grabbed whatever looked tasty without checking.", safe: false, feedback: "Remember, safety first!" }
    ]
  }
];

function AllergyAdventureStory({ onReturnToMenu }) {
  const { allergen } = useContext(UserSettingsContext);
  const [currentScene, setCurrentScene] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);

  const handleChoice = (choice) => {
    setFeedback(choice.feedback);
    if (choice.safe) {
      setScore(prev => prev + 10);
    }
    setTimeout(() => {
      setFeedback('');
      if (currentScene + 1 < storyData.length) {
        setCurrentScene(prev => prev + 1);
      } else {
        setCompleted(true);
        setShowEndModal(true);
      }
    }, 1500);
  };

  const endModal = (
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
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>The Adventure Ends!</h1>
      <p style={{ fontSize: '1.8em', marginBottom: '20px' }}>
        You made {score / 10} safe choices out of {storyData.length} scenes.
      </p>
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
          Restart Story
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
      <h1 style={{ fontSize: '2.6em', marginBottom: '20px' }}>Allergy Adventure Story</h1>
      {!completed && (
        <>
          <p style={{ fontSize: '1.4em', margin: '20px' }}>
            {storyData[currentScene].scene}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {storyData[currentScene].choices.map((choice, idx) => (
              <button 
                key={idx} 
                onClick={() => handleChoice(choice)}
                style={{
                  fontSize: '1.2em',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backgroundColor: choice.safe ? '#27ae60' : '#e74c3c',
                  color: '#fff',
                  margin: '10px'
                }}>
                {choice.text}
              </button>
            ))}
          </div>
          {feedback && <p style={{ fontSize: '1.2em', marginTop: '20px', color: '#fff' }}>{feedback}</p>}
          <div style={{ marginTop: '20px', fontSize: '1.2em', color: '#ddd' }}>
            Scene {currentScene + 1} of {storyData.length} | Score: {score}
          </div>
        </>
      )}
      {showEndModal && endModal}
    </div>
  );
}

export default AllergyAdventureStory;
