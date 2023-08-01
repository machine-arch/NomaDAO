import React, { useEffect, useContext, useRef, useState } from "react";
import { styled } from "styled-components";
import { API_register } from "../api/requests.js";
import { useNavigate } from "react-router-dom";
import useMoveSound from "../hooks/useMoveSound";
import AsideContext from "../context/AsideContext";
import useConditionalHandler from "../hooks/useConditionalHandler";

export default function MarketplaceRegister({ switchToRegister }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    if (password.current.value !== repeatPassword.current.value) {
      setError("Passwords do not match");
    } else {
      let field = "";
      if(field_hotel.current && field_hotel.current.checked) {
        field = "Hotel";
      } else if(field_agency.current && field_agency.current.checked) {
        field = "Agency";
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
        let page = field === "Hotel" ? "hotel" : "agency";
        navigate("/marketplace/" + page + "/Home");
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
        } else if(activeInput === 9)
        {
          inputRefs[2].current.focus();
          setActiveInput(2);
        }else {
          nextInput();
        }
        moveSound();
        break;
      case 38: // Up Arrow
      if (activeInput === 2) { // If 'name' is the current active input
        if(field_hotel.current.checked) {
          setActiveInput(0); // Set 'Hotel' as the new active input
          field_hotel.current.focus(); // Focus on 'Hotel'
        } else if(field_agency.current.checked) {
          setActiveInput(1); // Set 'Agency' as the new active input
          field_agency.current.focus(); // Focus on 'Agency'
        }
      }
      else
        if (activeInput === 0 || activeInput === 1) {
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
          inputRefs[activeInput + 1].current && inputRefs[activeInput + 1].current.focus();
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
    if (activeInput === 0) { // If "Hotel" is the current active input
      field_hotel.current.checked = false; // Uncheck "Hotel"
      field_agency.current.checked = true; // Check "Agency"
      setActiveInput(1);
     }
     else{ 
      setActiveInput(activeInput + 1);
      inputRefs[activeInput + 1].current.focus();
     }
    // }
  }

  function prevInput() {
    if (activeInput === 1) { // If "Hotel" is the current active input
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
    <Wrapper>
      <Title>Get Started With NOMADAO</Title>
      <UnderTitle>Getting started is easy</UnderTitle>
      <Flex>
        <Label htmlFor="hotel">Hotel</Label>
        <Radio
          ref={field_hotel}
          type="checkbox"
          id="hotel"
          name="field"
          defaultChecked/>
          <Label htmlFor="agency">Agency</Label>
        <Radio ref={field_agency} type="checkbox" id="agency" name="field" />
      </Flex>
      <Input ref={name} placeholder="Company Name" type="text" />
      <Input ref={id} placeholder="Company ID/Tax Number" type="text" />
      <Input ref={email} placeholder="Email" type="email" />
      <Input ref={phone} placeholder="Phone Number" type="phone" />
      <Input ref={website} placeholder="Website" type="text" />
      <Input ref={password} placeholder="Password" type="password" />
      <Input
        ref={repeatPassword}
        placeholder="Confirm Password"
        type="password"
      />
      <Error>{error}</Error>
      <Submit ref={submit} onClick={handleSubmit}>
        Create an account
      </Submit>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
`;

const Title = styled.p`
  color: #3f3f3f;
  font-size: 24px;
  font-family: "Inter";
  font-weight: 600;
  line-height: 44px;o
  text-align: center;
  width: fit-content;
  margin-inline: auto;
`;

const UnderTitle = styled.p`
  color: #3f3f3f;
  font-size: 18px;
  font-family: "Inter";
  text-align: center;
  margin-top: 5px;
  width: fit-content;
  margin-inline: auto;
`;

const Input = styled.input`
  display: flex;
  width: 442px;
  height: 70px;
  padding: 8px 24px;
  border-radius: 10px;
  border: 1px solid var(--gray-400, #b1b1b1);
  margin-top: 15px;
  color: #3f3f3f;
  font-size: 15px;
  font-family: "Inter";
  line-height: 14.5px;
  margin-inline: auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 14px;
`;

const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 442px;
  height: 64px;
  padding: 8px 24px;
  border-radius: 10px;
  margin-top: 15px;
  margin-inline: auto;
  background-color: transparent;
  border: 1px solid var(--gray-800, #3f3f3f);

  color: var(--gray-800, #3f3f3f);
  font-size: 16px;
  font-family: "Inter";
  line-height: 14.5px;
  cursor: pointer;

  &:hover {
    background-color: #0699d2;
    color: white;
    border: #0699d2;
  }
`;

const Label = styled.label`
  color: #3f3f3f;
  font-size: 20px;
  font-family: "Inter";
  cursor: pointer;
  &:last-of-type {
    margin-left: 30px;
  }
`;

const Radio = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const Error = styled.p`
  color: #ae0505;
  font-size: 18px;
  font-family: "Inter";
  line-height: 40px;
`;
