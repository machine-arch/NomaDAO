import React, { useContext } from "react";
import SearchIcon from "../../../../assets/images/search.png";
import MicrophoneIcon from "../../../../assets/images/microphone.png";
import { Outlet, useLocation } from "react-router-dom";
import AsideContext from "../../../../context/AsideContext.js";
import "./RightSide.css";

export default function RightSide() {
  const location = useLocation();
  const asideContext = useContext(AsideContext);
  const { pages, activePage } = asideContext;
  const isBooking = pages[activePage] === "Book Your Hotel";
  const isMarketplace = pages[activePage] === "Marketplace";

  return (
    <div className="RightSide-right">
      {!isMarketplace && (
        <header
          style={{
            display:
              location.pathname.includes("/BookYourHotel") == true
                ? "none"
                : null,
          }}
          className="RightSide-header"
        >
          {!isBooking && (
            <div className="RightSide-search-box">
              <input
                className="RightSide-search-input"
                style={{ backgroundImage: `url(${SearchIcon})` }}
                placeholder="Search Nomadao products"
              />
              <div className="RightSide-voice-search">
                <img src={MicrophoneIcon} alt="Mic" />
                <span>Type or voice</span>
              </div>
            </div>
          )}
        </header>
      )}
      <Outlet />
    </div>
  );
}
