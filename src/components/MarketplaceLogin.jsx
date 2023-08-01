import React, { useEffect, useContext, useRef, useState } from "react";
import { styled } from "styled-components";
import { API_login } from "../api/requests.js";
import { useNavigate } from "react-router-dom";
import useConditionalHandler from "../hooks/useConditionalHandler";
import useMoveSound from "../hooks/useMoveSound";
import AsideContext from "../context/AsideContext";



export default function MarketplaceLogin({ switchToRegister }) {
  const asideContext = useContext(AsideContext);
  const [error, setError] = useState("");
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
      navigate("/marketplace/" + response.field+"/Home"); // navigate to corresponding page
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
        if (activeInput === 0) { // Check if current input is emailRef
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
        } else if(inputRefs[activeInput].current === checkBoxRef.current) {
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
    }
    else{
      emailRef.current.blur();
    }
  }, [asideActive]);
  
  // const handleCheck = () => {
  //   if (checkboxRef.current) {
  //     checkboxRef.current.checked = true;
  //   }
  // };

  // Enable event when user is inside any box
  useConditionalHandler(navigateInputs, true);

  return (
    <div>
      <Title>Welcome Back</Title>
      <UnderTitle>Login into your account</UnderTitle>
      <Input ref={emailRef} placeholder="Email" type="mail" />
      <Input ref={passwordRef} placeholder="Password" type="password" />
      <Flex>
        <CheckBoxWrapper>
          <CheckBox id="remember" type="checkbox" ref={checkBoxRef}/>
          <CheckBoxLabel htmlFor="remember" />
        </CheckBoxWrapper>
        <Remember>Remember me</Remember>
      </Flex>
      <Error>{error}</Error>
      <Submit ref={submitRef} onClick={handleSubmit}>Login</Submit>
    </div>
  );
}

const Title = styled.p`
  color: #3f3f3f;
  font-size: 36px;
  font-family: "Inter";
  font-weight: 600;
  line-height: 44px;
  text-align: center;
`;

const UnderTitle = styled.p`
  color: #3f3f3f;
  font-size: 18px;
  font-family: "Inter";
  text-align: center;
  margin-top: 5px;
`;

const Input = styled.input`
  display: flex;
  width: 442px;
  height: 70px;
  padding: 8px 24px;
  border-radius: 10px;
  border: 1px solid var(--gray-400, #b1b1b1);
  margin-top: 15px;
  &:first-of-type {
    margin-top: 45px;
  }

  color: #3f3f3f;
  font-size: 15px;
  font-family: "Inter";
  line-height: 14.5px;
`;

const CheckBoxWrapper = styled.div`

  position: relative;
  &:focus {
  border-radius: 10px;
  border: 1px solid var(--gray-400, #000);
  }
`;



const CheckBoxLabel = styled.label`


  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    &:hover,
&:focus {
  border-color: black;
}
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const CheckBoxs = styled.input`
opacity: 0;
`

const Remember = styled.span`
  color: #3f3f3f;
  font-size: 15px;
  font-family: "Inter";
  line-height: 14.5px;
  margin-left: 15px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
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

const Error = styled.p`
  color: #ae0505;
  font-size: 18px;
  font-family: "Inter";
  line-height: 40px;
`;

