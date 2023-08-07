import React, { useContext } from 'react';
import SearchIcon from '../../assets/images/search.png';
import MicrophoneIcon from '../../assets/images/microphone.png';
import { Outlet } from 'react-router-dom';
import AsideContext from '../../context/AsideContext.js';
import './RightSide.css';

export default function RightSide() {
  const asideContext = useContext(AsideContext);
  const { pages, activePage } = asideContext;
  const isBooking = pages[activePage] === 'Book Your Hotel';
  const isMarketplace = pages[activePage] === 'Marketplace';

  return (
    <div className="right">
      {!isMarketplace && (
        <header className="header">
          {!isBooking && (
            <div className="search-box">
              <input
                className="search-input"
                style={{ backgroundImage: `url(${SearchIcon})` }}
                placeholder="Search Nomadao products"
              />
              <div className="voice-search">
                <img src={MicrophoneIcon} alt="Mic" />
                <span>Type or voice</span>
              </div>
            </div>
          )}
          <div
            className="buttons-box"
            style={{ marginLeft: isBooking && 'auto' }}
          >
            <button className="button">Login</button>
            <button className="button">Sign Up</button>
          </div>
        </header>
      )}
      <Outlet />
    </div>
  );
}
