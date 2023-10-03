import React, { useState } from 'react';
import './BookingDetailedSlider.stylesheet.css';
import BookingDetailedSliderBackArrow from './BookingDetailedSliderBackArrow/BookingDetailedSliderBackArrow';
import BookingDetailedSliderNextArrow from './BookingDetailedSliderNextArrow/BookingDetailedSliderNextArrow';
import BookingDetailedSlider3D from './BookingDetailedSlider3D/BookingDetailedSlider3D';

const BookingDetailedSlider = ({ config }) => {
  const SLIDER_IMGS = [
    {
      id: 1,
      src: '/src/assets/images/mock_apartment_slider1.jpeg',
    },
    {
      id: 2,
      src: '/src/assets/images/mock_apartment_slider2.jpeg',
    },
    {
      id: 3,
      src: '/src/assets/images/mock_apartment_slider3.jpeg',
    },
  ];

  const [mainBgIndex, setMainBgIndex] = useState(0);

  const chooseNewMainBg = () => {
    if (mainBgIndex == SLIDER_IMGS.length - 1) {
      setMainBgIndex(0);
    } else {
      setMainBgIndex(mainBgIndex + 1);
    }
  };

  return (
    <div className="detailed__slider__bg">
      <img
        className="detailed__slider__mainImage"
        src={SLIDER_IMGS[mainBgIndex].src}
      />
      <button className="view__threed__btn">View in 3D</button>
      <div className="detailed__slider">
        <BookingDetailedSliderBackArrow />
        <div className="detailed__slider__item">
          <BookingDetailedSlider3D
            isActive={config?.components?.detailed__slider__threed?.isActive}
            className={config?.components?.detailed__slider__threed?.className}
            actieveClass={
              config?.components?.detailed__slider__threed?.activeClass
            }
          />
        </div>
        {SLIDER_IMGS.map((img, i) => {
          if (i !== mainBgIndex) {
            return (
              <div
                tabIndex={0}
                key={i}
                className={`${
                  config?.components?.detailed__slider__item?.className
                } ${
                  config?.components?.detailed__slider__item?.isActive &&
                  i ===
                    config?.components?.detailed__slider__item?.factory?.index
                    ? 'booking-result-active-element'
                    : ''
                }`}
                id={`${config?.components?.detailed__slider__item?.className}-${i}`}
              >
                <img src={img.src} className="detailed__slider__img" />
              </div>
            );
          }
        })}
        <BookingDetailedSliderNextArrow onClick={() => chooseNewMainBg()} />
      </div>
    </div>
  );
};

export default BookingDetailedSlider;
