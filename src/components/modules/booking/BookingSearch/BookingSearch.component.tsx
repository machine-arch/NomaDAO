import React from "react";
import "./BookingSearch.stylesheet.css";

const BookingSearch = ({ filterResults }) => {
  return (
    <div className="booking__search">
      <div className="booking__search__box">
        <div className="search__location">
          <h1 className="searchBox__title">Location</h1>
          <input
            className="searchBox__selectable"
            placeholder="Where are you going?"
          />
        </div>
        <div className="vl"></div>

        <div className="search__date">
          <h1 className="searchBox__title">Check in - check out</h1>
          <h5 className="searchBox__selectable">Fri 16 Jun - Fri 14 Jul</h5>
        </div>
        <div className="vl"></div>

        <div className="search__persons">
          <h1 className="searchBox__title">Guests</h1>
          <h5 className="searchBox__selectable">
            2 adult - 1 children - 1 room
          </h5>
        </div>
        <div className="vl"></div>

        <div className="search__BtnDiv">
          <button
            onClick={() => filterResults()}
            className="search__Btn searchBox__title"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0699D2"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSearch;
