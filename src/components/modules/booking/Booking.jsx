import React from "react";
import BookingData from "../../../data/hotels.json";
import "./Booking.css";
import BookingSearch from "./BookingSearch/BookingSearch.component";
import BookingSearchResult from "./BookingSearchResult/BookingSearchResult.component";
import BookingSearchBarFilterBack from "./BookingSearchBarFilterBack/BookingSearchBarFilterBack.component";

const Booking = () => {
  return (
    <div className="booking__mainContainer">
      <div className="topBg">
        <BookingSearch />
        <BookingSearchBarFilterBack />
      </div>
      <div className="bottom">
        <div className="bottom_bgOverlay"></div>
        <div className="bottom__results">
          <BookingSearchResult />
          <BookingSearchResult />
          <BookingSearchResult />
        </div>
      </div>
    </div>
  );
};

export default Booking;
