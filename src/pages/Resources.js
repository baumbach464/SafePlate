import React, { useState } from 'react';

function Resources() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="resources" style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 20px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#4a4a4a' }}>Resources for Parents</h2>
      <div>
        <h3 onClick={() => toggleSection('allergyBasics')} style={{ cursor: 'pointer', color: '#4fc1e9' }}>
          Allergy Basics {expandedSection === 'allergyBasics' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'allergyBasics' && (
          <div style={{ padding: '10px 20px' }}>
            <p>Learn what food allergies are, how they affect your child, and tips for managing them.</p>
          </div>
        )}
      </div>
      <div>
        <h3 onClick={() => toggleSection('labelReading')} style={{ cursor: 'pointer', color: '#4fc1e9' }}>
          Label Reading Tips {expandedSection === 'labelReading' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'labelReading' && (
          <div style={{ padding: '10px 20px' }}>
            <p>Discover how to read food labels, identify hidden allergens, and choose safe products.</p>
          </div>
        )}
      </div>
      <div>
        <h3 onClick={() => toggleSection('emergency')} style={{ cursor: 'pointer', color: '#4fc1e9' }}>
          Emergency Preparedness {expandedSection === 'emergency' ? '▲' : '▼'}
        </h3>
        {expandedSection === 'emergency' && (
          <div style={{ padding: '10px 20px' }}>
            <p>Find tips on creating an emergency action plan, using EpiPens, and communicating with schools.</p>
          </div>
        )}
      </div>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1em' }}>For more detailed info, visit:</p>
        <p>
          <a href="https://www.cdc.gov/foodallergies/index.html" target="_blank" rel="noreferrer" style={{ color: '#4fc1e9', textDecoration: 'none' }}>CDC Food Allergies</a> |{' '}
          <a href="https://www.foodallergy.org" target="_blank" rel="noreferrer" style={{ color: '#4fc1e9', textDecoration: 'none' }}>FARE</a> |{' '}
          <a href="https://www.aaaai.org" target="_blank" rel="noreferrer" style={{ color: '#4fc1e9', textDecoration: 'none' }}>AAAAI</a>
        </p>
      </div>
    </div>
  );
}

export default Resources;
