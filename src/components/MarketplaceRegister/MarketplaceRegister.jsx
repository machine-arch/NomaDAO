import React, { useEffect, useContext, useRef, useState } from 'react';
import { API_register } from '../../api/requests.js';
import { useNavigate } from 'react-router-dom';
import useMoveSound from '../../hooks/useMoveSound.js';
import AsideContext from '../../context/AsideContext.js';
import useConditionalHandler from '../../hooks/useConditionalHandler.js';
import './MarketplaceRegister.css';

export default function MarketplaceRegister({ switchToRegister }) {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit() {
    if (password.current.value !== repeatPassword.current.value) {
      setError('Passwords do not match');
    } else {
      let field = '';
      if (field_hotel.current && field_hotel.current.checked) {
        field = 'Hotel';
      } else if (field_agency.current && field_agency.current.checked) {
        field = 'Agency';
      }

      let response = await API_register({
        companyName: name.current.value,
        companyField: field,
        companyID: id.current.value,
        email: email.current.value,
        phoneNumber: phone.current.value,
        website: website.current.value,
        password: password.current.value,
      });

      if (response.error) {
        setError(response.error);
      } else {
        let page = field === 'Hotel' ? 'hotel' : 'agency';
        navigate('/marketplace/' + page + '/Home');
      }
    }
  }

  const field_hotel = useRef();
  const field_agency = useRef();
  const name = useRef();
  const id = useRef();
  const email = useRef();
  const phone = useRef();
  const website = useRef();
  const password = useRef();
  const repeatPassword = useRef();
  const submit = useRef();

  const inputRefs = [
    field_hotel,
    field_agency,
    name,
    id,
    email,
    phone,
    website,
    password,
    repeatPassword,
    submit,
  ];
  const [activeInput, setActiveInput] = useState(0);

  const asideContext = useContext(AsideContext);
  const { asideActive, setAsideActive } = asideContext;
  const [activeInputBox, setActiveInputBox] = useState(null);

  const moveSound = useMoveSound;

  function navigateInputs(event) {
    switch (event.keyCode) {
      case 40: // Down Arrow
        if (activeInput === 0 || activeInput === 1) {
          setActiveInput(2); // Jump to 'name' ref
          name.current.focus();
        } else if (activeInput === 9) {
          inputRefs[2].current.focus();
          setActiveInput(2);
        } else {
          nextInput();
        }
        moveSound();
        break;
      case 38: // Up Arrow
        if (activeInput === 2) {
          // If 'name' is the current active input
          if (field_hotel.current.checked) {
            setActiveInput(0); // Set 'Hotel' as the new active input
            field_hotel.current.focus(); // Focus on 'Hotel'
          } else if (field_agency.current.checked) {
            setActiveInput(1); // Set 'Agency' as the new active input
            field_agency.current.focus(); // Focus on 'Agency'
          }
        } else if (activeInput === 0 || activeInput === 1) {
          switchToRegister();
        }
        prevInput();
        moveSound();
        break;
      case 37: // Left Arrow
        if (activeInput !== 1) {
          goBackToNavigation();
        }
        prevInput();
        moveSound();
        break;
      case 39: // Right Arrow
        if (activeInput === 0) {
          nextInput();
        }
        moveSound();
        break;
      case 13: // Enter - Ok
        if (activeInput === inputRefs.length - 1) {
          handleSubmit();
        } else {
          setActiveInput(activeInput + 1);
          inputRefs[activeInput + 1].current &&
            inputRefs[activeInput + 1].current.focus();
        }
        break;
      default:
        break;
    }
  }

  function goBackToNavigation() {
    inputRefs.forEach((ref) => ref.current.blur()); // Unfocus all inputs
    setActiveInputBox(null);
    setAsideActive(true);
  }

  function nextInput() {
    if (activeInput === 0) {
      // If "Hotel" is the current active input
      field_hotel.current.checked = false; // Uncheck "Hotel"
      field_agency.current.checked = true; // Check "Agency"
      setActiveInput(1);
    } else {
      setActiveInput(activeInput + 1);
      inputRefs[activeInput + 1].current.focus();
    }
    // }
  }

  function prevInput() {
    if (activeInput === 1) {
      // If "Hotel" is the current active input
      field_hotel.current.checked = true; // Uncheck "Hotel"
      field_agency.current.checked = false; // Check "Agency"
      setActiveInput(0);
    }
    if (activeInput > 0) {
      setActiveInput(activeInput - 1);
      inputRefs[activeInput - 1].current.focus();
    }
  }

  useEffect(() => {
    if (!asideActive) {
      field_hotel.current.focus();
    } else {
      inputRefs.forEach((ref) => ref.current.blur()); // Unfocus all inputs
    }
  }, [asideActive]);

  useConditionalHandler(navigateInputs, true);

  return (
    <div className="marketplaceRegister-wrapper">
      <p className="marketplaceRegister-title">Get Started With NOMADAO</p>
      <p className="marketplaceRegister-under-title">Getting started is easy</p>
      <div className="marketplaceRegister-flex">
        <label className="marketplaceRegister-label" htmlFor="hotel">
          Hotel
        </label>
        <input
          className="marketplaceRegister-radio"
          ref={field_hotel}
          type="checkbox"
          id="hotel"
          name="field"
          defaultChecked
        />
        <label className="marketplaceRegister-label" htmlFor="agency">
          Agency
        </label>
        <input
          className="marketplaceRegister-radio"
          ref={field_agency}
          type="checkbox"
          id="agency"
          name="field"
        />
      </div>
      <input
        className="marketplaceRegister-input"
        ref={name}
        placeholder="Company Name"
        type="text"
      />
      <input
        className="marketplaceRegister-input"
        ref={id}
        placeholder="Company ID/Tax Number"
        type="text"
      />
      <input
        className="marketplaceRegister-input"
        ref={email}
        placeholder="Email"
        type="email"
      />
      <input
        className="marketplaceRegister-input"
        ref={phone}
        placeholder="Phone Number"
        type="phone"
      />
      <input
        className="marketplaceRegister-input"
        ref={website}
        placeholder="Website"
        type="text"
      />
      <input
        className="marketplaceRegister-input"
        ref={password}
        placeholder="Password"
        type="password"
      />
      <input
        className="marketplaceRegister-input"
        ref={repeatPassword}
        placeholder="Confirm Password"
        type="password"
      />
      <p className="marketplaceRegister-error">{error}</p>
      <button
        className="marketplaceRegister-submit"
        ref={submit}
        onClick={handleSubmit}
      >
        Create an account
      </button>
    </div>
  );
}
