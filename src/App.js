import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserSettingsProvider } from './UserSettingsContext';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AgeAllergenSelection from './pages/AgeAllergenSelection';
import GamesPage from './pages/GamesPage';
import AboutAllergies from './pages/AboutAllergies';
import Resources from './pages/Resources';
import TipsQuiz from './pages/TipsQuiz';

import GameFlow from './games/GameFlow'; // The "engine"
import SortingPlateGame from './games/SortingPlateGame';
import CrossContaminationGame from './games/CrossContaminationGame';
import RestaurantScenarioGame from './games/RestaurantScenarioGame';
import LabelReadingGame from './games/LabelReadingGame';

function App() {
  return (
    <UserSettingsProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/age-allergen-selection" element={<AgeAllergenSelection />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/about-allergies" element={<AboutAllergies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tips-quiz" element={<TipsQuiz />} />

            {/* GameFlow is an overarching "multi-level" approach */}
            <Route path="/game-flow" element={<GameFlow />} />

            {/* Individual game routes if needed */}
            <Route path="/games/sorting" element={<SortingPlateGame />} />
            <Route path="/games/cross" element={<CrossContaminationGame />} />
            <Route path="/games/restaurant" element={<RestaurantScenarioGame />} />
            <Route path="/games/label" element={<LabelReadingGame />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </UserSettingsProvider>
  );
}

export default App;
