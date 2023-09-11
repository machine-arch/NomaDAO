import React from "react";
import "./BookingDetailedLocation.stylesheet.css";
import { useState } from "react";

const BookingDetailedLocation = () => {
  const [showMap, setShowMap] = useState(false);
  const mapStyle = {
    width: "100%",
    height: "450px",
    border: "0",
    borderRadius: "16px",
    position: "relative",
  };

  console.log(showMap);
  return (
    <div>
      <div className="location__top">
        <div>
          <span className="blue__box"></span>
          <h1 className="location__title">Location</h1>
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M10.1953 1.94678C7.24368 1.94678 4.85645 4.33401 4.85645 7.28564C4.85645 11.2898 10.1953 17.2007 10.1953 17.2007C10.1953 17.2007 15.5342 11.2898 15.5342 7.28564C15.5342 4.33401 13.1469 1.94678 10.1953 1.94678ZM10.1953 9.19237C9.68961 9.19237 9.20462 8.99149 8.84704 8.6339C8.48946 8.27632 8.28857 7.79134 8.28857 7.28564C8.28857 6.77994 8.48946 6.29495 8.84704 5.93737C9.20462 5.57979 9.68961 5.3789 10.1953 5.3789C10.701 5.3789 11.186 5.57979 11.5436 5.93737C11.9012 6.29495 12.102 6.77994 12.102 7.28564C12.102 7.79134 11.9012 8.27632 11.5436 8.6339C11.186 8.99149 10.701 9.19237 10.1953 9.19237Z"
              fill="#202020"
            />
          </svg>
          Location: United Arab Emirates, Dubai
        </span>
      </div>
      <div className="location__bottom">
        <iframe
          className="location__bottom__map"
          style={mapStyle}
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDM3WLzT4HuEGqv36QrhOn-s7FkJGLTLHA
    &q=Tbilisi,Georgia"
        ></iframe>
        <button
          onClick={() => setShowMap((prev) => !prev)}
          className="location__bottom__btn"
        >
          Show on map
        </button>
      </div>
    </div>
  );
};

export default BookingDetailedLocation;
