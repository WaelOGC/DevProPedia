'use client';

import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="newsletter">
      <h2>Stay Updated</h2>
      <div className="signup-form">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsletterSignup;
