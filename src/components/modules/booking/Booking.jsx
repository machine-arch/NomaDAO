import React, { useEffect, useState, useContext, useRef } from 'react';
import './Booking.css';
import BookingSearch from './BookingSearch/BookingSearch.component';
import BookingSearchResult from './BookingSearchResult/BookingSearchResult.component';
import BookingSearchBarFilterBack from './BookingSearchBarFilterBack/BookingSearchBarFilterBack.component';
import SignIn from '../../SignIn/SignIn.component';
import AsideContext from '../../../context/AsideContext.js';
import { GlobalContext } from '../../../context/global.context.jsx';
import BookingUtil from '../../../utils/navigation.util';
import configuration from '../../../navigateConfig.js';
import useMoveSound from '../../../hooks/useMoveSound';
import _, { set } from 'lodash';
import useFetch from '../../../hooks/useFetch/useFetch';
import useDebounce from '../../../hooks/useDebounce/useDebounce';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const [showResult, setShowResult] = useState(false);
  const bookingUtil = new BookingUtil();

  const [location, setLocation] = useState(null);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [locationFilterData, setLocationFilterData] = useState([]);
  const [locationFilterDataCopy, setLocationFilterDataCopy] = useState([]);

  const [locationDataFetched, setLocationDataFetched] = useState(false);

  const [data, setData] = useState([]);

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    rooms: 0,
  });

  const [filterDisplay, setFilterDisplay] = useState({
    location: false,
    date: false,
    guests: false,
  });

  const fetchSuggestions = (e) => {
    if (e.target.value.length == 0) {
      setLocationFilterDataCopy([]);
      setLocationFilterData([]);
      setLocationDataFetched(false);
    }
    if (e.key === 'Enter') {
      return;
    }
    if (e.target.value?.length > 2 && locationDataFetched == true) {
      const inputValue = e.target.value.toLowerCase();
      const filteredData = locationFilterDataCopy?.filter((item) =>
        item.toLowerCase().includes(inputValue),
      );
      setLocationFilterData(filteredData);
      setLocation(e.target.value);
    }
    if (e.target.value?.length > 2 && locationDataFetched == false) {
      axios({
        method: 'POST',
        url: `${import.meta.env.VITE_API_URL}/hotel-filter/sugestions`,
        data: {
          locationSuggestions: e.target?.value,
        },
      })
        .then((res) => {
          setLocationFilterData(res?.data?.content);
          setLocationFilterDataCopy(res?.data?.content);
          setLocationDataFetched(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const { asideActive, setAsideActive, pages, activePage, setActivePage } =
    useContext(AsideContext);
  const { state, dispatch } = useContext(GlobalContext);
  const [canNavigate, setCanNavigate] = useState(false);
  const activeHomeComponent = useRef(null);
  const activeComponent = useRef(null);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const locationn = useLocation();

  function startup() {
    if (!asideActive && !showFilterBox) {
      const firstHomeEl = Object.keys(configuration?.booking?.home)[1];
      const searchComponents =
        configuration?.booking?.home[firstHomeEl]?.components;
      if (!searchComponents) return;
      const firstSearchEl = Object.keys(searchComponents)[0];
      searchComponents[firstSearchEl].isActive = true;
      document.querySelector(`.${firstSearchEl}`).focus();
      const newConfig = JSON.parse(JSON.stringify(configuration));
      dispatch({
        type: 'SET_CONFIG',
        payload: newConfig,
      });
      activeHomeComponent.current = firstHomeEl;
      activeComponent.current = firstSearchEl;
      setCanNavigate(true);
    } else {
      setCanNavigate(false);
    }
  }

  useEffect(() => {
    if (state?.persist) {
      fetch(`${import.meta.env.VITE_API_URL}/hotel/?page=${1}&&limit=${10}`)
        .then((res) => {
          res.json().then((data) => {
            setData(data?.content);
            setShowResult(true);
            dispatch({
              type: 'SET_PERIST',
              payload: false,
            });
          });
        })
        .then(async () => {
          const tcomponents = configuration?.booking?.home?.search?.components;
          const tcomponentsKeys = Object.keys(tcomponents);
          tcomponents[tcomponentsKeys[0]].isActive = false;
          const newConfig = JSON.parse(JSON.stringify(configuration));
          dispatch({
            type: 'SET_CONFIG',
            payload: newConfig,
          });
          let activeDomElement = null;
          const timeout = () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                activeDomElement = document.querySelector(
                  '.booking-results-active-element',
                );
                resolve();
              }, 500);
            });
          };
          await timeout();
          console.log(activeDomElement);
          if (activeDomElement) {
            activeDomElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
            activeDomElement.focus();
            activeHomeComponent.current = 'results';
            activeComponent.current = 'booking__result__box';
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [state?.persist]);

  useEffect(() => {
    startup();
  }, [asideActive]);

  useEffect(() => {
    if (showFilterBox) {
      const parent = 'filter_box';
      const firstHomeEl = Object.keys(
        configuration?.booking?.home[parent]?.home,
      )[0];

      const searchComponents =
        configuration?.booking?.home[parent]?.home[firstHomeEl]?.components;
      if (!searchComponents) return;

      const firstSearchEl = Object.keys(searchComponents)[0];
      searchComponents[firstSearchEl].isActive = true;
      activeHomeComponent.current = firstHomeEl;
      const newConfig = JSON.parse(JSON.stringify(configuration));
      dispatch({
        type: 'SET_CONFIG',
        payload: newConfig,
      });
      activeComponent.current = firstSearchEl;
    }
  }, [showFilterBox]);

  const handleKeyPress = (
    e,
    componentKeys,
    currentHomeIndex,
    home,
    components,
    homeKeys,
  ) => {
    switch (e.keyCode) {
      case 39:
        bookingUtil.moveRight(
          activeHomeComponent,
          activeComponent,
          home,
          dispatch,
          configuration,
          _,
        );
        useMoveSound();
        break;
      case 37:
        bookingUtil.moveLeft(
          activeComponent,
          activeHomeComponent,
          home,
          dispatch,
          configuration,
          _,
          setAsideActive,
        );
        useMoveSound();
        break;
      case 40:
        bookingUtil.moveDown(
          currentHomeIndex,
          homeKeys,
          activeHomeComponent,
          home,
          dispatch,
          configuration,
          activeComponent,
          _,
          showFilterBox,
        );
        useMoveSound();
        break;
      case 38:
        bookingUtil.moveUp(
          currentHomeIndex,
          homeKeys,
          activeHomeComponent,
          home,
          dispatch,
          configuration,
          activeComponent,
          _,
        );
        useMoveSound();
        break;
      case 'Enter':
        break;
      case 'Backspace':
        if (showFilterBox) {
          setShowFilterBox(false);
          activeHomeComponent.current = 'filter';
          return;
        }
        break;
      default:
        break;
    }
  };

  const eventHendler = (e) => {
    let components = null;
    let componentKeys = null;
    let homeKeys = null;
    let currentHomeIndex = null;
    let home = null;
    activeComponent.current = activeComponent.current;
    if (showFilterBox) {
      components =
        configuration?.booking?.home?.filter_box?.home[
          activeHomeComponent.current
        ]?.components;
      if (components) {
        home = configuration?.booking?.home?.filter_box?.home;
        componentKeys = Object.keys(components);
        homeKeys = Object.keys(
          configuration?.booking?.home?.filter_box?.home || {},
        );
      }
      currentHomeIndex = homeKeys.indexOf(activeHomeComponent.current);
    } else {
      components =
        configuration?.booking?.home[activeHomeComponent.current]?.components;
      if (components) {
        home = configuration?.booking?.home;
        componentKeys = Object.keys(components);
        homeKeys = Object.keys(configuration?.booking?.home || {});
        currentHomeIndex = homeKeys.indexOf(activeHomeComponent.current);
      }
    }

    handleKeyPress(
      e,
      componentKeys,
      currentHomeIndex,
      home,
      components,
      homeKeys,
    );
  };

  useEffect(() => {
    canNavigate ? window.addEventListener('keydown', eventHendler) : null;
    return () => {
      window.removeEventListener('keydown', eventHendler);
    };
  }, [activeComponent.current, state?.config, showFilterBox, asideActive]);

  const toggleResults = () => {
    const data = {
      location: location,
    };
    fetch(`${import.meta.env.VITE_API_URL}/hotel-filter?page=1&limit=10`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json().then((data) => {
          setData(data?.content);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setShowResult((prev) => !prev);
    configuration.booking.home.results.display =
      !configuration.booking.home.results.display;
    configuration.booking.home.results.factory.index = 0;

    console.log(configuration.booking.home.results.display);
  };

  const filterResults = (e) => {
    if (e.key !== 'Enter' && e.type !== 'click') return;
    configuration.booking.home.filter.display =
      !configuration.booking.home.filter.display;
    toggleResults();
  };

  return (
    <div className="booking__mainContainer">
      <div className={`topBg ${showResult == true ? 'showResults' : ''}`}>
        <SignIn
          type={showResult == true ? 'secondary' : 'primary'}
          config={configuration?.booking?.home?.auth}
        />
        <BookingSearch
          locationFilterData={locationFilterData}
          setLocationFilterData={setLocationFilterData}
          filterResults={filterResults}
          data={data}
          location={location}
          setLocation={setLocation}
          guests={guests}
          setGuests={setGuests}
          filterDisplay={filterDisplay}
          fetchSuggestions={fetchSuggestions}
          setFilterDisplay={setFilterDisplay}
          toggleResults={toggleResults}
          setData={setData}
          dates={dates}
          setDates={setDates}
          config={configuration?.booking?.home?.search}
        />
        {showResult == true && (
          <BookingSearchBarFilterBack
            config={configuration?.booking?.home}
            showFilterBox={showFilterBox}
            setShowFilterBox={setShowFilterBox}
          />
        )}
      </div>
      {showResult == true && (
        <div className="bottom">
          <div className="bottom_bgOverlay"></div>
          <div className="bottom__results">
            {data?.map((oneBooking, index) => {
              return (
                <BookingSearchResult
                  data={oneBooking}
                  id={oneBooking.id}
                  key={index}
                  index={index}
                  config={configuration?.booking?.home?.results}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
