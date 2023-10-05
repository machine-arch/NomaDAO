import React from "react";
import "./BookingSearchFilterLocationDropdown.css";

const BookingSearchFilterLocationDropdown = ({ locationFilterData }) => {
  return (
    <div className="search__filter">
      {locationFilterData?.map((item, index) => {
        return (
          <div className="search__filter__item" key={index}>
            <div className="search__filter__item__text">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BookingSearchFilterLocationDropdown;
