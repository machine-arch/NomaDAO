import React from 'react';
import './BookingSearchResult.stylesheet.css';
import { useNavigate } from 'react-router-dom';
import ResultStar from './ResultStar/ResultStar';

const BookingSearchResult = ({ index, config, data }) => {
  const navigate = useNavigate();
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          navigate(`/BookYourHotel/${data?._id}`);
        }
      }}
      className="booking__search__result"
      id={`${config?.components?.booking__result__box?.className}-${index}`}
      tabIndex={0}
    >
      <div
        className={`container ${
          config?.components?.booking__result__box?.className
        }
      ${
        config?.components?.booking__result__box?.isActive &&
        index === config?.factory?.index
          ? config?.components?.booking__result__box?.activeClass
          : ''
      }
      `}
        tabIndex={0}
      >
        <div className="left">
          <img className="booking__result__img" src={data?.images[0]} />
        </div>
        <div className="right">
          <div className="right__top">
            <div className="right__top__left">
              <h1 className="hotel__title">{data?.hotelName}</h1>
              <div className="right__top__left_bottom">
                <ResultStar starsCount={data?.rating} />
                <button className="btn__partner">Partners Hotels</button>
                <button className="btn__3dlook">3D Look</button>
              </div>
            </div>
            <div className="right__top__right">
              <div className="right__top__right__left">
                <h1 className="review__title">Very Good</h1>
                <h1 className="review__count">{data?.reviews} reviews</h1>
              </div>
              <div className="right__top__right__right">
                <div className="rating__box">{data?.rating}/5</div>
              </div>
            </div>
          </div>
          <div className="right__middle">
            <div className="right__middle__header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M6.66667 2.5H2.66667C2.48986 2.5 2.32029 2.57024 2.19526 2.69526C2.07024 2.82029 2 2.98986 2 3.16667V7.16667C2 7.34348 2.07024 7.51305 2.19526 7.63807C2.32029 7.76309 2.48986 7.83333 2.66667 7.83333H6.66667C6.84348 7.83333 7.01305 7.76309 7.13807 7.63807C7.26309 7.51305 7.33333 7.34348 7.33333 7.16667V3.16667C7.33333 2.98986 7.26309 2.82029 7.13807 2.69526C7.01305 2.57024 6.84348 2.5 6.66667 2.5ZM13.3333 9.16667H9.33333C9.15652 9.16667 8.98695 9.2369 8.86193 9.36193C8.7369 9.48695 8.66667 9.65652 8.66667 9.83333V13.8333C8.66667 14.0101 8.7369 14.1797 8.86193 14.3047C8.98695 14.4298 9.15652 14.5 9.33333 14.5H13.3333C13.5101 14.5 13.6797 14.4298 13.8047 14.3047C13.9298 14.1797 14 14.0101 14 13.8333V9.83333C14 9.65652 13.9298 9.48695 13.8047 9.36193C13.6797 9.2369 13.5101 9.16667 13.3333 9.16667ZM11.3333 2.5C9.86267 2.5 8.66667 3.696 8.66667 5.16667C8.66667 6.63733 9.86267 7.83333 11.3333 7.83333C12.804 7.83333 14 6.63733 14 5.16667C14 3.696 12.804 2.5 11.3333 2.5ZM4.66667 9.16667C3.196 9.16667 2 10.3627 2 11.8333C2 13.304 3.196 14.5 4.66667 14.5C6.13733 14.5 7.33333 13.304 7.33333 11.8333C7.33333 10.3627 6.13733 9.16667 4.66667 9.16667Z"
                  fill="#202020"
                />
              </svg>
              <h1 className="right__middle__header__title">Facilities:</h1>
            </div>
            <div className="facilities">
              {data?.facilities?.wakeUpCall == true && (
                <span className="facility">Wake Up Call</span>
              )}
              {data?.facilities?.crHire == true && (
                <span className="facility">CR Hire</span>
              )}
              {data?.facilities?.flatTv == true && (
                <span className="facility">Flat TV</span>
              )}
              {data?.facilities?.dryCleaning == true && (
                <span className="facility">Dry Cleaning</span>
              )}
              {data?.facilities?.internet == true && (
                <span className="facility">Internet</span>
              )}
            </div>
          </div>
          <div className="right__bottom">
            <div className="right__bottom__left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M7.75133 1.50244C5.42795 1.50244 3.54883 3.38156 3.54883 5.70494C3.54883 8.85682 7.75133 13.5096 7.75133 13.5096C7.75133 13.5096 11.9538 8.85682 11.9538 5.70494C11.9538 3.38156 10.0747 1.50244 7.75133 1.50244ZM7.75133 7.20584C7.35327 7.20584 6.97151 7.04771 6.69004 6.76623C6.40857 6.48476 6.25044 6.103 6.25044 5.70494C6.25044 5.30688 6.40857 4.92512 6.69004 4.64365C6.97151 4.36218 7.35327 4.20405 7.75133 4.20405C8.14939 4.20405 8.53115 4.36218 8.81262 4.64365C9.09409 4.92512 9.25222 5.30688 9.25222 5.70494C9.25222 6.103 9.09409 6.48476 8.81262 6.76623C8.53115 7.04771 8.14939 7.20584 7.75133 7.20584Z"
                  fill="#202020"
                />
              </svg>
              <h1 className="location">Location: {data?.location}</h1>
            </div>
            <div className="right__bottom__right">
              <h1>from</h1>
              <div className="price__box">${data?.price} / night</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSearchResult;
