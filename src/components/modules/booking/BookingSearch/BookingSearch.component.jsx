import React, { useEffect, useState } from 'react';
import './BookingSearch.stylesheet.css';
import { useRef } from 'react';
import BookingSearchFilterLocationDropdown from './BookingSearchFilterLocationDropdown/BookingSearchFilterLocationDropdown';
import BookingSearchFilterGuestsDropdown from './BookingSearchFilterGuestsDropdown/BookingSearchFilterGuestsDropdown';
import BookingSearchFilterDatePicker from './BookingSearchFilterDatePicker/BookingSearchFilterDatePicker';
import { set } from 'lodash';

const BookingSearch = ({
  filterResults,
  config,
  // data,
  // location,
  // setLocation,
  // setData,
  // toggleResults,
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
  const searchRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);
  const [activeLcationElement, setActiveLcationElement] = useState(null);
  const [dateFilterShow, setDateFilterShow] = useState({
    startDate: true,
    endDate: false,
  });

  const move = (e) => {
    switch (e.keyCode) {
      case 40:
        e.preventDefault();
        if (locationFilterData.length >= 1 && firstTime === true) {
          const firstEl = document.querySelector('.search__filter').firstChild;
          firstEl.focus();
          setActiveLcationElement(firstEl);
          setFirstTime(false);
        }

        if (firstTime === false && locationFilterData.length >= 1) {
          if (!activeLcationElement?.nextSibling) {
            setActiveLcationElement(
              document.querySelector('.search__filter').firstChild,
            );
            return;
          }
          activeLcationElement?.nextSibling.focus();
          setActiveLcationElement(activeLcationElement?.nextSibling);
        }
        break;
      case 38:
        e.preventDefault();
        if (locationFilterData.length >= 1 && firstTime === true) {
          const firstEl = document.querySelector('.search__filter').firstChild;
          firstEl.focus();
          setActiveLcationElement(firstEl);
          setFirstTime(false);
        }

        if (firstTime === false && locationFilterData.length >= 1) {
          if (!activeLcationElement?.previousSibling) {
            setActiveLcationElement(
              document.querySelector('.search__filter').lastChild,
            );
            return;
          }
          activeLcationElement?.previousSibling.focus();
          setActiveLcationElement(activeLcationElement?.previousSibling);
        }
    }
  };

  return (
    <div className="booking__search" id={config?.id}>
      <div className="booking__search__box">
        <div
          tabIndex={0}
          onKeyDown={(e) => {
            switch (e.keyCode) {
              case 13:
                config?.components?.search__location?.eventHandlers?.onKeyDown?.callback(
                  searchRef,
                  setIsPopapsOpen,
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
          {locationFilterData?.length >= 1 && (
            <BookingSearchFilterLocationDropdown
              locationFilterData={locationFilterData}
              location={location}
              setLocation={setLocation}
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
      </div>
    </div>
  );
};

export default BookingSearch;
