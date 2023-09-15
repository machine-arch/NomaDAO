import React from "react";
import "./Toggle.stylesheet.css";

const Toggle = ({ isToggled, setIsToggled }) => {
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="toggle-container">
      <label className="toggle-label">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
          className="toggle-input"
        />
        <span className={`toggle-slider ${isToggled ? "active" : ""}`}></span>
      </label>
    </div>
  );
};

export default Toggle;
