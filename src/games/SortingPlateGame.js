import React, { useState, useContext, useEffect } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';

/*
  Two-Item Sorting Plate Game (Fixed)
  ------------------------------------
  We corrected the reference to safePlate by moving the threshold check
  inside the setSafePlate callback, preventing "safePlate is not defined" errors.
*/

const allergenEmojis = {
  milk: '🥛',
  peanuts: '🥜',
  eggs: '🥚',
  wheat: '🌾',
  fish: '🐟',
  shellfish: '🦐',
  soy: '🌱',
  tree_nuts: '🌰',
  sesame: '🌿'
};

const FOOD_ITEMS = [
  { id: 1, name: 'Milk Carton', allergens: ['milk'], emoji: '🥛' },
  { id: 2, name: 'Peanut Butter', allergens: ['peanuts'], emoji: '🥜' },
  { id: 3, name: 'Apple', allergens: [], emoji: '🍎' },
  { id: 4, name: 'Bread', allergens: ['wheat'], emoji: '🍞' },
  { id: 5, name: 'Egg Omelette', allergens: ['eggs'], emoji: '🍳' },
  { id: 6, name: 'Carrot', allergens: [], emoji: '🥕' },
  { id: 7, name: 'Fish Stick', allergens: ['fish'], emoji: '🐟' },
  { id: 8, name: 'Yogurt', allergens: ['milk'], emoji: '🥛' },
  { id: 9, name: 'Banana', allergens: [], emoji: '🍌' },
  { id: 10, name: 'Cereal', allergens: ['wheat'], emoji: '🥣' },
  { id: 11, name: 'Cookie', allergens: ['eggs','wheat'], emoji: '🍪' },
  { id: 12, name: 'Smoothie', allergens: ['milk'], emoji: '🥤' },
  { id: 13, name: 'Salad', allergens: [], emoji: '🥗' }
];

/* Quick ephemeral feedback bubble */
const FeedbackBubble = ({ x, y, text, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove();
    }, 1000); // disappears after 1 second
    return () => clearTimeout(timer);
  }, [onRemove]);
  
  return (
    <div style={{
      position: 'fixed',
      left: x,
      top: y,
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(255,255,255,0.9)',
      padding: '5px 10px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      pointerEvents: 'none',
      fontSize: '1.2em',
      color: '#333',
      zIndex: 3000
    }}>
      {text}
    </div>
  );
};

