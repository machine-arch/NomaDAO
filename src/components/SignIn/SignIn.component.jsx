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
        className={`${config?.components?.sign_in?.className}`}
        id={`auth__button__${config?.components?.sign_in?.id}`}
        isActive={config?.components?.sign_in?.isActive}
        activeClassName={config?.components?.sign_in?.activeClass}
      />
      <Button
        text={` Create account`}
        className={`${config?.components?.sign_up?.className}`}
        id={`auth__button__${config?.components?.sign_up?.id}`}
        isActive={config?.components?.sign_up?.isActive}
        activeClassName={config?.components?.sign_up?.activeClass}
      />
    </div>
  );
};

export default SignIn;
