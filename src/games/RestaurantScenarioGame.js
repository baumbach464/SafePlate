// RestaurantScenarioGame.js
import React, { useContext, useState } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import './games.css';

function RestaurantScenarioGame({ next }) {
  const { allergen, score, setScore, lives, setLives } = useContext(UserSettingsContext);
  const [finished, setFinished] = useState(false);

  // Example scenario: user sees a menu with hidden allergens, must ask questions or read carefully
  // If they choose a dish with the allergen, they lose a life or some points

  const handleChooseDish = (dish) => {
    if (dish.allergens.includes(allergen)) {
      setLives(lives - 1);
      if (lives - 1 <= 0) {
        next(0, true); // lost the game
      }
    } else {
      setScore(score + 20);
      setFinished(true);
    }
  };

  if (finished) {
    // e.g. user found a safe dish
    next(20, false);
    return null;
  }

  return (
    <div className="game-container">
      <h2 className="game-title">Restaurant Scenario</h2>
      <p className="instructions">
        Choose a dish that does NOT contain your allergen. If you pick incorrectly, you lose a life!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
        <button onClick={() => handleChooseDish({ name: 'Peanut Sauce Noodles', allergens: ['peanuts'] })}>
          Peanut Sauce Noodles
        </button>
        <button onClick={() => handleChooseDish({ name: 'Grilled Fish', allergens: ['fish'] })}>
          Grilled Fish
        </button>
        <button onClick={() => handleChooseDish({ name: 'Tomato Pasta', allergens: [] })}>
          Tomato Pasta
        </button>
        <button onClick={() => handleChooseDish({ name: 'Cheesy Breadsticks', allergens: ['milk', 'wheat'] })}>
          Cheesy Breadsticks
        </button>
      </div>
    </div>
  );
}

export default RestaurantScenarioGame;
