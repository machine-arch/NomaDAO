import React from "react";
import "./SmallBox.css";

export default function SmallBox(props) {
  const { img, title, active } = props;

  return (
    <div
      className={`box${active === "true" ? " active" : ""}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <p className={`title${active === "true" ? " active" : ""}`}>{title}</p>
    </div>
  );
}
