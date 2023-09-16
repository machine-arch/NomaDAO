import React from "react";
import "./SignIn.stylesheet.css";

const SignIn = ({ type }) => {
  return (
    <div
      className={`container__sign ${
        type == "primary" ? "sign__in__primary" : "sign__in__secondary"
      }`}
    >
      <button className="btn__sign">Sign in</button>
      <button className="btn__sign">Create account</button>
    </div>
  );
};

export default SignIn;
