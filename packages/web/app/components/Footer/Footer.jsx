import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="legal">
        <a href="/privacy">Privacy Policy</a>
        <span className="separator"> • </span>
        <a href="/terms">Terms of Service</a>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} DevProPedia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 