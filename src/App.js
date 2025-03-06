// App.js
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

// New game components (make sure these files are placed in src/games/)
import SafePlateMatch from './games/SafePlateMatch';
import ColorfulFoodParade from './games/ColorfulFoodParade';
import SafePlateSorting from './games/SafePlateSorting';
import AllergyAdventureStory from './games/AllergyAdventureStory';
import AllergyDetective from './games/AllergyDetective';
import CafeteriaChallenge from './games/CafeteriaChallenge';
import AllergyMasterMealPlanner from './games/AllergyMasterMealPlanner';
import CrisisSimulator from './games/CrisisSimulator';

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

            {/* New game routes */}
            <Route path="/games/safeplate-match" element={<SafePlateMatch />} />
            <Route path="/games/colorful-food-parade" element={<ColorfulFoodParade />} />
            <Route path="/games/safeplate-sorting" element={<SafePlateSorting />} />
            <Route path="/games/allergy-adventure-story" element={<AllergyAdventureStory />} />
            <Route path="/games/allergy-detective" element={<AllergyDetective />} />
            <Route path="/games/cafeteria-challenge" element={<CafeteriaChallenge />} />
            <Route path="/games/allergy-master-meal-planner" element={<AllergyMasterMealPlanner />} />
            <Route path="/games/crisis-simulator" element={<CrisisSimulator />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </UserSettingsProvider>
  );
}

export default App;
