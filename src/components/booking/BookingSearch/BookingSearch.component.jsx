import React, { useEffect, useState } from 'react';
// import './BookingSearch.stylesheet.css';
// import { useRef } from 'react';
// import BookingSearchFilterLocationDropdown from './BookingSearchFilterLocationDropdown/BookingSearchFilterLocationDropdown';
// import BookingSearchFilterGuestsDropdown from './BookingSearchFilterGuestsDropdown/BookingSearchFilterGuestsDropdown';
// import BookingSearchFilterDatePicker from './BookingSearchFilterDatePicker/BookingSearchFilterDatePicker';
// import { set } from 'lodash';

const BookingSearch = ({
  filterResults,
  config,
  guests,
  setGuests,
  filterDisplay,
  setFilterDisplay,
  locationFilterData,
  setLocationFilterData,
  fetchSuggestions,
  dates,
  setDates,
  formatDate,
  setIsPopapsOpen,
  location,
  setLocation,
}) => {
  // const searchRef = useRef(null);
  // const [activeLcationElement, setActiveLcationElement] = useState(null);
  // const [activeGestsElement, setActiveGestsElement] = useState(null);
  // const [dateFilterShow, setDateFilterShow] = useState({
  //   startDate: true,
  //   endDate: false,
  // });

  // const move = (e) => {
  //   const filterContainer = document.querySelector('.search__filter');
  //   const firstEl = filterContainer?.firstChild;
  //   const lastEl = filterContainer?.lastChild;

  //   if (!filterDisplay?.location) return;

  //   e.preventDefault();
  //   switch (e.keyCode) {
  //     case 40:
  //       if (!activeLcationElement || !activeLcationElement.nextSibling) {
  //         firstEl.focus();
  //         setActiveLcationElement(firstEl);
  //       } else {
  //         const nextEl = activeLcationElement.nextSibling;
  //         nextEl.focus();
  //         setActiveLcationElement(nextEl);
  //       }
  //       break;

  //     case 38:
  //       if (!activeLcationElement || !activeLcationElement.previousSibling) {
  //         lastEl.focus();
  //         setActiveLcationElement(lastEl);
  //       } else {
  //         const prevEl = activeLcationElement.previousSibling;
  //         prevEl.focus();
  //         setActiveLcationElement(prevEl);
  //       }
  //       break;
  //     case 13:
  //       if (activeLcationElement) {
  //         activeLcationElement.blur();
  //       }
  //       setActiveLcationElement(null);
  //       break;
  //   }
  // };

  // const moveGests = (e) => {
  //   const filterContainer = document.querySelector('.guests__dropdown');
  //   const firstEl = filterContainer?.firstChild;
  //   const lastEl = filterContainer?.lastChild;

  //   if (!filterDisplay?.guests) return;

  //   e.preventDefault();
  //   switch (e.keyCode) {
  //     case 40:
  //       if (!activeGestsElement || !activeGestsElement.nextSibling) {
  //         firstEl.focus();
  //         setActiveGestsElement(firstEl);
  //       } else {
  //         const nextEl = activeGestsElement.nextSibling;
  //         nextEl.focus();
  //         setActiveGestsElement(nextEl);
  //       }
  //       break;

  //     case 38:
  //       if (!activeGestsElement || !activeGestsElement.previousSibling) {
  //         lastEl.focus();
  //         setActiveGestsElement(lastEl);
  //       } else {
  //         const prevEl = activeGestsElement.previousSibling;
  //         prevEl.focus();
  //         setActiveGestsElement(prevEl);
  //       }
  //       break;
  //     case 13:
  //       if (activeGestsElement) {
  //         activeGestsElement.blur();
  //       }
  //       setActiveGestsElement(null);
  //       break;
  //   }
  // };

  return (
    <div className="booking__search" id={config?.id}>
      {/* <div className="booking__search__box">
        <div
          tabIndex={0}
          onKeyDown={(e) => {
            switch (e.keyCode) {
              case 13:
                config?.components?.search__location?.eventHandlers?.onKeyDown?.callback(
                  searchRef,
                  setIsPopapsOpen,
                  filterDisplay,
                );
            }
            move(e);
          }}
          className={`${'search__location'} ${
            config?.components?.search__location?.isActive
              ? `${config?.components?.search__location?.activeClass}`
              : ''
          }`}
          id={`search__${config?.components?.search__location?.id}`}
        >
          <h1 className="searchBox__title">Location</h1>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => {
              fetchSuggestions(e);
            }}
            value={location || ''}
            ref={searchRef}
            className="searchBox__selectable navigable"
            placeholder="Where are you going?"
            id={`nav_index_1`}
          />

          {filterDisplay?.location == true && (
            <BookingSearchFilterLocationDropdown
              locationFilterData={locationFilterData}
              location={location}
              setLocation={setLocation}
              setFilterDisplay={setFilterDisplay}
            />
          )}
        </div>
        <div className="vl"></div>

        <div
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              config?.components?.search__date?.eventHandlers?.onKeyDown?.callback(
                filterDisplay,
                setFilterDisplay,
              );
              setIsPopapsOpen((prev) => !prev);
              setTimeout(() => {
                const FocusElement = document.querySelector(
                  '.react-datepicker__day--today',
                );
                FocusElement?.focus();
              }, 200);
            }
          }}
          className={`${'search__date'} ${
            config?.components?.search__date?.isActive
              ? `${config?.components?.search__date?.activeClass}`
              : ''
          }`}
          id={`search__${config?.components?.search__date?.id}`}
        >
          <h1 className="searchBox__title">Check in - check out</h1>
          {dates?.startDate == null && (
            <span className="datepicker__placeholder">Please select date</span>
          )}
          {dates?.startDate !== null && (
            <span className="searchBox__selectable navigable">
              {formatDate(dates?.startDate?.toLocaleDateString().toString())} -{' '}
              {formatDate(dates?.endDate?.toLocaleDateString().toString())}
            </span>
          )}

          {filterDisplay?.date == true && (
            <BookingSearchFilterDatePicker
              dateFilterShow={dateFilterShow}
              setDateFilterShow={setDateFilterShow}
              dates={dates}
              setDates={setDates}
              config={config}
            />
          )}
        </div>
        <div className="vl"></div>

        <div
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              config?.components?.search__persons?.eventHandlers?.onKeyDown?.callback(
                filterDisplay,
                setFilterDisplay,
              );
              setIsPopapsOpen((prev) => !prev);
            }
            moveGests(e);
          }}
          tabIndex={0}
          className={`${'search__persons'} ${
            config?.components?.search__persons?.isActive
              ? `${config?.components?.search__persons?.activeClass}`
              : ''
          }`}
          id={`search__${config?.components?.search__persons?.id}`}
        >
          <h1 className="searchBox__title">Guests</h1>
          <h5 className="searchBox__selectable navigable">
            {guests?.adultsCount} adult - {guests?.childrensCount} children -{' '}
            {guests?.roomsCount} room
          </h5>
          {filterDisplay?.guests && (
            <BookingSearchFilterGuestsDropdown
              guests={guests}
              setGuests={setGuests}
            />
          )}
        </div>
        <div className="vl"></div>

        <div className="search__BtnDiv">
          <button
            onKeyDown={(e) => filterResults(e)}
            className={`${'search__Btn'} ${
              config?.components?.search__Btn?.isActive
                ? `${config?.components?.search__Btn?.activeClass}`
                : ''
            }`}
            id={`search__${config?.components?.search__Btn?.id}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z" />
            </svg>
            Search
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default BookingSearch;
