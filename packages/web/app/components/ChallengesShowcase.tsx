'use client';

import React from 'react';

const ChallengesShowcase = () => {
  return (
    <section className="challenges">
      <h2>Featured Challenges</h2>
      <div className="challenge-carousel">
        <div className="challenge-card">
          <h4>Quantum Computing Simulation</h4>
          <p>Build a quantum circuit simulator with visualization</p>
        </div>
        {/* Add more challenge cards as needed */}
      </div>
    </section>
  );
};

export default ChallengesShowcase;
