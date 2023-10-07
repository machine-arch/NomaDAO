import React from 'react';
import './BookingSearchFilterLocationDropdown.css';

const BookingSearchFilterLocationDropdown = ({
  locationFilterData,
  location,
  setLocation,
  setFilterDisplay,
}) => {
  return (
    <div className="search__filter" tabIndex={0}>
      {locationFilterData?.map((item, index) => {
        return (
          <div
            className="search__filter__item"
            key={index}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setLocation(e.target.textContent);
                setFilterDisplay((prev) => {
                  return {
                    ...prev,
                    location: false,
                  };
                });
              }
            }}
            tabIndex={index}
          >
            <div className="search__filter__item__text">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BookingSearchFilterLocationDropdown;
