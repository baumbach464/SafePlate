// src/games/AllergyMasterMealPlanner.js
import React, { useState, useContext } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';
import { FOOD_ITEMS } from '../data/foodItems';


function AllergyMasterMealPlanner({ onReturnToMenu }) {
  const { allergen } = useContext(UserSettingsContext);
  const currentAllergen = allergen || 'peanuts';

  // For teens, use the full pool of items.
  const availableItems = FOOD_ITEMS;

  const totalRounds = 5;
  const [round, setRound] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [budget] = useState(100);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [completed, setCompleted] = useState(false);

  // Generate a price map (simulate prices for each item)
  const priceMap = availableItems.reduce((acc, item) => {
    acc[item.id] = Math.floor(Math.random() * 20) + 5;
    return acc;
  }, {});

  const totalCost = selectedItems.reduce((sum, item) => sum + priceMap[item.id], 0);

  const handleSelect = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setMessage("Item already selected.");
      return;
    }
    const newCost = totalCost + priceMap[item.id];
    if (newCost > budget) {
      setMessage("Budget exceeded! Choose another item.");
      return;
    }
    if (item.allergens.includes(currentAllergen)) {
      setMessage(`Warning: ${item.name} contains ${currentAllergen}!`);
      return;
    }
    setSelectedItems(prev => [...prev, item]);
    setScore(prev => prev + 10);
    setMessage(`${item.name} added to your meal.`);
    setTimeout(() => {
      setMessage("");
      if (round < totalRounds) {
        setRound(prev => prev + 1);
      } else {
        setCompleted(true);
      }
    }, 1500);
  };

  const renderEndOverlay = () => (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      zIndex: 1000
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Meal Planned Successfully!</h1>
      <p style={{ fontSize: '1.8em', marginBottom: '20px' }}>
        You selected {selectedItems.length} items with a total cost of {totalCost} units.
      </p>
      <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>Final Score: {score}</p>
      <div>
        <button onClick={() => window.location.reload()} style={{
          fontSize: '1.5em',
          padding: '10px 20px',
          marginRight: '20px',
          borderRadius: '10px',
          backgroundColor: '#27ae60',
          color: '#fff',
          cursor: 'pointer'
        }}>
          Play Again
        </button>
        <button onClick={onReturnToMenu} style={{
          fontSize: '1.5em',
          padding: '10px 20px',
          borderRadius: '10px',
          backgroundColor: '#4fc1e9',
          color: '#fff',
          cursor: 'pointer'
        }}>
          Return to Menu
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.8em', marginBottom: '20px' }}>Allergy Master: Safe Meal Planner</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>
        Budget: {budget} units | Total Cost: {totalCost} units
      </p>
      {message && <p style={{ fontSize: '1.2em', marginBottom: '20px', color: '#333' }}>{message}</p>}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '20px'
      }}>
        {availableItems.map((item) => (
          <div key={item.id}
               onClick={() => handleSelect(item)}
               style={{
                 border: '1px solid #ccc',
                 borderRadius: '8px',
                 padding: '10px',
                 width: '140px',
                 cursor: 'pointer',
                 backgroundColor: selectedItems.find(i => i.id === item.id) ? '#a0d468' : '#fff',
                 transition: 'background-color 0.3s ease'
               }}>
            <div style={{ fontSize: '2em' }}>{item.emoji}</div>
            <p style={{ fontSize: '0.9em', margin: '5px 0' }}>{item.name}</p>
            <p style={{ fontSize: '0.8em', margin: 0 }}>Price: {priceMap[item.id]}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '30px', fontSize: '1.2em' }}>
        Round: {round} of {totalRounds} | Score: {score}
      </div>
      {completed && renderEndOverlay()}
    </div>
  );
}

export default AllergyMasterMealPlanner;
