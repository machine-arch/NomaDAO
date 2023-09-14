import React from "react";
import "./SubmissionPayment.stylesheet.css";

const SubmissionPayment = () => {
  return (
    <div className="submission__payment__container">
      <h1>Select Payment Method</h1>
      <div className="payment__providers">
        <div className="payment__box">
          <div className="payment__option paypal">
            <img src="/src/assets/images/payment/paypal.png" />
          </div>
          <h1>Paypal</h1>
        </div>
        <div className="payment__box">
          <div className="payment__option stripe">
            <img src="/src/assets/images/payment/stripe.png" />
          </div>
          <h1>Stripe</h1>
        </div>
        <div className="payment__box">
          <div className="payment__option paycard">
            <img src="/src/assets/images/payment/securepaycard.png" />
          </div>
          <h1>Securepaycard</h1>
        </div>
        <div className="payment__box">
          <div className="payment__option elegro">
            <img src="/src/assets/images/payment/elegro.png" />
          </div>
          <h1>Elegro Acceptance</h1>
        </div>
      </div>
      <div className="submission__agreement">
        <input type="checkbox" className="agreement__checkbox" />
        <label className="terms__policy">
          <strong className="submission__bold__text">
            I have read and accept the{" "}
          </strong>
          Terms and Privacy policy
        </label>
      </div>
      <div className="submission__submit__btn">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default SubmissionPayment;
