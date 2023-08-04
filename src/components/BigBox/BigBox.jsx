import React from "react";
import "./BigBox.css";

export default function BigBox(props) {
  const { img, title, description, active } = props;

  return (
    <div className="box">
      <img className="img" src={img} style={
        {
          boxShadow: `${active === "true" && "0px 0px 14px 8px #bebebe;"}`,
          border: `${active === "true" && "border: 2px solid #ececec;"}`
        }} />
      <p className="title" style={{
        borderLeft: `${active === "true" && "4px solid white;"}`,
        paddingLeft: `${active === "true" && " 8px;"}`,
        background: `${active === "true" && "linear-gradient(90.01deg, rgba(44, 136, 192, 0.5) 1.17%,rgba(23, 83, 91, 0) 100.67%);"}`,
      }}>
        {title + " \u2022 "}
        <span className="span">{description}</span>
      </p>
    </div>
  );
}
