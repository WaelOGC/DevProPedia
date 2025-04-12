'use client';

import React from 'react';
import styles from './landingpage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to DevProPedia</h1>
        <p>Your ultimate developer resource</p>
      </header>
      <main className={styles.main}>
        <section className={styles.features}>
          <h2>Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Code Examples</h3>
              <p>Access a vast library of code examples</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Documentation</h3>
              <p>Comprehensive documentation for various technologies</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Community</h3>
              <p>Join our growing developer community</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
