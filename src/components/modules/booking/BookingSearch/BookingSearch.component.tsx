import React, { useEffect, useState } from 'react';
import './BookingSearch.stylesheet.css';
import { useRef } from 'react';
import useDebounce from '../../../../hooks/useDebounce/useDebounce';

const BookingSearch = ({
  filterResults,
  config,
  data,
  setData,
  toggleResults,
}) => {
  const searchRef = useRef(null);
  const [location, setLocation] = useState('');

  return (
    <div className="booking__search" id={config?.id}>
      <div className="booking__search__box">
        <div
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              config?.components?.search__location?.eventHandlers?.onKeyDown?.callback(
                searchRef,
              );
            }
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
            onChange={(e) => setLocation(e.target.value)}
            ref={searchRef}
            className="searchBox__selectable navigable"
            placeholder="Where are you going?"
            id={`nav_index_1`}
          />
        </div>
        <div className="vl"></div>

        <div
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              config?.components?.search__date?.eventHandlers?.onKeyDown?.callback();
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
          <input
            type="text"
            placeholder="Fr 16 Jun - Fri 14 Jul"
            className="searchBox__selectable navigable"
          />{' '}
        </div>
        <div className="vl"></div>

        <div
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              config?.components?.search__persons?.eventHandlers?.onKeyDown?.callback();
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
            2 adult - 1 children - 1 room
          </h5>
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
