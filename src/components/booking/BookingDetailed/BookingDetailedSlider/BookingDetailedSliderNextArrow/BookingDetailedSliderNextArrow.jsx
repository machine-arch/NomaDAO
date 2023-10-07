import React from "react";

const BookingDetailedSliderNextArrow = ({ onClick }) => {
  return (
    <svg
      onClick={() => onClick()}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
    >
      <path
        d="M11.7484 4.33848C11.3501 4.73698 11.1263 5.27738 11.1263 5.84085C11.1263 6.40433 11.3501 6.94473 11.7484 7.34323L22.2672 17.862L11.7484 28.3807C11.3614 28.7815 11.1472 29.3183 11.152 29.8755C11.1568 30.4326 11.3803 30.9656 11.7743 31.3596C12.1683 31.7536 12.7013 31.9771 13.2585 31.9819C13.8156 31.9868 14.3524 31.7726 14.7532 31.3855L26.7743 19.3644C27.1727 18.9659 27.3965 18.4255 27.3965 17.862C27.3965 17.2985 27.1727 16.7581 26.7743 16.3596L14.7532 4.33848C14.3547 3.9401 13.8143 3.71631 13.2508 3.71631C12.6873 3.71631 12.1469 3.9401 11.7484 4.33848Z"
        fill="#60CFFA"
      />
    </svg>
  );
};

export default BookingDetailedSliderNextArrow;
