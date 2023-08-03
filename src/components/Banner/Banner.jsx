import React from "react";
import "./Banner.css"
export default function Banner(props) {
  const { title, active, img } = props;

  return (
    <div className="box" style={{
      backgroundImage: `url(${img})`,
      ...(active === "true" && {
        boxShadow: "0px 0px 14px 8px #bebebe",
        border: "2px solid #ececec",
      })
    }}>
      <p className="title" style={active === "true" && {
        color: "#14aafe",
        borderLeft: "4px solid #14aafe",
        paddingLeft: "8px",
      }}>{title}</p>
    </div>
  );
}
