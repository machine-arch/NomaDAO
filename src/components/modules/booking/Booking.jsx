import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useMoveSound from '../../../hooks/useMoveSound.js';
import SearchedHotel from './SearchedHotel/SearchedHotel.jsx';
import './Booking-datapicker.css';
import HOTELS from '../../../data/hotels.js';
import { useNavigate } from 'react-router-dom';
import BookingContext from '../../../context/BookingContext.js';
import useConditionalHandler from '../../../hooks/useConditionalHandler.js';
import { cosine } from 'string-comparison';
import AsideContext from '../../../context/AsideContext.js';
import './Booking.css';

export default function Booking() {
  // States
  const [activeInputBox, setActiveInputBox] = useState(null);
  const [isInsideSearchBox, setIsInsideSearchBox] = useState(false);
  const [isInsideInput, setIsInsideInput] = useState(false);
  const [isInsideHotels, setIsInsideHotels] = useState(false);
  const [activeHotel, setActiveHotel] = useState(null);
  const [filteredHotels, setFilteredHotels] = useState(HOTELS);
  // hooks
  const moveSound = useMoveSound;
  const navigate = useNavigate();
  // contexts
  const asideContext = useContext(AsideContext);
  const { asideActive, setAsideActive } = asideContext;
  const bookingContext = useContext(BookingContext);
  // prettier-ignore
  const { showHotels, location, checkIn, checkOut, guests } = bookingContext.bookingParams;
  // prettier-ignore
  // used references
  const wrapperRef = useRef(null);
  const locationRef = useRef(null);
  const checkinRef = useRef(null);
  const checkoutRef = useRef(null);
  const guestsRef = useRef(null);
  const searchRef = useRef(null);
  const hotelsWrapperRef = useRef(null);
  // references of inputs
  // prettier-ignore
  let inputRefs = [locationRef, checkinRef, checkoutRef, guestsRef, searchRef];

  // useEffects

  // automatically set that user is in searchbox when this page becames active from navigation, and activate first input box
  useEffect(() => {
    if (!asideActive) {
      setIsInsideSearchBox(true);
      setActiveInputBox(1);
    }
  }, [asideActive]);

  // enable event when user is inside any box
  useConditionalHandler(searchNav, isInsideSearchBox);
  useConditionalHandler(insideInpNav, isInsideInput);
  useConditionalHandler(searchedHotelsNav, isInsideHotels);

  // filtering hotels list
  const filterHotels = useCallback(() => {
    let newHotels = HOTELS.filter(
      (hotel) =>
        // if more then 50% similar, approve filter
        cosine.similarity(
          hotel.location.toLowerCase().replace(/\s/g, ''),
          bookingContext.bookingParams.location
            .toLowerCase()
            .replace(/\s/g, ''),
        ) > 0.5,
    );
    // if none found, return all
    if (newHotels.length === 0) {
      newHotels = HOTELS;
    }
    setFilteredHotels([...newHotels]);
  }, [bookingContext.bookingParams.location]);

  // responsible to update filtered hotels list
  useEffect(() => {
    showHotels && filterHotels();
  }, [showHotels, filterHotels]);

  // Navigation event handlers
  // when user is inside hotels list
  function searchedHotelsNav(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        nextHotel();
        moveSound();
        break;

      // Up Arrow
      case 38:
        prevHotel();
        moveSound();
        break;

      // Left Arrow
      case 37:
        break;

      // Right Arrow
      case 39:
        break;

      // Backspace
      case 8:
        goBackToNavigation();
        break;

      // Back button on remote
      case 10009:
        goBackToNavigation();
        break;
      // Enter - Ok
      case 13:
        openSingleHotel();
        break;

      default:
        break;
    }
  }
  // when is user is inside input box
  function insideInpNav(event) {
    switch (event.keyCode) {
      // Esc
      case 27:
        leaveInput();
        moveSound();
        break;

      // Back button on remote
      case 10009:
        leaveInput();
        moveSound();
        break;
      // Enter - Ok
      case 13:
        // automatically go inside the next input when submitting, if next isn't search button
        if (activeInputBox !== inputRefs.length - 1) {
          goToNextInput();
        } else {
          leaveInput();
          setActiveInputBox(activeInputBox + 1);
        }
        moveSound();
        break;
      default:
        break;
    }
  }
  // when is user is in search box
  function searchNav(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        // if hotels are visile, go down with down arrow
        if (showHotels) {
          goInsideHotels();
          moveSound();
        }
        break;
      // Up Arrow
      case 38:
        break;
      // Left Arrow
      case 37:
        prevInput();
        moveSound();
        break;
      // Right Arrow
      case 39:
        nextInput();
        moveSound();
        break;
      // Backspace
      case 8:
        goBackToNavigation();
        moveSound();
        break;
      // Back button on remote
      case 10009:
        goBackToNavigation();
        moveSound();
        break;
      case 13:
        goInsideInput();
        moveSound();
        break;
      default:
        break;
    }
  }

  // Changing boxes
  function nextHotel() {
    if (activeHotel === filteredHotels.length) {
      setActiveHotel(1);
      handleScrollToHotel(1);
    } else {
      setActiveHotel(activeHotel + 1);
      handleScrollToHotel(activeHotel + 1);
    }
  }
  function prevHotel() {
    if (activeHotel === 1) {
      leaveAll();
      setIsInsideSearchBox(true);
      setActiveHotel(null);
      setActiveInputBox(1);
    } else {
      setActiveHotel(activeHotel - 1);
      handleScrollToHotel(activeHotel - 1);
    }
  }
  function openSingleHotel() {
    navigate('/hotel/' + filteredHotels[activeHotel - 1].name);
  }
  function goInsideHotels() {
    // activate hotels navigation, disable others navigation
    leaveAll();
    setIsInsideHotels(true);
    // activate first hotel
    filterHotels();
    setActiveHotel(1);
    setActiveInputBox(null);
  }

  function goInsideInput() {
    // if it's search input, activate search
    if (activeInputBox === inputRefs.length) {
      leaveAll();
      filterHotels();
      setActiveHotel(1);
      setIsInsideHotels(true);
      bookingContext.setBookingParams({
        ...bookingContext.bookingParams,
        showHotels: true,
      });
    } else {
      leaveAll();
      setIsInsideInput(true);
      focusInput();
    }
  }

  function goBackToNavigation() {
    leaveAll();
    setActiveHotel(null);
    setActiveInputBox(null);
    setAsideActive(true);
  }
  // removes every event handler
  function leaveAll() {
    setIsInsideHotels(false);
    setIsInsideInput(false);
    setIsInsideSearchBox(false);
  }
  function leaveInput() {
    leaveAll();
    setIsInsideSearchBox(true);
    blurInput();
  }
  // goes directly inside next input
  function goToNextInput() {
    leaveInput();
    leaveAll();
    setIsInsideInput(true);
    setActiveInputBox(activeInputBox + 1);
    focusInput(activeInputBox + 1);
  }
  // focus and blur inputs programatically emited
  // activeInputBox !== inputRefs.length is checked because last ref is button and it doesn't need focus
  // second and third inputs are custom date inputs so they don't need focus, they just set open

  function focusInput(activeInputBoxParam = activeInputBox) {
    // can get param which inp to focus, or focuses active one by default
    if (activeInputBoxParam) {
      if (activeInputBoxParam !== inputRefs.length) {
        if (activeInputBoxParam === 2 || activeInputBoxParam === 3) {
          inputRefs[activeInputBoxParam - 1].current.setOpen(true);
        } else {
          inputRefs[activeInputBoxParam - 1].current.focus();
        }
      }
    }
  }

  function blurInput() {
    if (activeInputBox) {
      if (activeInputBox !== inputRefs.length) {
        if (activeInputBox === 2 || activeInputBox === 3) {
          inputRefs[activeInputBox - 1].current.setOpen(false);
        } else {
          inputRefs[activeInputBox - 1].current.blur();
        }
      }
    }
  }

  // this functions are used when navigating through input boxes
  function prevInput() {
    // if it's already on first input, it should leave booking page and go back to navigation
    if (activeInputBox === 1) {
      goBackToNavigation();
    } else {
      setActiveInputBox(activeInputBox - 1);
    }
  }
  function nextInput() {
    if (activeInputBox === inputRefs.length) {
      setActiveInputBox(1);
    } else {
      setActiveInputBox(activeInputBox + 1);
    }
  }

  // this functions handle change events on inputs, and update filled information
  function handleGuestsChange(event) {
    bookingContext.setBookingParams({
      ...bookingContext.bookingParams,
      guests: event.target.value,
    });
  }
  function handleCheckInChange(date) {
    bookingContext.setBookingParams({
      ...bookingContext.bookingParams,
      checkIn: date,
    });
  }
  function handleCheckOutChange(date) {
    bookingContext.setBookingParams({
      ...bookingContext.bookingParams,
      checkOut: date,
    });
  }
  function handleLocationChange(event) {
    bookingContext.setBookingParams({
      ...bookingContext.bookingParams,
      location: event.target.value,
    });
  }

  // this function automatically scrolls hottels wrapper div element to the selected hotel
  function handleScrollToHotel(index) {
    const hotelElement = hotelsWrapperRef.current.children[index - 1];
    if (hotelElement) {
      hotelElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="booking-wrapper">
      <p className="booking-title" style={{ top: showHotels ? '5%' : '40%' }}>
        Travel, Earn, Repeat!
      </p>
      <div
        className="booking-searchWrapper"
        style={{ top: showHotels ? '12%' : '50%' }}
        ref={wrapperRef}
      >
        <div
          className={`booking-input-box ${activeInputBox === 1 ? 'nth-child' : ''
            }`}
        >
          <label className="booking-inputText">Location</label>
          <input
            className="booking-input"
            type="text"
            value={location}
            ref={locationRef}
            onChange={handleLocationChange}
          />
        </div>
        <div
          className={`booking-input-box ${activeInputBox === 2 ? 'nth-child' : ''
            }`}
        >
          <label className="booking-inputText">Check in</label>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            ref={checkinRef}
            selected={checkIn}
            onChange={handleCheckInChange}
            className="booking-date-picker"
          />
        </div>
        <div
          className={`booking-input-box ${activeInputBox === 3 ? 'nth-child' : ''
            }`}
        >
          <label className="booking-inputText">Check Out</label>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            ref={checkoutRef}
            selected={checkOut}
            onChange={handleCheckOutChange}
            className="booking-date-picker"
          />
        </div>
        <div
          className={`booking-input-box ${activeInputBox === 4 ? 'nth-child' : ''
            }`}
        >
          <label className="booking-inputText">Guests</label>
          <input
            className="booking-input"
            ref={guestsRef}
            value={guests}
            type="number"
            min={0}
            max={100}
            onChange={handleGuestsChange}
          />
        </div>
        <button
          ref={searchRef}
          className={`booking-search-btn ${activeInputBox === 5 ? 'nth-child' : ''
            }`}
        >
          {' '}
          Search{' '}
        </button>
      </div>
      <div
        className="booking-hotelsWrapper"
        ref={hotelsWrapperRef}
        style={{ top: showHotels ? '25%' : '120%' }}
      >
        {filteredHotels.map((hotel, index) => {
          const { name, price, location, rating, mainImage, facilities } =
            hotel;
          return (
            <SearchedHotel
              key={name}
              activeBox={activeHotel}
              name={name}
              rating={rating}
              mainImage={mainImage}
              facilities={facilities}
              location={location}
              price={price}
              position={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}
