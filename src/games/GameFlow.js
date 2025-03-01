import React, { useContext, useState } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import SortingPlateGame from './SortingPlateGame';
import CrossContaminationGame from './CrossContaminationGame';
import RestaurantScenarioGame from './RestaurantScenarioGame';
import LabelReadingGame from './LabelReadingGame';
import Scoreboard from '../components/Scoreboard';

/*
  This "GameFlow" organizes a multi-level progression:
  1) SortingPlateGame
  2) CrossContaminationGame (if age > 4)
  3) RestaurantScenarioGame (if age > 7)
  4) LabelReadingGame (if age > 7)
  etc.

  The user "wins" if they complete all levels without losing all lives.
  The user "loses" if lives <= 0 at any point.
*/

function GameFlow() {
  const { ageGroup, lives, setLives, score, setScore } = useContext(UserSettingsContext);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Decide which mini-games to include based on age
  let levelSequence = [<SortingPlateGame next={handleNext} />]; // Always sorting first

  if (ageGroup !== '2-4') {
    levelSequence.push(<CrossContaminationGame next={handleNext} />);
  }
  if (ageGroup === '8-12' || ageGroup === 'teens') {
    levelSequence.push(<RestaurantScenarioGame next={handleNext} />);
    levelSequence.push(<LabelReadingGame next={handleNext} />);
  }

  // Handler for completing a mini-game
  function handleNext(pointsEarned, lostLife) {
    // Increase score
    setScore(score + (pointsEarned || 0));

    // Optionally reduce lives
    if (lostLife) {
      setLives(lives - 1);
    }
    if (lives - (lostLife ? 1 : 0) <= 0) {
      setGameOver(true);
      return;
    }

    // Move to next level
    const newLevel = currentLevel + 1;
    if (newLevel >= levelSequence.length) {
      // Completed all levels
      setGameOver(true);
    } else {
      setCurrentLevel(newLevel);
    }
  }

  if (!levelSequence.length) {
    return <div>No levels available for this age group.</div>;
  }

  if (gameOver) {
    // Win if we reached beyond last level with lives > 0, lose if lives <= 0
    const didWin = lives > 0 && currentLevel >= levelSequence.length;
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Scoreboard />
        <h2>{didWin ? 'Congratulations!' : 'Game Over!'}</h2>
        <p>{didWin ? 'You completed all levels!' : 'You ran out of lives.'}</p>
        <p>Final Score: {score}</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Scoreboard />
      {levelSequence[currentLevel]}
    </div>
  );
}

export default GameFlow;
