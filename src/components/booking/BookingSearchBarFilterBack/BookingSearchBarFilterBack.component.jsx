import React, { useState } from "react";
import "./BookingSearchBarFilterBack.stylesheet.css";
import FilterBox from "./FilterBox/FilterBox.component";

const BookingSearchBarFilterBack = ({
  config,
  showFilterBox,
  setShowFilterBox,
  onKeyDown,
  advancedFilter,
  setAdvancedFilter,
}) => {
  const filterBox = config?.filter_box?.home;
  return (
    <div className="back__filter__btns">
      <FilterBox
        advancedFilter={advancedFilter}
        setAdvancedFilter={setAdvancedFilter}
        showFilterBox={showFilterBox}
        setShowFilterBox={setShowFilterBox}
        className="filter__box"
        config={filterBox}
      />
      <button
        className={`${config?.filter?.components?.back__btn?.className} ${
          config?.filter?.components?.back__btn?.isActive
            ? `${config?.filter?.components?.back__btn?.activeClass}`
            : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 21 19"
        >
          <path d="M3.27273 9H18.7273C18.9322 9 19.1288 9.05268 19.2737 9.14645C19.4186 9.24021 19.5 9.36739 19.5 9.5C19.5 9.63261 19.4186 9.75979 19.2737 9.85355C19.1288 9.94732 18.9322 10 18.7273 10H3.27273C3.06779 10 2.87124 9.94732 2.72633 9.85355C2.58141 9.75979 2.5 9.63261 2.5 9.5C2.5 9.36739 2.58141 9.24021 2.72633 9.14645C2.87124 9.05268 3.06779 9 3.27273 9Z" />
          <path d="M3.47601 9.5L10.2601 15.7182C10.4137 15.859 10.5 16.05 10.5 16.2491C10.5 16.4483 10.4137 16.6393 10.2601 16.7801C10.1065 16.9209 9.89822 17 9.68101 17C9.4638 17 9.25549 16.9209 9.1019 16.7801L1.7403 10.0309C1.66413 9.96127 1.6037 9.87852 1.56246 9.78741C1.52123 9.69631 1.5 9.59864 1.5 9.5C1.5 9.40136 1.52123 9.30369 1.56246 9.21259C1.6037 9.12148 1.66413 9.03873 1.7403 8.96907L9.1019 2.21992C9.25549 2.07911 9.4638 2 9.68101 2C9.89822 2 10.1065 2.07911 10.2601 2.21992C10.4137 2.36073 10.5 2.55171 10.5 2.75085C10.5 2.94999 10.4137 3.14097 10.2601 3.28179L3.47601 9.5Z" />
        </svg>
        Back
      </button>
      <button
        onClick={() => setShowFilterBox((prev) => !prev)}
        className={`${config?.filter?.components?.filter__btn?.className} ${
          config?.filter?.components?.filter__btn?.isActive
            ? `${config?.filter?.components?.filter__btn?.activeClass}`
            : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 21 12"
        >
          <path d="M19.5583 2.18268H1.43968C0.860773 2.18268 0.391602 1.71341 0.391602 1.13455C0.391602 0.555691 0.860867 0.0864258 1.43968 0.0864258H19.5582C20.1371 0.0864258 20.6063 0.555738 20.6063 1.13455C20.6063 1.71341 20.1371 2.18268 19.5583 2.18268Z" />
          <path d="M16.6626 7.0484H4.33616C3.7573 7.0484 3.28809 6.57909 3.28809 6.00023C3.28809 5.42137 3.75735 4.95215 4.33616 4.95215H16.6626C17.2414 4.95215 17.7107 5.42141 17.7107 6.00023C17.7108 6.57913 17.2414 7.0484 16.6626 7.0484Z" />
          <path d="M14.1565 11.9136H6.84305C6.26414 11.9136 5.79492 11.4443 5.79492 10.8655C5.79492 10.2866 6.26419 9.81738 6.84305 9.81738H14.1565C14.7353 9.81738 15.2046 10.2866 15.2046 10.8655C15.2046 11.4443 14.7353 11.9136 14.1565 11.9136Z" />
        </svg>
        Filter
      </button>
    </div>
  );
};

export default BookingSearchBarFilterBack;
