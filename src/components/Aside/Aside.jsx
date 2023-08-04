import React, { useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import AsideElement from '../AsideElement/AsideElement.jsx';
import useMoveSound from '../../hooks/useMoveSound.js';
import { useNavigate } from 'react-router-dom';
import useConditionalHandler from '../../hooks/useConditionalHandler.js';
import AsideContext from '../../context/AsideContext.js';
import useRemoveSpaces from '../../hooks/useRemoveSpaces.js';
import './Aside.css';
export default function Aside() {
  // Context
  const asideContext = useContext(AsideContext);
  // prettier-ignore
  const { asideActive, setAsideActive, pages, activePage, setActivePage} = asideContext;
  // hooks
  const moveSound = useMoveSound;
  const navigate = useNavigate();
  const removeSpaces = useRemoveSpaces;
  // adding listeners
  useConditionalHandler(asideEvents, asideActive);
  // event handlers
  function asideEvents(event) {
    switch (event.keyCode) {
      // Arrow Down
      case 40:
        nextPage();
        moveSound();
        break;
      // Arrow Up
      case 38:
        prevPage();
        moveSound();
        break;
      // Enter
      case 13:
        openPage();
        moveSound();
        break;
      // Right
      case 39:
        openPage();
        console.log('gadadis');
        moveSound();
        break;
      default:
        break;
    }
  }
  // movement functions
  function openPage() {
    setAsideActive(false);
  }

  function prevPage() {
    if (activePage === 0) {
      setActivePage(pages.length - 1);
      navigate(`/${removeSpaces(pages[pages.length - 1])}`);
    } else {
      setActivePage(activePage - 1);
      navigate(`/${removeSpaces(pages[activePage - 1])}`);
    }
  }
  function nextPage() {
    if (activePage === pages.length - 1) {
      setActivePage(0);
      navigate(`/${removeSpaces(pages[0])}`);
    } else {
      setActivePage(activePage + 1);
      navigate(`/${removeSpaces(pages[activePage + 1])}`);
    }
  }

  return (
    <aside className="styledAside">
      <img src={Logo} alt="Logo" className="Aside-logoImage" />
      <nav>
        <ul>
          {pages.map((page, index) => {
            return (
              <AsideElement
                key={page}
                name={page}
                active={index === activePage ? 'true' : 'false'}
                // prettier-ignore
                saved={Boolean((index === activePage) && !asideActive) ? "true" : "false"} // when user leaves aside navigation, page will be saved in UI
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
