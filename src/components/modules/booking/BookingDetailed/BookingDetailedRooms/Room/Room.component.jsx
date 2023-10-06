import React from "react";
import "./Room.stylesheet.css";

const Room = ({ className, id, data }) => {
  return (
    <div className={className} id={id}>
      <div className="room__card__left">
        <img src={data?.image} />
      </div>
      <div className="room__card__right">
        <div className="room__card__right__top">
          <h1>{data?.bedType}</h1>
          <button>${data?.price}/night</button>
        </div>
        <div className="room__card__right__middle">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M6.66667 2.86206H2.66667C2.48986 2.86206 2.32029 2.9323 2.19526 3.05732C2.07024 3.18235 2 3.35192 2 3.52873V7.52873C2 7.70554 2.07024 7.87511 2.19526 8.00013C2.32029 8.12516 2.48986 8.19539 2.66667 8.19539H6.66667C6.84348 8.19539 7.01305 8.12516 7.13807 8.00013C7.26309 7.87511 7.33333 7.70554 7.33333 7.52873V3.52873C7.33333 3.35192 7.26309 3.18235 7.13807 3.05732C7.01305 2.9323 6.84348 2.86206 6.66667 2.86206ZM13.3333 9.52873H9.33333C9.15652 9.52873 8.98695 9.59896 8.86193 9.72399C8.7369 9.84901 8.66667 10.0186 8.66667 10.1954V14.1954C8.66667 14.3722 8.7369 14.5418 8.86193 14.6668C8.98695 14.7918 9.15652 14.8621 9.33333 14.8621H13.3333C13.5101 14.8621 13.6797 14.7918 13.8047 14.6668C13.9298 14.5418 14 14.3722 14 14.1954V10.1954C14 10.0186 13.9298 9.84901 13.8047 9.72399C13.6797 9.59896 13.5101 9.52873 13.3333 9.52873ZM11.3333 2.86206C9.86267 2.86206 8.66667 4.05806 8.66667 5.52873C8.66667 6.99939 9.86267 8.19539 11.3333 8.19539C12.804 8.19539 14 6.99939 14 5.52873C14 4.05806 12.804 2.86206 11.3333 2.86206ZM4.66667 9.52873C3.196 9.52873 2 10.7247 2 12.1954C2 13.6661 3.196 14.8621 4.66667 14.8621C6.13733 14.8621 7.33333 13.6661 7.33333 12.1954C7.33333 10.7247 6.13733 9.52873 4.66667 9.52873Z"
                fill="#202020"
              />
            </svg>
            Facilities:
          </span>
          <div className="room__card__facilities">
            {data?.facilities?.wakeUpCall && (
              <span className="room__card__facility">Wake up call</span>
            )}
            {data?.facilities?.dryCleaning && (
              <span className="room__card__facility">
                Laundry and dry cleaning
              </span>
            )}
            {data?.facilities?.crHire && (
              <span className="room__card__facility">Car Hire</span>
            )}
            {data?.facilities?.flatTv && (
              <span className="room__card__facility">Flat TV</span>
            )}
            {data?.facilities?.internetUpCall && (
              <span className="room__card__facility">Internet - WiFi</span>
            )}
          </div>
        </div>
        <div className="room__card__right__bottom">
          <div className="room__card__right__bottom__left">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clipPath="url(#clip0_894_943)">
                  <path
                    d="M3.5 6.36206C3.74493 6.36209 3.98134 6.45202 4.16437 6.61478C4.34741 6.77753 4.46434 7.00181 4.493 7.24506L4.5 7.36206V13.3621H10.5V8.36206C10.5 8.11713 10.59 7.88072 10.7527 7.69769C10.9155 7.51465 11.1397 7.39772 11.383 7.36906L11.5 7.36206H19.5C20.2652 7.36202 21.0015 7.65439 21.5583 8.17934C22.115 8.7043 22.4501 9.42217 22.495 10.1861L22.5 10.3621V18.3621C22.4997 18.6169 22.4021 18.8621 22.2272 19.0474C22.0522 19.2328 21.813 19.3443 21.5586 19.3592C21.3042 19.3742 21.0536 19.2914 20.8582 19.1278C20.6627 18.9642 20.5371 18.7322 20.507 18.4791L20.5 18.3621V15.3621H4.5V18.3621C4.49972 18.6169 4.40212 18.8621 4.22715 19.0474C4.05218 19.2328 3.81305 19.3443 3.55861 19.3592C3.30416 19.3742 3.05362 19.2914 2.85817 19.1278C2.66271 18.9642 2.5371 18.7322 2.507 18.4791L2.5 18.3621V7.36206C2.5 7.09684 2.60536 6.84249 2.79289 6.65495C2.98043 6.46742 3.23478 6.36206 3.5 6.36206Z"
                    fill="#3F3F3F"
                  />
                  <path
                    d="M7.5 8.36206C7.88914 8.36218 8.2698 8.47583 8.59532 8.68907C8.92084 8.90231 9.17707 9.20589 9.33263 9.56259C9.48818 9.91929 9.5363 10.3136 9.47108 10.6973C9.40586 11.0809 9.23013 11.4372 8.96544 11.7224C8.70075 12.0077 8.35859 12.2095 7.98089 12.3032C7.60319 12.3969 7.20637 12.3784 6.83904 12.2499C6.47172 12.1214 6.14986 11.8886 5.9129 11.5799C5.67594 11.2712 5.53419 10.9001 5.505 10.5121L5.5 10.3621L5.505 10.2121C5.54284 9.70891 5.76947 9.23865 6.13945 8.89556C6.50943 8.55247 6.99542 8.3619 7.5 8.36206Z"
                    fill="#3F3F3F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_894_943">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5 0.362061)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {data?.bedsCount}x
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M16.5 11.3621C18.16 11.3621 19.49 10.0221 19.49 8.36206C19.49 6.70206 18.16 5.36206 16.5 5.36206C14.84 5.36206 13.5 6.70206 13.5 8.36206C13.5 10.0221 14.84 11.3621 16.5 11.3621ZM8.5 11.3621C10.16 11.3621 11.49 10.0221 11.49 8.36206C11.49 6.70206 10.16 5.36206 8.5 5.36206C6.84 5.36206 5.5 6.70206 5.5 8.36206C5.5 10.0221 6.84 11.3621 8.5 11.3621ZM8.5 13.3621C6.17 13.3621 1.5 14.5321 1.5 16.8621V18.3621C1.5 18.9121 1.95 19.3621 2.5 19.3621H14.5C15.05 19.3621 15.5 18.9121 15.5 18.3621V16.8621C15.5 14.5321 10.83 13.3621 8.5 13.3621ZM16.5 13.3621C16.21 13.3621 15.88 13.3821 15.53 13.4121C15.55 13.4221 15.56 13.4421 15.57 13.4521C16.71 14.2821 17.5 15.3921 17.5 16.8621V18.3621C17.5 18.7121 17.43 19.0521 17.32 19.3621H22.5C23.05 19.3621 23.5 18.9121 23.5 18.3621V16.8621C23.5 14.5321 18.83 13.3621 16.5 13.3621Z"
                  fill="#222222"
                />
              </svg>
              {data?.adultsCount}x
            </span>
          </div>
          <div className="room__card__right__bottom__right">
            <button>
              Choose room
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M7.76536 10.1284C7.83203 10.1951 7.90981 10.2284 7.9987 10.2284C8.08759 10.2284 8.16537 10.1951 8.23203 10.1284L10.0987 8.26174C10.2098 8.15062 10.2376 8.0284 10.182 7.89507C10.1265 7.76174 10.0209 7.69507 9.86537 7.69507H6.13203C5.97648 7.69507 5.87092 7.76174 5.81536 7.89507C5.75981 8.0284 5.78759 8.15062 5.8987 8.26174L7.76536 10.1284ZM7.9987 15.0284C7.07648 15.0284 6.20981 14.8533 5.3987 14.5031C4.58759 14.1528 3.88203 13.678 3.28203 13.0784C2.68203 12.4784 2.20714 11.7728 1.85736 10.9617C1.50759 10.1506 1.33248 9.28396 1.33203 8.36174C1.33203 7.43951 1.50714 6.57285 1.85736 5.76174C2.20759 4.95062 2.68248 4.24507 3.28203 3.64507C3.88203 3.04507 4.58759 2.57018 5.3987 2.2204C6.20981 1.87062 7.07648 1.69551 7.9987 1.69507C8.92092 1.69507 9.78759 1.87018 10.5987 2.2204C11.4098 2.57062 12.1154 3.04551 12.7154 3.64507C13.3154 4.24507 13.7905 4.95062 14.1407 5.76174C14.4909 6.57285 14.6658 7.43951 14.6654 8.36174C14.6654 9.28396 14.4903 10.1506 14.14 10.9617C13.7898 11.7728 13.3149 12.4784 12.7154 13.0784C12.1154 13.6784 11.4098 14.1535 10.5987 14.5037C9.78759 14.854 8.92092 15.0288 7.9987 15.0284Z"
                  fill="#3F3F3F"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
