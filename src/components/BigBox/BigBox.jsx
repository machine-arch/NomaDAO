import React from 'react';
import './BigBox.css';

export default function BigBox(props) {
  const { img, title, description, active } = props;

  return (
    <div className="bigBox-box">
      <img
        className={`bigBox-img ${active === 'true' ? 'active' : ''}`}
        src={img}
        alt={title}
      />
      <p className={`bigBox-title ${active === 'true' ? 'active' : ''}`}>
        {title + ' \u2022 '} <span>{description}</span>
      </p>
    </div>
  );
}
