import React from "react";
import "./BookingSubmission.stylesheet.css";

const BookingSubmission = () => {
  return (
    <div className="submission__mainContainer">
      <div className="submission__topBg">
        <SignIn type="secondary" />
      </div>
      <div className="subimssion__bottom">
        <div className="submission__bottom__bgOverlay"></div>
      </div>
    </div>
  );
};

export default BookingSubmission;
