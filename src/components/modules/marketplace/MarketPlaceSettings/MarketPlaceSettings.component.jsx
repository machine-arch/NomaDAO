import React, { useState } from 'react';
import './MarketPlaceSettings.stylesheet.css';

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
      <div className="btn-wrapper">
        <button
          onClick={() => handleFormToggle('option1')}
          className="choice"
          style={{ color: activeForm === 'option1' ? '#009BD8' : 'black' }}
        >
          Company Details
        </button>
        <button
          onClick={() => handleFormToggle('option2')}
          className="choice"
          style={{ color: activeForm === 'option2' ? '#009BD8' : 'black' }}
        >
          Security
        </button>
      </div>

      {activeForm === 'option1' && (
        <div className="wrapper">
          <div className="forms">
            <form className="form">
              <label htmlFor="companyName" className="label">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="input"
                placeholder="Company Name"
              />

              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="Hotel@gmail.com"
              />

              <label htmlFor="phoneNumber" className="label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="input"
                placeholder="+995123123123"
              />

              <label htmlFor="affiliateCode" className="label">
                Affiliate Code
              </label>
              <div className="last">
                <input
                  type="text"
                  id="affiliateCode"
                  className="input"
                  placeholder="Affiliate Code"
                />
                <div
                  className="button"
                  style={{ backgroundColor: '#D8D8D8', color: '#F2F2F2' }}
                >
                  Generate Now
                </div>
              </div>
            </form>
            <form className="form">
              <label htmlFor="companyidentificationcode" className="label">
                Company identification code
              </label>
              <input
                type="text"
                id="companyidentificationcode"
                className="input"
                placeholder="Company identification code"
              />

              <label htmlFor="email" className="label">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="input"
                placeholder="Georgia"
              />

              <label htmlFor="phoneNumber" className="label">
                City
              </label>
              <input
                type="text"
                id="city"
                className="input"
                placeholder="Enter Your City Name"
              />

              <label htmlFor="affiliateCode" className="label">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="input"
                placeholder="Enter Your Address"
              />

              <label htmlFor="companyName" className="label">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                className="input"
                placeholder="Enter Your ZIP Code"
              />

              <div className="button">Save Information</div>
            </form>
          </div>
        </div>
      )}

      {activeForm === 'option2' && (
        <div className="wrapper">
          <form className="form">
            <label htmlFor="oldpassword" className="label">
              Old Password
            </label>
            <input
              type="text"
              id="oldpsw"
              className="input"
              placeholder="Type old password"
            />

            <label htmlFor="newpassword" className="label">
              New Password
            </label>
            <input
              type="password"
              id="newpsw"
              className="input"
              placeholder="Type new password"
            />

            <label htmlFor="repeatnewpassword" className="label">
              Repeat New Password
            </label>
            <input
              type="password"
              id="repeatnewpass"
              className="input"
              placeholder="Repeat new password"
            />

            <div className="button" onClick={handleFormSubmit}>
              Save Information
            </div>
          </form>
          <p className="message">{message}</p>
        </div>
      )}
    </>
  );
}
