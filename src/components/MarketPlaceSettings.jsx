import React, { useState } from "react";
import axios from "axios";

import { styled } from "styled-components";

export default function MartketPlaceSettings() {
  const [activeForm, setActiveForm] = useState("option1");
  const [message, setMessage] = useState("");
  const handleFormToggle = (formOption) => {
    setActiveForm(formOption);
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch(
        "http://116.202.22.148:8888/changePassword",
        {
          // Update the URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            oldPassword: document.getElementById("oldpsw").value,
            newPassword: document.getElementById("newpsw").value,
            confirmPassword: document.getElementById("repeatnewpass").value,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Password Changed Successfully");
        resetForm();
      } else {
        setMessage(data.error);
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    document.getElementById("oldpsw").value = "";
    document.getElementById("newpsw").value = "";
    document.getElementById("repeatnewpass").value = "";
  };

  return (
    <>
      <BtnWrapper>
        <Choice
          onClick={() => handleFormToggle("option1")}
          style={{ color: activeForm === "option1" ? "#009BD8" : "black" }}
        >
          Company Details
        </Choice>
        <Choice
          onClick={() => handleFormToggle("option2")}
          style={{ color: activeForm === "option2" ? "#009BD8" : "black" }}
        >
          Security
        </Choice>
      </BtnWrapper>

      {activeForm === "option1" && (
        <Wrapper>
          <Forms>
            {/* Form1 */}
            <Form>
              <Label htmlFor="companyName">Company Name</Label>
              <Input type="text" id="companyName" placeholder="Company Name" />

              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Hotel@gmail.com" />

              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input type="tel" id="phoneNumber" placeholder="+995123123123" />

              <Label htmlFor="affiliateCode">Affiliate Code</Label>
              <Last>
                <Input
                  type="text"
                  id="affiliateCode"
                  placeholder="Affiliate Code"
                />
                <Button
                  type="submit"
                  style={{ backgroundColor: "#D8D8D8", color: "#F2F2F2" }}
                >
                  Generate Now
                </Button>
              </Last>
            </Form>
            {/* Form2 */}
            <Form>
              <Label htmlFor="companyidentificationcode">
                Company identification code
              </Label>
              <Input
                type="text"
                id="companyidentificationcode"
                placeholder="Company identification code"
              />

              <Label htmlFor="email">Country</Label>
              <Input type="text" id="country" placeholder="Georgia" />

              <Label htmlFor="phoneNumber">City</Label>
              <Input type="text" id="city" placeholder="Enter Your City Name" />

              <Label htmlFor="affiliateCode">Address</Label>
              <Input
                type="text"
                id="address"
                placeholder="Enter Your Address"
              />

              <Label htmlFor="companyName">ZIP Code</Label>
              <Input type="text" id="zip" placeholder="Enter Your ZIP Code" />

              <Button type="submit">Save Information </Button>
            </Form>
          </Forms>
        </Wrapper>
      )}

      {activeForm === "option2" && (
        <Wrapper>
          <Form>
            <Label htmlFor="oldpassword">Old Password</Label>
            <Input type="text" id="oldpsw" placeholder="Type old password" />

            <Label htmlFor="newpassword">New Password</Label>
            <Input
              type="password"
              id="newpsw"
              placeholder="Type new password"
            />

            <Label htmlFor="repeatnewpassword">Repeat New Password</Label>
            <Input
              type="password"
              id="repeatnewpass"
              placeholder="Repeat new password"
            />

            <Button type="submit" onClick={handleFormSubmit}>
              Save Information
            </Button>
          </Form>
          <Message>{message}</Message>
        </Wrapper>
      )}
    </>
  );
}

const Last = styled.div`
  gap: 25px;
  display: flex;
  width: 100%;
`;

const Message = styled.p`
  margin-top: 30px;
  color: #0699d2;
  font-size: 1.5rem;
`;
const BtnWrapper = styled.div`
    left: 25%;
    top: 4%;
    position: absolute;
    justify-content: space-between;
    width: 210px;
    height: 22px;
    display: flex;
}`;
const Choice = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  color: black;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 60px 50px 0px 50px;
`;

const Forms = styled.div`
  gap: 100px;
  display: flex;
  margin-top: 20px;
  padding: 0px 50px 0px 0px;
`;

const Button = styled.div`
  cursor: pointer;
  color: #ececec;
  align-self: flex-end;
  border-radius: 4px;
  background: var(--blue, #0699d2);
  display: flex;
  width: 154px;
  height: 43px;
  padding: 10px 8px 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 425px;
  height: auto;
  gap: 16px;
`;
const Label = styled.label`
  font-size: 16px;
`;
const Input = styled.input`
  display: flex;
  width: 425px;
  height: 43px;
  padding: 10px 8px 10px 16px;
  align-items: center;
  gap: 10px;

  color: #4c4c4c;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  border-radius: 4px;
  border: 1px solid var(--gray-300, #c5c5c5);
  background: var(--background-section, #f2f2f2);
`;
