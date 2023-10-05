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
            <IconMinus onClick={() => onMinus("rooms")} />
            <span>{guests?.rooms}</span>
            <IconPlus onClick={() => onPlus("rooms")} />
          </div>
        </div>
      </div>
      <div className="guests__dropdown__item">
        <div className="guests__dropdown__item__container">
          <h1 className="guests__dropdown__item__title">Adults</h1>
          <div className="guests__dropdown__item__counter">
            <IconMinus onClick={() => onMinus("adults")} />
            <span>{guests?.adults}</span>
            <IconPlus onClick={() => onPlus("adults")} />
          </div>
        </div>
      </div>
      <div className="guests__dropdown__item">
        <div className="guests__dropdown__item__container">
          <h1 className="guests__dropdown__item__title">Children</h1>
          <div className="guests__dropdown__item__counter">
            <IconMinus onClick={() => onMinus("children")} />
            <span>{guests?.children}</span>
            <IconPlus onClick={() => onPlus("children")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSearchFilterGuestsDropdown;
