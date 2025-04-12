'use client';

import React, { useState, useEffect } from 'react';
import { FiClock, FiBell, FiUser, FiSearch } from 'react-icons/fi';
import { SiMetamask } from 'react-icons/si';
import './Header.css';

const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsWalletConnected(true);
      } catch (error) {
        console.error('User rejected wallet connection');
      }
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <h1 className="logo typewriter">DevProPedia</h1>
          <div className="water-pipe-effect"></div>
        </div>
      </div>

      <nav className={`header-middle ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="menu-items">
          <a href="/blog" className="menu-item">Blog</a>
          <a href="/community" className="menu-item">Community</a>
          <a href="/challenges" className="menu-item">Challenges</a>
          <a href="/ai-tools" className="menu-item">AI Tools</a>
        </div>
        <div className={`search-container ${isSearchFocused ? 'focused' : ''}`}>
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
      </nav>

      <div className="header-right">
        <button className="icon-button" title="History">
          <FiClock />
        </button>
        
        <button className="icon-button notification-button" title="Notifications">
          <FiBell />
          {notificationCount > 0 && (
            <span className="notification-badge">{notificationCount}</span>
          )}
        </button>

        <button className="icon-button" title="Account">
          <FiUser />
        </button>

        <button 
          className={`wallet-button ${isWalletConnected ? 'connected' : ''}`}
          onClick={connectWallet}
          title="Connect Wallet"
        >
          <SiMetamask />
          <span className="wallet-status">
            {isWalletConnected ? 'Connected' : 'Connect'}
          </span>
        </button>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="hamburger"></div>
        </button>
      </div>
    </header>
  );
};

export default Header; 