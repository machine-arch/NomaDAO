import React, { useRef } from 'react';
import './SignIn.stylesheet.css';
import Button from '../button/Button.component';

const SignIn = ({ type, config }) => {
  return (
    <div
      className={`container__sign ${
        type == 'primary' ? 'sign__in__primary' : 'sign__in__secondary'
      }`}
      id={`auth__${config?.id}`}
    >
      <Button
        text={`Sign in`}
        className="btn__sign sign_in"
        id={`auth__button__${config?.components?.sign_in?.id}`}
        isActive={config?.components?.sign_in?.isActive ? true : false}
        activeClassName={config?.components?.sign_in?.activeClass}
      />
      <Button
        text={` Create account`}
        className="btn__sign sign_up"
        id={`auth__button__${config?.components?.sign_up?.id}`}
        isActive={config?.components?.sign_up?.isActive ? true : false}
        activeClassName={config?.components?.sign_up?.activeClass}
      />
    </div>
  );
};

export default SignIn;
