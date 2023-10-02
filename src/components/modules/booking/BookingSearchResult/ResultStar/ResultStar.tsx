import React from "react";

const ResultStar = ({ starsCount }) => {
  const stars: any = Math.round(starsCount);
  const numbers: any = [];
  for (let i = 1; i <= starsCount; i++) {
    numbers.push(i);
  }

  return (
    <div className="stars">
      {numbers.map((index) => {
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.90287 14.3525L13.2696 16.3888C13.8862 16.7619 14.6406 16.2103 14.4784 15.5126L13.586 11.6834L16.5633 9.10363C17.1069 8.6331 16.8148 7.74071 16.1009 7.68392L12.1825 7.3513L10.6492 3.73308C10.3734 3.07595 9.43234 3.07595 9.15651 3.73308L7.62322 7.34319L3.70483 7.67581C2.99092 7.7326 2.69887 8.62498 3.24241 9.09552L6.21974 11.6753L5.32735 15.5045C5.1651 16.2022 5.91957 16.7538 6.53613 16.3806L9.90287 14.3525Z"
              fill="#FE8B48"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default ResultStar;
