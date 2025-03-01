import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoModal from '../components/InfoModal';

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="home-page" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>Welcome to SafePlate</h1>
      <p>Empowering families to learn about food allergies in fun, interactive ways.</p>

      <Link to="/age-allergen-selection" className="start-game-button">
        Get Started
      </Link>

      <div style={{ marginTop: '40px' }}>
        <button onClick={() => setModalOpen(true)} className="selection-button">
          Learn More
        </button>
      </div>

      <InfoModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="About SafePlate"
      >
        <p>
          SafePlate helps children of all ages and their parents learn how to identify and avoid allergens,
          handle emergencies, and make safe eating choices. Our mini-games are tailored to your child's age
          and specific allergen.
        </p>
      </InfoModal>
    </div>
  );
}

export default HomePage;
