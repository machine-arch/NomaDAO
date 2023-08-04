import React, { useState } from "react";
import MarketplaceLogin from "../MarketPlaceLogin/MarketplaceLogin.jsx";
import MarketplaceRegister from "../MarketPlaceLogin/MarketplaceRegister.jsx";
import "./AuthMarketplace.css";
export default function AuthMarketplace() {
  const [type, setType] = useState("login"); // form should be login or registraton

  // prettier-ignore
  function handleSwitch() {
    console.log('Switching forms');
    if (type === 'login') {
      setType('register')
    } else {
      setType('login')
    }
  }

  return (
    <div className="wrapper">
      <div className="flex">
        <span className="text">Login</span>
        <div className="checkboxWrapper">
          <input
            id="type"
            type="checkbox"
            onChange={handleSwitch}
            checked={type === "register"}
            class="checkbox-input"
          />
          <label for="type" class="checkbox-label"></label>
        </div>
        <span className="text">Register</span>
      </div>
      {type === "login" ? <MarketplaceLogin switchToRegister={handleSwitch} /> : <MarketplaceRegister switchToRegister={handleSwitch} />}
    </div>
  );
}


