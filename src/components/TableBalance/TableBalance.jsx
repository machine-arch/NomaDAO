import React from 'react';
import mini1 from '../../assets/images/mini.png';
import mini2 from '../../assets/images/mini2.png';
import './TableBalance.css';

export default function TableBalance({ header, rows, setPopup }) {
  let backgroundColor = undefined;
  let color = undefined;
  header.map((item) => {
    switch (item) {
      case 'Confirmed':
        backgroundColor = '#deede5';
        color = '#427a5b';
        break;
      case 'Rejected':
        backgroundColor = '#EDDEDE';
        color = '#7A4242';
        break;
      case 'Pending':
        backgroundColor = '#FDF8CE';
        color = '#938406';
        break;
      case 'Unverified':
        backgroundColor = '#D8D8D8';
        color = '#5F5F5F';
        break;
      default:
        backgroundColor = undefined;
        color = undefined;
        break;
    }
  });
  return (
    <div className="TableBalance-container">
      <div className="TableBalance-header">
        <div
          className="TableBalance-row"
          style={{ gridTemplateColumns: `repeat(${header.length}, 1fr)` }}
        >
          {header.map((item) => (
            <div
              key={item}
              className="TableBalance-column"
              style={{
                backgroundColor: backgroundColor,
                color: color,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="TableBalance-table-body">
        {rows.map((row, index) => {
          return (
            <div
              className="TableBalance-row"
              style={{ gridTemplateColumns: `repeat(${header.length}, 1fr)` }}
              key={index}
            >
              {row.map((item, index) => (
                <div
                  className="TableBalance-column"
                  onClick={() => {
                    item === 'Check Details' && setPopup(true);
                  }}
                  key={index}
                >
                  {index === 0 && <div className="TableBalance-orange" />}
                  {index === 1 && <div className="TableBalance-yellow" />}
                  {item === 'photos' ? (
                    <>
                      <img className="TableBalance-small-image" src={mini1} />
                      <img className="TableBalance-small-image" src={mini2} />
                    </>
                  ) : (
                    item
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="TableBalance-footer">
        <div className="TableBalance-prev-page">Previous page</div>
        <div className="TableBalance-page-button">1</div>
        <div className="TableBalance-page-button">2</div>
        <div className="TableBalance-page-button">3</div>
        <div className="TableBalance-page-button">4</div>
        <div className="TableBalance-page-button">5</div>
        <div className="TableBalance-page-button">6</div>
        <div className="TableBalance-page-button">7</div>
        <div className="TableBalance-page-button">8</div>
        <div className="TableBalance-next-page">Next page</div>
      </div>
    </div>
  );
}
