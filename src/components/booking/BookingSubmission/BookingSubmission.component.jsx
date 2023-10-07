import React from 'react';
// import "./BookingSubmission.stylesheet.css";
// import SignIn from "../../../SignIn/SignIn.component";
// import SubmissionForm from "./SubmissionForm/SubmissionForm.component";
// import SubmissionDetails from "./SubmissionDetails/SubmissionDetails.component";
// import SubmissionPayment from "./SubmissionPayment/SubmissionPayment.component";

const BookingSubmission = () => {
  return (
    <div className="submission__mainContainer">
      <div className="submission__topBg">
        <button className="submission__back__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 21 19"
            fill="none"
          >
            <path
              d="M3.27273 9H18.7273C18.9322 9 19.1288 9.05268 19.2737 9.14645C19.4186 9.24021 19.5 9.36739 19.5 9.5C19.5 9.63261 19.4186 9.75979 19.2737 9.85355C19.1288 9.94732 18.9322 10 18.7273 10H3.27273C3.06779 10 2.87124 9.94732 2.72633 9.85355C2.58141 9.75979 2.5 9.63261 2.5 9.5C2.5 9.36739 2.58141 9.24021 2.72633 9.14645C2.87124 9.05268 3.06779 9 3.27273 9Z"
              fill="#202020"
            />
            <path
              d="M3.47601 9.5L10.2601 15.7182C10.4137 15.859 10.5 16.05 10.5 16.2491C10.5 16.4483 10.4137 16.6393 10.2601 16.7801C10.1065 16.9209 9.89822 17 9.68101 17C9.4638 17 9.25549 16.9209 9.1019 16.7801L1.7403 10.0309C1.66413 9.96127 1.6037 9.87852 1.56246 9.78741C1.52123 9.69631 1.5 9.59864 1.5 9.5C1.5 9.40136 1.52123 9.30369 1.56246 9.21259C1.6037 9.12148 1.66413 9.03873 1.7403 8.96907L9.1019 2.21992C9.25549 2.07911 9.4638 2 9.68101 2C9.89822 2 10.1065 2.07911 10.2601 2.21992C10.4137 2.36073 10.5 2.55171 10.5 2.75085C10.5 2.94999 10.4137 3.14097 10.2601 3.28179L3.47601 9.5Z"
              fill="#202020"
            />
          </svg>
          Back
        </button>
        <SignIn type="secondary" />
      </div>
      <div className="submission__bottom">
        <div className="submission__bottom__bgOverlay"></div>
        <div className="submission__bottom__container">
          <SubmissionForm />
          <SubmissionDetails />
          <SubmissionPayment />
        </div>
      </div>
    </div>
  );
};

export default BookingSubmission;
