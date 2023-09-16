import React from "react";
import "./SubmissionForm.stylesheet.css";

const SubmissionForm = () => {
  return (
    <div className="submission__form__container">
      <div className="submission__header">
        <span className="blue__box"></span>
        <h1>Booking submission</h1>
      </div>
      <div className="submission__form">
        <div className="submission__form__left">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Address 1" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Zip Code/Postal Code" />
        </div>
        <div className="submission__form__right">
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Address 2" />
          <input type="text" placeholder="State/Province/Region" />
          <input type="text" placeholder="Country" />
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
