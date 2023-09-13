import React from "react";
import "./BookingComplete.stylesheet.css";
import { useNavigate } from "react-router-dom";

const BookingComplete = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div className="booking__complete__container">
      <div className="booking__complete__content">
        <h1>Complete booking</h1>
        <hr></hr>
        <div className="booking__complete__information">
          <div className="booking__complete__information__box">
            <div className="information__detailed">
              <h1>Total room:</h1>
              <span>1</span>
            </div>
            <div className="information__detailed">
              <h1>Service fee:</h1>
              <span>8</span>
            </div>
          </div>
          <div className="booking__complete__information__box totalprice">
            <h1>Total Price</h1>
            <span>$38</span>
          </div>
          <div className="booking__complete__information__box">
            <button
              onClick={() => navigate(`/submission/${id}`)}
              className="information__booknow__btn"
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingComplete;
