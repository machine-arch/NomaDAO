import React from 'react';
import './SearchedHotel.css';

export default function SearchedHotel(props) {
  const { mainImage, name, rating, facilities, location, price, activeBox } =
    props;
  return (
    <div
      className={`SearchedHotel-box${activeBox ? ' active' : ''}`}
      key={name}
    >
      <img className="SearchedHotel-img" src={mainImage} />
      <div className="SearchedHotel-info">
        <p className="SearchedHotel-name">{name}</p>
        <div className="SearchedHotel-rating">{rating} / 5</div>
        <div className="SearchedHotel-facilities-wrapper">
          <p>Facilities:</p>
          <div className="SearchedHotel-facilities">
            {facilities.map((facility) => (
              <div className="SearchedHotel-facility" key={name + facility}>
                {facility}
              </div>
            ))}
          </div>
        </div>
        <p className="SearchedHotel-location">Location: {location}</p>
        <div className="SearchedHotel-price-wrapper">
          <p>from</p>
          <div className="SearchedHotel-price">${price} / night</div>
        </div>
      </div>
    </div>
  );
}
