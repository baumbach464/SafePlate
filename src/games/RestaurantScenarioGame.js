// /src/games/RestaurantScenarioGame.js
import React, { useContext, useState } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import './games.css';

function RestaurantScenarioGame({ next }) {
  const { allergen, lives, setLives, score, setScore } = useContext(UserSettingsContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [feedback, setFeedback] = useState('');

  // A branching narrative for the restaurant scenario
  const steps = [
    {
      prompt: "You're at a busy restaurant. A waiter approaches and asks if you have any dietary restrictions.",
      choices: [
        { text: "Tell the waiter about your allergy", nextStep: 1 },
        { text: "Stay silent", nextStep: 2 }
      ]
    },
    {
      prompt: "The waiter assures you that the chef is aware and can accommodate your needs. Now, choose a dish:",
      choices: [
        { text: "Peanut Sauce Noodles", allergens: ['peanuts'], nextStep: 3 },
        { text: "Grilled Chicken", allergens: [], nextStep: 3 },
        { text: "Cheesy Breadsticks", allergens: ['milk', 'wheat'], nextStep: 3 }
      ]
    },
    {
      prompt: "The waiter did not note your allergy. You receive a dish that might contain allergens. Choose wisely:",
      choices: [
        { text: "Ask the waiter to check the dish", nextStep: 1 },
        { text: "Eat the dish anyway", allergens: ['peanuts'], nextStep: 3 }
      ]
    },
    {
      prompt: "Result:",
      choices: []
    }
  ];

  const handleChoice = (choice) => {
    if (choice.allergens && choice.allergens.includes(allergen)) {
      setFeedback(`Oops! That dish contains your allergen.`);
      setLives(lives - 1);
      if (lives - 1 <= 0) {
        next(0, true);
        return;
      }
      setScore(score - 10);
    } else if (choice.text.includes("Tell the waiter") || choice.text.includes("Ask the waiter")) {
      setFeedback("Great! Communication is key.");
      setScore(score + 20);
    } else {
      setFeedback("Good choice! That dish is safe.");
      setScore(score + 30);
    }
    // Advance to result step if applicable
    if (currentStep < 2) {
      setCurrentStep(choice.nextStep);
    } else {
      // Finalize the game after a delay
      setTimeout(() => {
        next(score + 30, false);
      }, 1500);
    }
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Restaurant Scenario</h2>
      <p className="instructions">{steps[currentStep].prompt}</p>
      {steps[currentStep].choices.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '600px', margin: '0 auto' }}>
          {steps[currentStep].choices.map((choice, index) => (
            <button key={index} className="start-game-button" onClick={() => handleChoice(choice)}>
              {choice.text}
            </button>
          ))}
        </div>
      ) : (
        <p className="plate-message">{feedback}</p>
      )}
      {feedback && currentStep === 2 && (
        <button className="start-game-button" style={{ marginTop: '20px' }} onClick={() => handleChoice({ nextStep: 3 })}>
          Finish Level
        </button>
      )}
    </div>
  );
}

export default RestaurantScenarioGame;
