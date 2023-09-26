import React from 'react';
import './FilterBox.stylesheet.css';

const FilterBox = ({ showFilterBox, setShowFilterBox, className, config }) => {
  return (
    <div
      className={`${className} ${
        showFilterBox == true ? 'filter__box__visible' : 'filter__box__hidden'
      }`}
    >
      <div className="filter__viewMode">
        <h1 className="filter__title">View Mode</h1>
        <button
          className={`${
            config?.dimension?.components?.filter__threed__btn?.className
          } ${
            config?.dimension?.components?.filter__threed__btn?.isActive
              ? config?.dimension?.components?.filter__threed__btn?.activeClass
              : ''
          }`}
        >
          3D Look
        </button>
      </div>
      <div className="filter__sort">
        <h1 className="filter__title">Sort</h1>
        <div>
          <button
            className={`${
              config?.sort?.components?.filter__partners__btn?.className
            } ${
              config?.sort?.components?.filter__partners__btn?.isActive
                ? config?.sort?.components?.filter__partners__btn?.activeClass
                : ''
            }`}
          >
            Partner Hotels
          </button>
          <button
            className={`filter__select__btn__default ${
              config?.sort?.components?.filter__select__btn__default_1
                ?.className
            }
            ${
              config?.sort?.components?.filter__select__btn__default_1?.isActive
                ? config?.sort?.components?.filter__select__btn__default_1
                    ?.activeClass
                : ''
            }
            `}
          >
            Low Price First
          </button>
          <button
            className={`filter__select__btn__default ${
              config?.sort?.components?.filter__select__btn__default_2
                ?.className
            }
            ${
              config?.sort?.components?.filter__select__btn__default_2?.isActive
                ? config?.sort?.components?.filter__select__btn__default_2
                    ?.activeClass
                : ''
            }
            `}
          >
            Recommended
          </button>
          <button
            className={`filter__select__btn__default ${
              config?.sort?.components?.filter__select__btn__default_3
                ?.className
            }
            ${
              config?.sort?.components?.filter__select__btn__default_3?.isActive
                ? config?.sort?.components?.filter__select__btn__default_3
                    ?.activeClass
                : ''
            }
            `}
          >
            High Price First
          </button>
          <button
            className={`filter__select__btn__default ${
              config?.sort?.components?.filter__select__btn__default_4
                ?.className
            }
            ${
              config?.filter__select__btn__default_4?.isActive
                ? config?.sort?.components?.filter__select__btn__default_4
                    ?.activeClass
                : ''
            }
            `}
          >
            High Rating First
          </button>
        </div>
      </div>
      <div className="filter__perNight">
        <h1 className="filter__title">Your Budget Per Night</h1>
        <div className="min__max">
          <div className="budget__min">
            <h1 className="filter__title">Min</h1>
            <input
              type="text"
              placeholder="$ 500"
              className={`${
                config?.perNight?.components?.filter__perNight_min?.className
              } ${
                config?.perNight?.components?.filter__perNight_min?.isActive
                  ? config?.perNight?.components?.filter__perNight_min
                      ?.activeClass
                  : ''
              }`}
            />
          </div>
          <div className="budget__max">
            <h1 className="filter__title">Max</h1>
            <input
              type="text"
              placeholder="$ 1400"
              className={`${
                config?.perNight?.components?.filter__perNight_max?.className
              } ${
                config?.perNight?.components?.filter__perNight_max?.isActive
                  ? config?.perNight?.components?.filter__perNight_max
                      ?.activeClass
                  : ''
              }`}
            />
          </div>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="filter__hotelStar">
        <h1 className="filter__title">Hotel Star</h1>
        {/* CHECKBOX STARTS */}
        <div>
          <div
            className={`conteiner ${
              config?.hotel_star?.components?.checkbox_hotel_5_star?.isActive
                ? config?.hotel_star?.components?.checkbox_hotel_5_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotel_star?.components?.checkbox_hotel_5_star?.className}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.target.checked = !e.target.checked;
                  }
                }}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={`${
              config?.hotel_star?.components?.checkbox_hotel_4_star?.isActive
                ? config?.hotel_star?.components?.checkbox_hotel_4_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotel_star?.components?.checkbox_hotel_4_star?.className}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.target.checked = !e.target.checked;
                  }
                }}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={`${
              config?.hotel_star?.components?.checkbox_hotel_3_star?.isActive
                ? config?.hotel_star?.components?.checkbox_hotel_3_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotel_star?.components?.checkbox_hotel_3_star?.className} `}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={`${
              config?.hotel_star?.components?.checkbox_hotel_2_star?.isActive
                ? config?.hotel_star?.components?.checkbox_hotel_2_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotel_star?.components?.checkbox_hotel_2_star?.className}`}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={`${
              config?.hotel_star?.components?.checkbox_hotel_1_star?.isActive
                ? config?.hotel_star?.components?.checkbox_hotel_1_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotel_star?.components?.checkbox_hotel_1_star?.className}`}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        {/* CHECKBOX ENDS */}
      </div>
      <div className="filter__reviewScore">
        <h1 className="filter__title">Review Score</h1>
        {/* CHECKBOX STARTS */}
        <div>
          <div
            className={`${
              config?.review?.components?.checkbox_review_5_star?.isActive
                ? config?.review?.components?.checkbox_review_5_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.review?.components?.checkbox_review_5_star?.className}`}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={`${
              config?.review?.components?.checkbox_review_4_star?.isActive
                ? config?.review?.components?.checkbox_review_4_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.review?.components?.checkbox_review_4_star?.className} `}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.review?.components?.checkbox_review_3_star?.isActive
                ? config?.review?.components?.checkbox_review_3_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.review?.components?.checkbox_review_3_star?.className}`}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.review?.components?.checkbox_review_2_star?.isActive
                ? config?.review?.components?.checkbox_review_2_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.review?.components?.checkbox_review_2_star?.className}`}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={`${
              config?.review?.components?.checkbox_review_1_star?.isActive
                ? config?.review?.components?.checkbox_review_1_star
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.review?.components?.checkbox_review_1_star?.className}`}
              />
              <div className="checkbox__horizontal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FEAC31"
                  />
                </svg>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        {/* CHECKBOX ENDS */}
      </div>
      <hr className="hr"></hr>
      <div className="filter__propertyType">
        <h1 className="filter__title">Property Type</h1>
        {/* CHECKBOX STARTS */}
        <div>
          <div
            className={`${
              config?.propertyType?.components?.checkbox_propertyType_1
                ?.isActive
                ? config?.propertyType?.components?.checkbox_propertyType_1
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.propertyType?.components?.checkbox_propertyType_1?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Apartments</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.propertyType?.components?.checkbox_propertyType_2
                ?.isActive
                ? config?.propertyType?.components?.checkbox_propertyType_2
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.propertyType?.components?.checkbox_propertyType_2?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Hotels</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.propertyType?.components?.checkbox_propertyType_3
                ?.isActive
                ? config?.propertyType?.components?.checkbox_propertyType_3
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.propertyType?.components?.checkbox_propertyType_3?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Homestays</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.propertyType?.components?.checkbox_propertyType_4
                ?.isActive
                ? config?.propertyType?.components?.checkbox_propertyType_4
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.propertyType?.components?.checkbox_propertyType_4?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Villas</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.propertyType?.components?.checkbox_propertyType_5
                ?.isActive
                ? config?.propertyType?.components?.checkbox_propertyType_5
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.propertyType?.components?.checkbox_propertyType_5?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Motels</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        {/* CHECKBOX ENDS */}
      </div>
      <hr className="hr"></hr>
      <div className="filter__facilities">
        <h1 className="filter__title">Facilities</h1>
        {/* CHECKBOX STARTS */}
        <div>
          <div
            className={` ${
              config?.facilities?.components?.checkbox_facilities_1?.isActive
                ? config?.facilities?.components?.checkbox_facilities_1
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.facilities?.components?.checkbox_facilities_1?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Wake-up call</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.facilities?.components?.checkbox_facilities_2?.isActive
                ? config?.facilities?.components?.checkbox_facilities_2
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.facilities?.components?.checkbox_facilities_2?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Cr hire</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.facilities?.components?.checkbox_facilities_3?.isActive
                ? config?.facilities?.components?.checkbox_facilities_3
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.facilities?.components?.checkbox_facilities_3?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Flat TV</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.facilities?.components?.checkbox_facilities_4?.isActive
                ? config?.facilities?.components?.checkbox_facilities_4
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.facilities?.components?.checkbox_facilities_4?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Laundry and dry cleaning</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={`${
              config?.facilities?.components?.checkbox_facilities_5?.isActive
                ? config?.facilities?.components?.checkbox_facilities_5
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.facilities?.components?.checkbox_facilities_5?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Internet - WiFi</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        {/* CHECKBOX ENDS */}
      </div>
      <hr className="hr"></hr>
      <div className="filter__hotelService">
        <h1 className="filter__title">Hotel Service</h1>
        {/* CHECKBOX STARTS */}
        <div>
          <div
            className={` ${
              config?.hotelService?.components?.checkbox_hotelService_1
                ?.isActive
                ? config?.hotelService?.components?.checkbox_hotelService_1
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotelService?.components?.checkbox_hotelService_1?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Havana Lobby Bar</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.hotelService?.components?.checkbox_hotelService_2
                ?.isActive
                ? config?.hotelService?.components?.checkbox_hotelService_2
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotelService?.components?.checkbox_hotelService_2?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Flesta Restaurant</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.hotelService?.components?.checkbox_hotelService_3
                ?.isActive
                ? config?.hotelService?.components?.checkbox_hotelService_3
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotelService?.components?.checkbox_hotelService_3?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Hotel Transport Services</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={` ${
              config?.hotelService?.components?.checkbox_hotelService_4
                ?.isActive
                ? config?.hotelService?.components?.checkbox_hotelService_4
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotelService?.components?.checkbox_hotelService_4?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Laundry Services</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
          <div
            className={`${
              config?.hotelService?.components?.checkbox_hotelService_5
                ?.isActive
                ? config?.hotelService?.components?.checkbox_hotelService_5
                    ?.activeClass
                : ''
            }`}
          >
            <label className="checkbox__container">
              <input
                type="checkbox"
                className={`${config?.hotelService?.components?.checkbox_hotelService_5?.className}`}
              />
              <div className="checkbox__horizontal">
                <h1 className="checkbox__title">Pets Welcome</h1>
              </div>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        {/* CHECKBOX ENDS */}
      </div>
    </div>
  );
};

export default FilterBox;
