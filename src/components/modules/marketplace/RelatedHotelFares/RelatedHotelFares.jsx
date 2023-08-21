import React from 'react';
import Green from '../../../../assets/images/green_triangle.svg';
import Red from '../../../../assets/images/red_triangle.svg';
import Avatar from '../../../../assets/images/avatar.png';
import './RelatedHotelFares.css';
export default function RelatedHotelFares() {
  const items = [];
  for (let index = 0; index < 13; index++) {
    items.push(
      <div className="relatedHotelFares-Item" key={index}>
        <img className="" src={Avatar} />
        <p className="relatedHotelFares-Hotel">Hotel {Math.floor(Math.random() * 10)}</p>
        <p className="relatedHotelFares-Price">{Math.floor(Math.random() * 100 + 200)} $</p>
        <p className="relatedHotelFares-Price">Tbilisi</p>
        <img className="" src={Math.random() > 0.5 ? Green : Red} />
      </div>,
    );
  }
  return (
    <div className="relatedHotelFares-Wrapper">
      <p className="relatedHotelFares-Title">Related Hotel Fares</p>
      {items.map((item) => item)}
      <button className="relatedHotelFares-View">View All</button>
    </div>
  );
}
