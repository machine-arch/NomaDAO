import React, { useState } from 'react';
import MarketplaceLogin from '../MarketplaceLogin/MarketplaceLogin.component.jsx';
import MarketplaceRegister from '../MarketplaceRegister/MarketplaceRegister.component.jsx';
import './AuthMarketplace.stylesheet.css';

export default function AuthMarketplace() {
  const [type, setType] = useState('login');

  function handleSwitch() {
    console.log('Switching forms');
    if (type === 'login') {
      setType('register');
    } else {
      setType('login');
    }
  }
  return (
    <div className="authMarketplace-wrapper">
      <div className="authMarketplace-flex">
        <span className="authMarketplace-text">Login</span>
        <div className="authMarketplace-checkBoxWrapper">
          <input
            id="type"
            type="checkbox"
            onChange={handleSwitch}
            checked={type === 'register'}
            className="authMarketplace-checkBox"
          />
          <label htmlFor="type" className="authMarketplace-checkBoxLabel" />
        </div>
        <span className="authMarketplace-text">Register</span>
      </div>
      {type === 'login' ? (
        <MarketplaceLogin switchToRegister={handleSwitch} />
      ) : (
        <MarketplaceRegister switchToRegister={handleSwitch} />
      )}
    </div>
  );
}
