import React, { useEffect, useContext, useRef, useState } from 'react';
import { API_login } from '../../../../api/requests.js';
import { useNavigate } from 'react-router-dom';
import useConditionalHandler from '../../../../hooks/useConditionalHandler.js';
import useMoveSound from '../../../../hooks/useMoveSound.js';
import AsideContext from '../../../../context/AsideContext.js';
import './MarketplaceLogin.stylesheet.css';

export default function MarketplaceLogin({ switchToRegister }) {
  const asideContext = useContext(AsideContext);
  const [error, setError] = useState('');
  const [activeInputBox, setActiveInputBox] = useState(null);
  const { asideActive, setAsideActive } = asideContext;

  // hooks
  const navigate = useNavigate();
  const moveSound = useMoveSound;

  // refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkBoxRef = useRef();
  const submitRef = useRef();

  // The order of elements for navigation
  const inputRefs = [emailRef, passwordRef, checkBoxRef, submitRef];
  const [activeInput, setActiveInput] = useState(0);

  async function handleSubmit() {
    // prettier-ignore
    let response = await API_login({email: emailRef.current.value, password: passwordRef.current.value});
    if (response.error) {
      setError(response.error); // if response contains error, it will be set
    } else {
      navigate('/marketplace/' + response.field + '/Home'); // navigate to corresponding page
    }
  }

  function navigateInputs(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        nextInput();
        moveSound();
        break;
      // Up Arrow
      case 38:
        if (activeInput === 0) {
          // Check if current input is emailRef
          switchToRegister(); // Call the passed function to switch to register form
        }
        prevInput();
        moveSound();
        break;
      // Left Arrow
      case 37:
        goBackToNavigation();
        moveSound();
        break;
      // Enter - Ok
      case 13:
        if (activeInput === inputRefs.length - 1) {
          handleSubmit();
        } else if (inputRefs[activeInput].current === checkBoxRef.current) {
          checkBoxRef.current.click(); // This line toggles the checkbox when it's focused and "Enter" is pressed
        } else {
          inputRefs[activeInput].current.focus();
        }
        break;
      default:
        break;
    }
  }

  function goBackToNavigation() {
    // leaveAll();
    // setActiveInputBox(null);
    setAsideActive(true);
  }

  function nextInput() {
    if (activeInput < inputRefs.length - 1) {
      setActiveInput(activeInput + 1);
      inputRefs[activeInput + 1].current.focus();
    }
  }

  function prevInput() {
    if (activeInput > 0) {
      setActiveInput(activeInput - 1);
      inputRefs[activeInput - 1].current.focus();
    }
  }

  useEffect(() => {
    if (!asideActive) {
      emailRef.current.focus();
    } else {
      emailRef.current.blur();
    }
  }, [asideActive]);

  // Enable event when user is inside any box
  useConditionalHandler(navigateInputs, true);

  return (
    <div>
      <p className="marketplaceLogin-title">Welcome Back</p>
      <p className="marketplaceLogin-under-title">Login into your account</p>
      <input
        className="marketplaceLogin-input"
        ref={emailRef}
        placeholder="Email"
        type="mail"
      />
      <input
        className="marketplaceLogin-input"
        ref={passwordRef}
        placeholder="Password"
        type="password"
      />
      <div className="marketplaceLogin-flex">
        <div className="marketplaceLogin-checkbox-wrapper">
          <input
            className="marketplaceLogin-checkbox"
            id="remember"
            type="checkbox"
            ref={checkBoxRef}
          />
          <label
            className="marketplaceLogin-checkbox-label"
            htmlFor="remember"
          />
        </div>
        <span className="marketplaceLogin-remember">Remember me</span>
      </div>
      <p className="marketplaceLogin-error">{error}</p>
      <button
        className="marketplaceLogin-submit"
        ref={submitRef}
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
}
