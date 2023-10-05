import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./BookingSearchFilterLocationDropdown.css";

const BookingSearchFilterLocationDropdown = () => {
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    axios
      .get("http://168.119.117.49:7000/v1/hotel-filter/ui-countries")
      .then((res) => {
        setFilterData(res?.data?.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="search__filter">
      {filterData?.map((item, index) => {
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
