import React, { useContext } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';

function Scoreboard() {
  const { score, lives } = useContext(UserSettingsContext);

  return (
    <div className="scoreboard">
      <span>Score: {score}</span>
      <span>Lives: {lives}</span>
    </div>
  );
}

export default Scoreboard;
