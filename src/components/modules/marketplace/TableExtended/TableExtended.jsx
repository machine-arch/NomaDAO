import React from 'react';
import mini1 from '../../../../assets/images/mini.png';
import mini2 from '../../../../assets/images/mini2.png';
import './TableExtended.css';

export default function TableExtended({ header, rows, setPopup }) {
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
    <div className="tableExtended-container">
      <div className="tableExtended-header">
        <div
          className="tableExtended-row"
          style={{ gridTemplateColumns: `repeat(${header.length}, 1fr)` }}
        >
          {header.map((item, index) => {
            index == 1 ? (
              <div
                key={item}
                className="tableExtended-column"
                style={{
                  backgroundColor: backgroundColor,
                  color: color,
                }}
              >
                {item}
              </div>
            ) : (
              <div key={item} className="tableExtended-column">
                {item}
              </div>
            )
          }
          )}
        </div>
      </div>
      <div className="tableExtended-body">
        {rows.map((row, index) => {
          return (
            <div
              key={index}
              className="tableExtended-row"
              style={{ gridTemplateColumns: `repeat(${header.length}, 1fr)` }}
            >
              {row.map((item, rowIndex) => (
                <div
                  className="tableExtended-column"
                  onClick={() => {
                    item === 'Check Details' && setPopup(true);
                  }}
                  key={rowIndex}
                >
                  {rowIndex == 0 ? (
                    <div className="tableExtended-orange" />
                  ) : (
                    <div></div>
                  )}{' '}
                  {item === 'photos' ? (
                    <>
                      <img className="tableExtended-small-image" src={mini1} />
                      <img className="tableExtended-small-image" src={mini2} />
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
      <div className="tableExtended-footer">
        <div className="tableExtended-prev-page">Previous page</div>
        <div className="TableBalance-page-button">1</div>
        <div className="TableBalance-page-button">2</div>
        <div className="TableBalance-page-button">3</div>
        <div className="TableBalance-page-button">4</div>
        <div className="TableBalance-page-button">5</div>
        <div className="TableBalance-page-button">6</div>
        <div className="TableBalance-page-button">7</div>
        <div className="TableBalance-page-button">8</div>
        <div className="tableExtended-next-page">Next page</div>
      </div>
    </div>
  );
}
