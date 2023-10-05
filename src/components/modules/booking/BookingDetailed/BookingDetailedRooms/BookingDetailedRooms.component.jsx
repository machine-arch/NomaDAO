import React from 'react';
import './BookingDetailedRooms.stylesheet.css';
import Room from './Room/Room.component';
const BookingDetailedRooms = ({ config }) => {
  return (
    <div className="booking__detailed__rooms">
      <div className="rooms__top">
        <span className="blue__box"></span>
        <h1 className="rooms__title">Available rooms</h1>
      </div>
      <div className="white__bg">
        <div className="detailed__search__bar">
          <div
            className={`${
              config?.booking__detailed__rooms?.components
                ?.detailed__search__check?.className
            } ${
              config?.booking__detailed__rooms?.components
                ?.detailed__search__check?.isActive &&
              config?.booking__detailed__rooms?.components
                ?.detailed__search__check?.activeClass
            }`}
          >
            <h1 className="search__bar__title">Check in - check out</h1>
            <input
              className="search__bar__check"
              placeholder="Fr 16 Jun - Fri 14 Jul"
              type="date"
            />
          </div>
          <hr />
          <div
            className={`${
              config?.booking__detailed__rooms?.components
                ?.detailed__search__guests?.className
            } ${
              config?.booking__detailed__rooms?.components
                ?.detailed__search__guests?.isActive &&
              config?.booking__detailed__rooms?.components
                ?.detailed__search__guests?.activeClass
            }`}
          >
            <h1 className="search__bar__title">Guests</h1>
            <input
              className="search__bar__guests"
              placeholder="2 adult - 1 children - 1 room"
              readOnly
            />
          </div>
          <div className="detailed__search__availability__btn">
            <button
              className={`${
                config?.booking__detailed__rooms?.components?.availability__btn
                  ?.className
              } ${
                config?.booking__detailed__rooms?.components?.availability__btn
                  ?.isActive &&
                config?.booking__detailed__rooms?.components?.availability__btn
                  ?.activeClass
              }`}
            >
              Check availability
            </button>
          </div>
        </div>
        <hr className="detailed__rooms_hr" />
        <div className="rooms__list">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <React.Fragment key={i}>
                <Room
                  className={`${
                    config?.rooms__list?.components?.room__card?.className
                  } ${
                    config?.rooms__list?.components?.room__card?.isActive &&
                    i === config?.rooms__list?.factory?.index
                      ? 'booking-result-active-element'
                      : ''
                  }`}
                  id={`${config?.rooms__list?.components?.room__card?.className}-${i}`}
                />
                <hr />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingDetailedRooms;
