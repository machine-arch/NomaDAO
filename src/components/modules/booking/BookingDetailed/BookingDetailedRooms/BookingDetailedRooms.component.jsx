import React from "react";
import "./BookingDetailedRooms.stylesheet.css";
import Room from "./Room/Room.component";

const BookingDetailedRooms = () => {
  return (
    <div className="booking__detailed__rooms">
      <div className="rooms__top">
        <span className="blue__box"></span>
        <h1 className="rooms__title">Available rooms</h1>
      </div>
      <div className="white__bg">
        <div className="detailed__search__bar">
          <div>
            <h1 className="search__bar__title">Check in - check out</h1>
            <h4 className="search__bar__subtitle">Fr 16 Jun - Fri 14 Jul</h4>
          </div>
          <hr />
          <div>
            <h1 className="search__bar__title">Guests</h1>
            <h4 className="search__bar__subtitle">
              2 adult - 1 children - 1 room
            </h4>
          </div>
          <div>
            <button className="availability__btn">Check availability</button>
          </div>
        </div>
        <hr className="detailed__rooms_hr" />
        <div className="rooms__list">
          <Room />
          <hr />
          <Room />
          <hr />
          <Room />
          <hr />
          <Room />
        </div>
      </div>
    </div>
  );
};

export default BookingDetailedRooms;
