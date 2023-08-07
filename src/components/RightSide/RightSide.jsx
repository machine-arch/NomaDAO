import React, { useContext } from "react";
import SearchIcon from "../../assets/images/search.png";
import MicrophoneIcon from "../../assets/images/microphone.png";
import { Outlet } from "react-router-dom";
import AsideContext from "../../context/AsideContext.js";
import "./RightSide.css";

export default function RightSide() {
  const asideContext = useContext(AsideContext);
  const { pages, activePage } = asideContext;
  const isBooking = pages[activePage] === "Book Your Hotel";
  const isMarketplace = pages[activePage] === "Marketplace";

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
            style={{ marginLeft: isBooking && "auto" }}
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

const Right = styled.div`
  width: 75vw;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 60px 35px 40px;

  position: relative;
  z-index: 2;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 496px;
  height: 40px;
  background: rgba(34, 121, 179, 0.5);
  backdrop-filter: blur(9.5px);
  border-radius: 32px;
`;
const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  padding-left: 70px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 30px center;
  height: 20px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #d8d8d8;
  border-right: 1px solid white;
  &:focus {
    outline: none;
  }
  &::placeholder {
    outline: none;
    color: #d8d8d8bf;
  }
`;
const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 20px;
  color: #d8d8d8bf;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
`;
const Button = styled.button`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ececec;
  border: none;
  background-color: transparent;
  &:first-child {
    padding-right: 30px;
    margin-right: 30px;
    border-right: 2px solid #ececec;
    margin-right: 10px;
  }
`;
const VoiceSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 20px;
  color: #d8d8d8bf;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
`;
