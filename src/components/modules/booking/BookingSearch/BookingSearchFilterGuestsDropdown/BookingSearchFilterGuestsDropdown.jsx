import React from "react";
import { useState } from "react";
import "./BookingSearchFilterGuestsDropdown.css";
import IconMinus from "../IconMinus/IconMinus";
import IconPlus from "../IconPlus/IconPlus";

const BookingSearchFilterGuestsDropdown = ({ guests, setGuests }) => {
  const onPlus = (name) => {
    setGuests({ ...guests, [name]: guests[name] + 1 });
  };

  const onMinus = (name) => {
    if (guests[name] === 0) return;
    setGuests({ ...guests, [name]: guests[name] - 1 });
  };

  return (
    <div className="guests__dropdown">
      <div className="guests__dropdown__item">
        <div className="guests__dropdown__item__container">
          <h1 className="guests__dropdown__item__title">Rooms</h1>
          <div className="guests__dropdown__item__counter">
            <IconMinus onClick={() => onMinus("roomsCount")} />
            <span>{guests?.roomsCount}</span>
            <IconPlus onClick={() => onPlus("roomsCount")} />
          </div>
        </div>
      </div>
      <div className="guests__dropdown__item">
        <div className="guests__dropdown__item__container">
          <h1 className="guests__dropdown__item__title">Adults</h1>
          <div className="guests__dropdown__item__counter">
            <IconMinus onClick={() => onMinus("adultsCount")} />
            <span>{guests?.adultsCount}</span>
            <IconPlus onClick={() => onPlus("adultsCount")} />
          </div>
        </div>
      </div>
      <div className="guests__dropdown__item">
        <div className="guests__dropdown__item__container">
          <h1 className="guests__dropdown__item__title">Children</h1>
          <div className="guests__dropdown__item__counter">
            <IconMinus onClick={() => onMinus("childrensCount")} />
            <span>{guests?.childrensCount}</span>
            <IconPlus onClick={() => onPlus("childrensCount")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSearchFilterGuestsDropdown;
