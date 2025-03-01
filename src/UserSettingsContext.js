import React, { createContext, useState } from 'react';

export const UserSettingsContext = createContext();

export const UserSettingsProvider = ({ children }) => {
  const [ageGroup, setAgeGroup] = useState(null);
  const [allergen, setAllergen] = useState(null);

  // Optional: store overall "lives" or "score" here
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  return (
    <UserSettingsContext.Provider
      value={{
        ageGroup,
        setAgeGroup,
        allergen,
        setAllergen,
        lives,
        setLives,
        score,
        setScore
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};
