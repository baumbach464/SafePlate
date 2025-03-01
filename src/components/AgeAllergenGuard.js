import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserSettingsContext } from '../UserSettingsContext';

function AgeAllergenGuard({ children }) {
  const { ageGroup, allergen } = useContext(UserSettingsContext);

  if (!ageGroup || !allergen) {
    return <Navigate to="/age-allergen-selection" replace />;
  }
  return children;
}

export default AgeAllergenGuard;
