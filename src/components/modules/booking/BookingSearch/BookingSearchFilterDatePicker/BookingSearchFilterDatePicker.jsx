import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingSearchFilterDatePicker.css";

const BookingSearchFilterDatePicker = ({ dates, setDates }) => {
  const handleStartDateChange = (date) => {
    setDates({
      ...dates,
      startDate: date,
    });
  };

  const handleEndDateChange = (date) => {
    setDates({
      ...dates,
      endDate: date,
    });
  };

  return (
    <div className="datepicker">
      <div>
        <DatePicker
          selected={dates?.startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={dates?.startDate}
          endDate={dates?.endDate}
        />
      </div>
      <div>
        <DatePicker
          selected={dates?.endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={dates?.startDate}
          endDate={dates?.endDate}
          minDate={dates?.startDate}
        />
      </div>
    </div>
  );
};

export default BookingSearchFilterDatePicker;
