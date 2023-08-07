import React, { useState } from 'react';
import './MarketPlaceSettings.css';

export default function MartketPlaceSettings() {
  const [activeForm, setActiveForm] = useState('option1');
  const [message, setMessage] = useState('');
  const handleFormToggle = (formOption) => {
    setActiveForm(formOption);
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch(
        'http://116.202.22.148:8888/changePassword',
        {
          // Update the URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            oldPassword: document.getElementById('oldpsw').value,
            newPassword: document.getElementById('newpsw').value,
            confirmPassword: document.getElementById('repeatnewpass').value,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage('Password Changed Successfully');
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
    document.getElementById('oldpsw').value = '';
    document.getElementById('newpsw').value = '';
    document.getElementById('repeatnewpass').value = '';
  };

  return (
    <>
      <BtnWrapper>
        <Choice
          onClick={() => handleFormToggle('option1')}
          style={{ color: activeForm === 'option1' ? '#009BD8' : 'black' }}
        >
          Company Details
        </Choice>
        <Choice
          onClick={() => handleFormToggle('option2')}
          style={{ color: activeForm === 'option2' ? '#009BD8' : 'black' }}
        >
          Security
        </Choice>
      </BtnWrapper>

      {activeForm === 'option1' && (
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
                  style={{ backgroundColor: '#D8D8D8', color: '#F2F2F2' }}
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

      {activeForm === 'option2' && (
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
