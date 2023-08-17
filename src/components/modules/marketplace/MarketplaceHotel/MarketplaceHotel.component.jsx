import React, { useState, useEffect, useContext } from 'react';
import marketplace from '../../../../assets/images/marketplace_logo.png';
import MarketplaceNavItem from '../MarketplaceNavItem/MarketplaceNavItem.component.jsx';
import { Outlet, useNavigate } from 'react-router-dom';
import settings from '../../../../assets/images/settings.svg';
import logout from '../../../../assets/images/logout.svg';
import bell from '../../../../assets/images/notification.svg';
import Popup from '../Popup/Popup.jsx';
import useMoveSound from '../../../../hooks/useMoveSound.js';
import useRemoveSpaces from '../../../../hooks/useRemoveSpaces.js';
import './MarketplaceHotel.stylesheet.css';

export default function MarketplaceHotel() {
  const navigate = useNavigate();
  const moveSound = useMoveSound;

  // const marketplaceContext = useContext(MarketplaceContext);

  // const { marketplaceActive} = marketplaceContext;

  const removeSpaces = useRemoveSpaces;
  const [popup, setPopup] = useState(false);
  const navigationtopfour = [
    'Home',
    'Control Panel',
    'Group Requests',
    'Active Balance',
  ];

  const navigation = [
    'Home',
    'Control Panel',
    'Group Requests',
    'Active Balance',
    'Settings',
    'Logout',
  ];
  const [currentPage, setCurrentPage] = useState('Home');

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    function handleKeyDown(event) {
      let currentIndex = navigation.indexOf(currentPage);
      let nextIndex;

      function nextInput() {
        if (currentPage === 'Settings') {
          setCurrentPage(navigation[5]);
          // navigate("/marketplace")
        } else if (currentIndex === 5) {
          setCurrentPage(navigation[0]);
        } else {
          setCurrentPage(navigation[currentIndex + 1]);
          navigate(
            '/marketplace/hotel/' + removeSpaces(navigation[currentIndex + 1]),
          );
        }
      }

      function prevInput() {
        if (currentPage === 'Home') {
          setCurrentPage(navigation[navigation.length - 1]);
        } else {
          setCurrentPage(navigation[currentIndex - 1]);
          navigate(
            '/marketplace/hotel/' + removeSpaces(navigation[currentIndex - 1]),
          );
        }
      }

      switch (event.keyCode) {
        // Down
        case 40:
          nextInput();
          moveSound();
          break;

        // Up
        case 38:
          prevInput();
          moveSound();
          break;

        // Left
        case 37:
          moveSound();
          break;

        // Right
        case 39:
          openPage();
          console.log('gadadis');
          moveSound();
          break;
        case 13:
          if (currentPage === 'Logout') {
            navigate('/marketplace');
          }
          break;

        default:
          break;
      }

      function openPage() { }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, navigate, navigation, removeSpaces]);

  return (
    <div className="marketplaceHotel-wrapper">
      {popup && <Popup setPopup={setPopup} name="Tour Hotel #2" />}
      <div className="marketplaceHotel-userInfo">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="marketplaceHotel-organe" />
          <div>
            <p className="marketplaceHotel-userName">Karim Benzema</p>
            <p className="marketplaceHotel-userTitle">Admin</p>
          </div>
        </div>
        <img className="marketplaceHotel-img" src={bell} alt="bell" />
      </div>
      <aside className="marketplaceHotel-aside">
        <img
          className="marketplaceHotel-logo"
          src={marketplace}
          alt="Marketplace Logo"
        />
        <nav className="marketplaceHotel-navigation">
          {navigationtopfour.map((item) => (
            <MarketplaceNavItem
              // click={handleClick}
              name={item}
              key={item}
              active={item === currentPage ? 'true' : 'false'}
            />
          ))}
        </nav>
        {navigation.map((item, index) => (
          <div
            className="marketplaceHotel-settings"
            key={index}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={() => {
              navigate('/marketplace/hotel/Settings');
              setCurrentPage('Settings');
            }}
            style={{
              color: currentPage === navigation[4] ? 'white' : '#4c4c4c',
              backgroundColor:
                currentPage === navigation[4] ? '#3F3F3F' : 'transparent',
              img:
                currentPage === navigation[4]
                  ? 'brightness(0) invert(1)'
                  : 'none',
            }}
          >
            <img
              style={imageStyles}
              onFocus={(e) => {
                e.target.style.filter = focusedImageStyles.filter;
              }}
              onBlur={(e) => {
                e.target.style.filter = imageStyles.filter;
              }}
              src={settings}
              alt="settings"
            />

            <span>Settings</span>
          </div>
        ))}
        <div
          className="marketplaceHotel-logout"
          onClick={() => {
            navigate('/Marketplace');
          }}
          style={{
            color: currentPage === navigation[5] ? 'white' : '#a65959',
            backgroundColor:
              currentPage === navigation[5] ? '#7A4242' : 'transparent',
            img:
              currentPage === navigation[5]
                ? 'brightness(0) invert(1)'
                : 'none',
          }}
        >
          <img
            style={imageStyles}
            onFocus={(e) => {
              e.target.style.filter = focusedImageStyles.filter;
            }}
            onBlur={(e) => {
              e.target.style.filter = imageStyles.filter;
            }}
            src={logout}
            alt="Logout"
          />
          <span>Logout</span>
        </div>
      </aside>
      <Outlet context={{ setPopup }} />
    </div>
  );
}

const imageStyles = {
  marginRight: '12px',
  width: '30px',
};

const focusedImageStyles = {
  filter: 'grayscale(100%) opacity(0.5)',
};
