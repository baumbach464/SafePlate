import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserSettingsContext } from '../UserSettingsContext';

function GamesPage() {
  const { ageGroup } = useContext(UserSettingsContext);

  const isYoung = ageGroup === '2-4';
  const isMiddle = ageGroup === '5-7' || ageGroup === '8-12';
  const isTeen = ageGroup === 'teens';

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h2>Games for Age Group: {ageGroup || 'Unknown'}</h2>
      <p>Select a game to start!</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {/* Always show Sorting Plate */}
        <Link to="/games/sorting" className="game-card">
          Sorting Plate Game
        </Link>

        {/* Cross Contamination - maybe for ages 5+ */}
        {(isMiddle || isTeen) && (
          <Link to="/games/cross" className="game-card">
            Cross-Contamination Kitchen
          </Link>
        )}

        {/* Restaurant Scenario for 8+ or teens */}
        {(ageGroup === '8-12' || isTeen) && (
          <Link to="/games/restaurant" className="game-card">
            Restaurant Scenario
          </Link>
        )}

        {/* Label Reading for older kids or teens */}
        {(ageGroup === '8-12' || isTeen) && (
          <Link to="/games/label" className="game-card">
            Label Reading Challenge
          </Link>
        )}

        {/* Or a multi-level approach */}
        <Link to="/game-flow" className="game-card">
          Multi-Level Adventure
        </Link>
      </div>
    </div>
  );
}

export default GamesPage;
