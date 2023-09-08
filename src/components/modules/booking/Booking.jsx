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
          {BookingData.hotels?.map((oneBooking, index) => {
            return (
              <BookingSearchResult
                id={oneBooking.id}
                key={index}
                name={oneBooking.name}
                price={oneBooking.price}
                facilities={oneBooking.facilities}
                mainImage={oneBooking.mainImage}
                rating={oneBooking.rating}
                location={oneBooking.location}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Booking;
