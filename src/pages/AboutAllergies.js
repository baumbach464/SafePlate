import React, { useState } from 'react';
import InfoModal from '../components/InfoModal';

const allergenData = [
  { id: 'milk', label: 'Milk', emoji: '🥛', details: 'Milk and dairy products can trigger severe reactions in some children. Always check labels for dairy ingredients.' },
  { id: 'peanuts', label: 'Peanuts', emoji: '🥜', details: 'Peanuts are one of the most common allergens. Look for hidden peanut oil or butter in processed foods.' },
  { id: 'eggs', label: 'Eggs', emoji: '🥚', details: 'Eggs are present in many baked goods and sauces. They may appear as egg protein or albumin on labels.' },
  { id: 'wheat', label: 'Wheat', emoji: '🌾', details: 'Wheat is used in bread, pasta, and many snacks. Always check for gluten or wheat derivatives.' }
];

function AboutAllergies() {
  const [selectedAllergen, setSelectedAllergen] = useState(null);

  return (
    <div className="about-allergies" style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 20px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#4a4a4a' }}>About Food Allergies</h2>
      <p style={{ fontSize: '1.1em', marginBottom: '30px' }}>
        Click on an allergen below to learn more about it:
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {allergenData.map((allergen) => (
          <button key={allergen.id} onClick={() => setSelectedAllergen(allergen)} style={{
            backgroundColor: '#4fc1e9',
            color: '#fff',
            padding: '15px 20px',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1.2em',
            cursor: 'pointer',
            transition: 'transform 0.3s'
          }}>
            <span style={{ marginRight: '8px' }}>{allergen.emoji}</span> {allergen.label}
          </button>
        ))}
      </div>
      <InfoModal 
        isOpen={!!selectedAllergen}
        onClose={() => setSelectedAllergen(null)}
        title={selectedAllergen ? selectedAllergen.label : ''}
      >
        <p style={{ fontSize: '1.1em' }}>{selectedAllergen ? selectedAllergen.details : ''}</p>
      </InfoModal>
    </div>
  );
}

export default AboutAllergies;
