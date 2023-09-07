import React from "react";
import BookingData from "../../../data/hotels.json";
import "./Booking.css";
import BookingSearch from "./BookingSearch/BookingSearch.component";
import BookingSearchResult from "./BookingSearchResult/BookingSearchResult.component";

const Booking = () => {
  return (
    <div className="booking__mainContainer">
      <div className="topBg">
        <BookingSearch />
      </div>
      <div className="bottom">
        <BookingSearchResult />
        <BookingSearchResult />
        <BookingSearchResult />
        <div className="bottom_bgOverlay"></div>
      </div>
    </div>
  );
};

export default Booking;
