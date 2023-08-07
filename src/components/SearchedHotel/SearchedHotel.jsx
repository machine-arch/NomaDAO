import React from "react";
import "./SearchedHotel.css";

export default function SearchedHotel(props) {
  const { mainImage, name, rating, facilities, location, price, activeBox } =
    props;
  return (
    <div className={`box${activeBox ? " active" : ""}`} key={name}>
      <img className="img" src={mainImage} />
      <div className="info">
        <p className="name">{name}</p>
        <div className="rating">{rating} / 5</div>
        <div className="facilities-wrapper">
          <p>Facilities:</p>
          <div className="facilities">
            {facilities.map((facility) => (
              <div className="facility" key={name + facility}>
                {facility}
              </div>
            ))}
          </div>
        </div>
        <p className="location">Location: {location}</p>
        <div className="price-wrapper">
          <p>from</p>
          <div className="price">${price} / night</div>
        </div>
      </div>
    </div>
  );
}
