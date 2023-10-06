import React, { useContext, useEffect, useState, useRef } from 'react';
import './BookingDetailed.stylesheet.css';
import BookingDetailedSlider from './BookingDetailedSlider/BookingDetailedSlider.component';
import BookingDetailedDescription from './BookingDetailedDescription/BookingDetailedDescription.component';
import BookingDetailedLocation from './BookingDetailedLocation/BookingDetailedLocation.component';
import BookingDetailedRooms from './BookingDetailedRooms/BookingDetailedRooms.component';
import SignIn from '../../../SignIn/SignIn.component';
import BookingComplete from './BookingComplete/BookingComplete.component';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../../../context/global.context.jsx';
import BookingUtil from '../../../../utils/navigation.util';
import useMoveSound from '../../../../hooks/useMoveSound';
import configuration from '../../../../navigateConfig';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

const BookingDetailed = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const originalConfig = configuration;

  const bookingUtil = new BookingUtil();
  const moveSound = useMoveSound;

  const [canNavigate, setCanNavigate] = useState(false);
  const activeHomeComponent = useRef(null);
  const activeComponent = useRef(null);
  const [showFilterBox, setShowFilterBox] = useState(false);

  function startup() {
    const firstHomeEl = Object.keys(
      state?.config?.booking?.home?.hotel_detalis?.home,
    )[0];

    const searchComponents =
      state?.config?.booking?.home?.hotel_detalis?.home[firstHomeEl]
        ?.components;
    if (!searchComponents) return;
    const firstSearchEl = Object.keys(searchComponents)[0];
    searchComponents[firstSearchEl].isActive = true;
    activeHomeComponent.current = firstHomeEl;
    activeComponent.current = firstSearchEl;
    setCanNavigate(true);
  }

  useEffect(() => {
    startup();
  }, []);

  const handleKeyPress = (e, currentHomeIndex, home, components, homeKeys) => {
    switch (e.keyCode) {
      case 39:
        bookingUtil.moveRight(
          activeHomeComponent,
          activeComponent,
          home,
          dispatch,
          state?.config,
          _,
        );
        moveSound();
        break;
      case 37:
        bookingUtil.moveLeft(
          activeComponent,
          activeHomeComponent,
          home,
          dispatch,
          state?.config,
          _,
        );
        moveSound();
        break;
      case 40:
        bookingUtil.moveDown(
          currentHomeIndex,
          homeKeys,
          activeHomeComponent,
          home,
          dispatch,
          state?.config,
          activeComponent,
          _,
        );
        moveSound();
        break;
      case 38:
        bookingUtil.moveUp(
          currentHomeIndex,
          homeKeys,
          activeHomeComponent,
          home,
          dispatch,
          state?.config,
          activeComponent,
          _,
        );
        moveSound();
        break;
      case 'Enter':
        break;
      case 'Backspace':
        if (showFilterBox) {
          setShowFilterBox(false);
          activeHomeComponent.current = 'filter';
        }
        break;
      default:
        break;
    }
  };

  const eventHendler = (e) => {
    let components = null;
    let homeKeys = null;
    let currentHomeIndex = null;
    let home = null;
    activeComponent.current = activeComponent.current;
    components =
      state?.config?.booking?.home?.hotel_detalis?.home[
        activeHomeComponent.current
      ]?.components;
    if (components) {
      home = state?.config?.booking?.home?.hotel_detalis?.home;
      homeKeys = Object.keys(
        state?.config?.booking?.home?.hotel_detalis?.home || {},
      );
      currentHomeIndex = homeKeys.indexOf(activeHomeComponent.current);
    }

    handleKeyPress(e, currentHomeIndex, home, components, homeKeys);
  };

  useEffect(() => {
    canNavigate ? window.addEventListener('keydown', eventHendler) : null;
    return () => {
      window.removeEventListener('keydown', eventHendler);
    };
  }, [activeComponent.current, state?.config]);
  const params = useParams();
  const id = params.id;
  return (
    <div className="detailed_conteiner">
      <div className="detailedBg">
        <SignIn
          type="secondary"
          config={state?.config?.booking?.home?.hotel_detalis?.home?.auth}
        />
        <button
          className={`${state?.config?.booking?.home?.hotel_detalis?.home?.back?.components?.back__btn?.className}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              dispatch({
                type: 'SET_PERIST',
                payload: true,
              });
              navigate('/BookYourHotel');
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 21 19"
            fill="none"
          >
            <path
              d="M3.27273 9H18.7273C18.9322 9 19.1288 9.05268 19.2737 9.14645C19.4186 9.24021 19.5 9.36739 19.5 9.5C19.5 9.63261 19.4186 9.75979 19.2737 9.85355C19.1288 9.94732 18.9322 10 18.7273 10H3.27273C3.06779 10 2.87124 9.94732 2.72633 9.85355C2.58141 9.75979 2.5 9.63261 2.5 9.5C2.5 9.36739 2.58141 9.24021 2.72633 9.14645C2.87124 9.05268 3.06779 9 3.27273 9Z"
              fill="#202020"
            />
            <path
              d="M3.47601 9.5L10.2601 15.7182C10.4137 15.859 10.5 16.05 10.5 16.2491C10.5 16.4483 10.4137 16.6393 10.2601 16.7801C10.1065 16.9209 9.89822 17 9.68101 17C9.4638 17 9.25549 16.9209 9.1019 16.7801L1.7403 10.0309C1.66413 9.96127 1.6037 9.87852 1.56246 9.78741C1.52123 9.69631 1.5 9.59864 1.5 9.5C1.5 9.40136 1.52123 9.30369 1.56246 9.21259C1.6037 9.12148 1.66413 9.03873 1.7403 8.96907L9.1019 2.21992C9.25549 2.07911 9.4638 2 9.68101 2C9.89822 2 10.1065 2.07911 10.2601 2.21992C10.4137 2.36073 10.5 2.55171 10.5 2.75085C10.5 2.94999 10.4137 3.14097 10.2601 3.28179L3.47601 9.5Z"
              fill="#202020"
            />
          </svg>
          Back
        </button>
      </div>
      <div className="bgOverlay"></div>
      <div className="bgOverlayContent">
        <div className="title__rating">
          <div className="title__rating__left">
            <div>
              <h1 className="hotel__title">The Tower Plaza Hotel Dubai</h1>
              <div className="right__top__left_bottom">
                <div className="stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.90287 14.3525L13.2696 16.3888C13.8862 16.7619 14.6406 16.2103 14.4784 15.5126L13.586 11.6834L16.5633 9.10363C17.1069 8.6331 16.8148 7.74071 16.1009 7.68392L12.1825 7.3513L10.6492 3.73308C10.3734 3.07595 9.43234 3.07595 9.15651 3.73308L7.62322 7.34319L3.70483 7.67581C2.99092 7.7326 2.69887 8.62498 3.24241 9.09552L6.21974 11.6753L5.32735 15.5045C5.1651 16.2022 5.91957 16.7538 6.53613 16.3806L9.90287 14.3525Z"
                      fill="#FE8B48"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.90287 14.3525L13.2696 16.3888C13.8862 16.7619 14.6406 16.2103 14.4784 15.5126L13.586 11.6834L16.5633 9.10363C17.1069 8.6331 16.8148 7.74071 16.1009 7.68392L12.1825 7.3513L10.6492 3.73308C10.3734 3.07595 9.43234 3.07595 9.15651 3.73308L7.62322 7.34319L3.70483 7.67581C2.99092 7.7326 2.69887 8.62498 3.24241 9.09552L6.21974 11.6753L5.32735 15.5045C5.1651 16.2022 5.91957 16.7538 6.53613 16.3806L9.90287 14.3525Z"
                      fill="#FE8B48"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.90287 14.3525L13.2696 16.3888C13.8862 16.7619 14.6406 16.2103 14.4784 15.5126L13.586 11.6834L16.5633 9.10363C17.1069 8.6331 16.8148 7.74071 16.1009 7.68392L12.1825 7.3513L10.6492 3.73308C10.3734 3.07595 9.43234 3.07595 9.15651 3.73308L7.62322 7.34319L3.70483 7.67581C2.99092 7.7326 2.69887 8.62498 3.24241 9.09552L6.21974 11.6753L5.32735 15.5045C5.1651 16.2022 5.91957 16.7538 6.53613 16.3806L9.90287 14.3525Z"
                      fill="#FE8B48"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.90287 14.3525L13.2696 16.3888C13.8862 16.7619 14.6406 16.2103 14.4784 15.5126L13.586 11.6834L16.5633 9.10363C17.1069 8.6331 16.8148 7.74071 16.1009 7.68392L12.1825 7.3513L10.6492 3.73308C10.3734 3.07595 9.43234 3.07595 9.15651 3.73308L7.62322 7.34319L3.70483 7.67581C2.99092 7.7326 2.69887 8.62498 3.24241 9.09552L6.21974 11.6753L5.32735 15.5045C5.1651 16.2022 5.91957 16.7538 6.53613 16.3806L9.90287 14.3525Z"
                      fill="#FE8B48"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.90287 14.3525L13.2696 16.3888C13.8862 16.7619 14.6406 16.2103 14.4784 15.5126L13.586 11.6834L16.5633 9.10363C17.1069 8.6331 16.8148 7.74071 16.1009 7.68392L12.1825 7.3513L10.6492 3.73308C10.3734 3.07595 9.43234 3.07595 9.15651 3.73308L7.62322 7.34319L3.70483 7.67581C2.99092 7.7326 2.69887 8.62498 3.24241 9.09552L6.21974 11.6753L5.32735 15.5045C5.1651 16.2022 5.91957 16.7538 6.53613 16.3806L9.90287 14.3525Z"
                      fill="#FE8B48"
                    />
                  </svg>
                </div>
                <button className="btn__partner">Partners Hotels</button>
              </div>
            </div>
          </div>
          <div className="title__rating__right">
            <div className="right__top__right">
              <div className="right__top__right__left">
                <h1 className="review__title">Very Good</h1>
                <h1 className="review__count">214 reviews</h1>
              </div>
              <div className="right__top__right__right">
                <div className="rating__box">5/5</div>
              </div>
            </div>
          </div>
        </div>
        <BookingDetailedSlider
          config={
            state?.config?.booking?.home?.hotel_detalis?.home
              ?.detailed__slider__bg
          }
        />
        <hr className="detailed__hr"></hr>
        <BookingDetailedDescription
          config={
            state?.config?.booking?.home?.hotel_detalis?.home
              ?.description__container
          }
        />
        <hr className="detailed__hr"></hr>
        <BookingDetailedLocation
          config={
            state?.config?.booking?.home?.hotel_detalis?.home
              ?.location__conteiner
          }
        />
        <hr className="detailed__hr"></hr>
      </div>
      <BookingDetailedRooms
        config={state?.config?.booking?.home?.hotel_detalis?.home}
      />
      <BookingComplete id={id} />
    </div>
  );
};

export default BookingDetailed;
