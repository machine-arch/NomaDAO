import React from "react";
import Green from "../../assets/images/green_triangle.svg";
import Red from "../../assets/images/red_triangle.svg";
import Avatar from "../../assets/images/avatar.png";
import "./RelatedHotelFares.css";

export default function RelatedHotelFares() {
  const items = [];
  for (let index = 0; index < 13; index++) {
    items.push(
      <div className="item">
        <img className="img" src={Avatar} />
        <p className="hotel">Hotel {Math.floor(Math.random() * 10)}</p>
        <p className="price">{Math.floor(Math.random() * 100 + 200)} $</p>
        <p className="price">Tbilisi</p>
        <img className="img" src={Math.random() > 0.5 ? Green : Red} />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <p className="title">Related Hotel Fares</p>
      {items.map((item) => item)}
      <button className="view">View All</button>
    </div>
  );
}