function SortingPlateGame({ next = () => {} }) {
  const { allergen, ageGroup } = useContext(UserSettingsContext);
  const currentAllergen = allergen || 'peanuts';
  const allergenEmoji = allergenEmojis[currentAllergen] || '🥜';

  // Game state
  const [gamePhase, setGamePhase] = useState('tutorial'); // 'tutorial', 'playing', 'finished'
  const [tutorialVisible, setTutorialVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [mistakes, setMistakes] = useState(0);
  const [roundIndex, setRoundIndex] = useState(0);
  const [feedbackBubbles, setFeedbackBubbles] = useState([]);
  const [endResult, setEndResult] = useState(null); // 'win' or 'lose'
  const [pairs, setPairs] = useState([]); // array of { safeItem, unsafeItem }
  const [safePlate, setSafePlate] = useState([]); // Now fully defined and used inside setSafePlate callback

  // Determine total rounds
  let totalRounds;
  if (ageGroup === '2-4') totalRounds = 3;
  else if (ageGroup === '5-7') totalRounds = 5;
  else totalRounds = 8; // can be more for older kids

  // On mount, generate pairs
  useEffect(() => {
    const newPairs = generatePairs(totalRounds, currentAllergen);
    setPairs(newPairs);
  }, [totalRounds, currentAllergen]);

  // Timer for older kids
  useEffect(() => {
    if ((ageGroup === '8-12' || ageGroup === 'teens') && gamePhase === 'playing') {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            finishGame(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [ageGroup, gamePhase]);

  // Start playing after tutorial
  const closeTutorial = () => {
    setTutorialVisible(false);
    setGamePhase('playing');
    if (ageGroup === '8-12' || ageGroup === 'teens') {
      setTimeLeft(30);
    }
  };

  // Each round: pairs[roundIndex] => { safeItem, unsafeItem }
  const currentPair = pairs[roundIndex];

  // On item click
  const handleItemClick = (item, clickX, clickY) => {
    if (gamePhase !== 'playing') return;

    const isSafe = !item.allergens.includes(currentAllergen);
    if (!isSafe) {
      // Mistake
      createFeedback(`🚫 Wrong!`, clickX, clickY);
      setMistakes(prev => {
        const newMistakes = prev + 1;
        if (newMistakes >= 3) {
          finishGame(false);
        } else {
          nextRound();
        }
        return newMistakes;
      });
    } else {
      // Safe
      createFeedback(`✅ Correct!`, clickX, clickY);
      // Add to safePlate in callback
      setSafePlate(prev => {
        const newPlate = [...prev, item];
        // Check if we won
        if (newPlate.length >= totalRounds) {
          finishGame(true);
        } else {
          nextRound();
        }
        return newPlate;
      });
    }
  };

  const createFeedback = (text, x, y) => {
    setFeedbackBubbles(prev => [
      ...prev,
      { id: Date.now() + Math.random(), text, x, y }
    ]);
  };

  const removeFeedback = (id) => {
    setFeedbackBubbles(prev => prev.filter(fb => fb.id !== id));
  };

  // Move to next round
  const nextRound = () => {
    setRoundIndex(prev => prev + 1);
  };

  const finishGame = (won) => {
    setGamePhase('finished');
    setEndResult(won ? 'win' : 'lose');
    setTimeout(() => {
      next(won ? 50 : 0, !won);
    }, 1500);
  };

  // "Play Again" resets everything
  const resetGame = () => {
    setGamePhase('playing');
    setTutorialVisible(false);
    setTimeLeft(30);
    setMistakes(0);
    setRoundIndex(0);
    setFeedbackBubbles([]);
    setEndResult(null);
    setSafePlate([]);
    const newPairs = generatePairs(totalRounds, currentAllergen);
    setPairs(newPairs);
  };

  const renderEndOverlay = () => (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      zIndex: 3000
    }}>
      {endResult === 'win' ? (
        <>
          <h2 style={{ fontSize: '3em', marginBottom: '20px' }}>Victory!</h2>
          <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>You made all the right choices!</p>
        </>
      ) : (
        <>
          <h2 style={{ fontSize: '3em', marginBottom: '20px' }}>Game Over</h2>
          <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>Too many mistakes or time ran out!</p>
        </>
      )}
      <button onClick={resetGame} style={{
        backgroundColor: '#4fc1e9',
        color: '#fff',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '30px',
        fontSize: '1.2em',
        cursor: 'pointer'
      }}>Play Again</button>
    </div>
  );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', position: 'relative' }}>
      {gamePhase === 'finished' && renderEndOverlay()}
      
      {tutorialVisible && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: '#333',
            padding: '30px',
            borderRadius: '10px',
            maxWidth: '600px',
            width: '90%'
          }}>
            <h2 style={{ fontSize: '2.4em', marginBottom: '20px' }}>How to Play</h2>
            <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
              Two foods appear each round. Tap the one that does NOT contain {allergenEmoji}. 
              If you pick the wrong one, it counts as a mistake.
            </p>
            {(ageGroup === '8-12' || ageGroup === 'teens') && (
              <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
                You have 30 seconds total, so act fast!
              </p>
            )}
            <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
              Make 3 mistakes and the game ends. Good luck!
            </p>
            <button onClick={closeTutorial} style={{
              backgroundColor: '#4fc1e9',
              color: '#fff',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1.2em',
              cursor: 'pointer'
            }}>
              Got It!
            </button>
          </div>
        </div>
      )}

      <h2 style={{ fontSize: '2.2em', textAlign: 'center', marginBottom: '20px', color: '#e67e22' }}>
        Sorting Plate Game
      </h2>
      {(ageGroup === '8-12' || ageGroup === 'teens') && gamePhase === 'playing' && (
        <p style={{ fontSize: '1.2em', color: '#e74c3c', textAlign: 'center', marginBottom: '20px' }}>
          Time Left: {timeLeft} sec
        </p>
      )}
      {gamePhase === 'playing' && (
        <p style={{ textAlign: 'center', fontSize: '1.2em', marginBottom: '30px', color: '#555' }}>
          Round {roundIndex + 1} of {pairs.length}. Mistakes: {mistakes} / 3
        </p>
      )}

      {/* If in playing phase, show the two items */}
      {gamePhase === 'playing' && pairs[roundIndex] && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <ItemCard item={pairs[roundIndex].safeItem} onClick={handleItemClick} allergen={currentAllergen} />
          <ItemCard item={pairs[roundIndex].unsafeItem} onClick={handleItemClick} allergen={currentAllergen} />
        </div>
      )}

      {/* ephemeral feedback bubbles */}
      {feedbackBubbles.map(fb => (
        <FeedbackBubble 
          key={fb.id}
          x={fb.x}
          y={fb.y}
          text={fb.text}
          onRemove={() => removeFeedback(fb.id)}
        />
      ))}

      {/* Plate for safe items */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.4em', marginBottom: '15px', color: '#555' }}>Your Safe Plate</h3>
        <div style={{
          width: '280px',
          height: '280px',
          margin: '0 auto',
          backgroundColor: '#f9f9f9',
          border: '2px solid #ccc',
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '5rem',
            opacity: 0.15,
            color: '#aaa',
            pointerEvents: 'none'
          }}>
            🍽
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
            gap: '5px',
            width: '100%',
            height: '100%',
            padding: '10px',
            boxSizing: 'border-box'
          }}>
            {safePlate.map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '4px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                animation: 'popIn 0.3s ease'
              }}>
                <span style={{ fontSize: '1.4em' }}>{item.emoji}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Card for each item in the pair */
function ItemCard({ item, onClick }) {
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = rect.left + rect.width / 2;
    const clickY = rect.top + rect.height / 2;
    onClick(item, clickX, clickY);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '120px',
        height: '120px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2em',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'transform 0.2s ease'
      }}
    >
      {item.emoji}
    </div>
  );
}

/* Generate pairs for the game */
function generatePairs(count, allergen) {
  const safeItems = FOOD_ITEMS.filter(it => !it.allergens.includes(allergen));
  const unsafeItems = FOOD_ITEMS.filter(it => it.allergens.includes(allergen));

  const pairs = [];
  for (let i = 0; i < count; i++) {
    const safe = safeItems[Math.floor(Math.random() * safeItems.length)];
    const unsafe = unsafeItems[Math.floor(Math.random() * unsafeItems.length)];
    pairs.push({ safeItem: safe, unsafeItem: unsafe });
  }
  return pairs;
}

export default SortingPlateGame;
