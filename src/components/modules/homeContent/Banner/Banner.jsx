import React from 'react';
import './Banner.css';

export default function Banner(props) {
  const { title, active, img } = props;

  return (
    <div
      className={`banner-box ${active === 'true' ? 'active' : ''}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <p className={`banner-title ${active === 'true' ? 'active' : ''}`}>
        {title}
      </p>
    </div>
  );
}
