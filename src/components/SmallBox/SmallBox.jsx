import React from "react";
import "./SmallBox.css";

export default function SmallBox(props) {
  const { img, title, active } = props;

  return (
    <div className="smallBox-box"
      style={{
        boxShadow: active === "true" && "0px 0px 14px 8px #bebebe",
        border: active === "true" && "2px solid #ececec",
        backgroundImage: `url(${img})`
      }} >
      <p className="smallBox-title"
        style={{
          color: active === "true" && "#14aafe",
          borderLeft: active === "true" && "4px solid #14aafe; padding-left: 8px;"
        }} >
        {title}</p>
    </div>
  );
}
