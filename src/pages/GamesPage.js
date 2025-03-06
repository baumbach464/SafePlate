// GamesPage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserSettingsContext } from '../UserSettingsContext';

function GamesPage() {
  const { ageGroup } = useContext(UserSettingsContext);

  let gamesToShow;
  if (ageGroup === '2-4') {
    gamesToShow = (
      <>
        <Link to="/games/safeplate-match" className="game-card">
          SafePlate Match
        </Link>
        <Link to="/games/colorful-food-parade" className="game-card">
          Colorful Food Parade
        </Link>
      </>
    );
  } else if (ageGroup === '5-7') {
    gamesToShow = (
      <>
        <Link to="/games/safeplate-sorting" className="game-card">
          SafePlate Sorting
        </Link>
        <Link to="/games/allergy-adventure-story" className="game-card">
          Allergy Adventure Story
        </Link>
      </>
    );
  } else if (ageGroup === '8-12') {
    gamesToShow = (
      <>
        <Link to="/games/allergy-detective" className="game-card">
          Allergy Detective
        </Link>
        <Link to="/games/cafeteria-challenge" className="game-card">
          Cafeteria Challenge
        </Link>
      </>
    );
  } else if (ageGroup === 'teens') {
    gamesToShow = (
      <>
        <Link to="/games/allergy-master-meal-planner" className="game-card">
          Allergy Master Meal Planner
        </Link>
        <Link to="/games/crisis-simulator" className="game-card">
          Crisis Simulator: Allergy Edition
        </Link>
      </>
    );
  } else {
    gamesToShow = (
      <p>Please select your age group and allergen on the previous screen.</p>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h2>Games for Age Group: {ageGroup || 'Unknown'}</h2>
      <p>Select a game to start!</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {gamesToShow}
      </div>
    </div>
  );
}

export default GamesPage;
