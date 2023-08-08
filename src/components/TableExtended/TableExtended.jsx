import React from 'react';
import mini1 from '../../assets/images/mini.png';
import mini2 from '../../assets/images/mini2.png';
import './TableExtended.css';

export default function TableExtended({ header, rows, setPopup }) {
  return (
    <div className="TableExtended-container">
      <div className="TableExtended-header">
        <div className="TableExtended-row" data-columns={header.length}>
          {header.map((item) => (
            <div className="TableExtended-column" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="TableExtended-body">
        {rows.map((row) => {
          return (
            <div
              className="TableExtended-row"
              data-columns={row.length}
              key={row.join('-')}
            >
              {row.map((item, index) => (
                <div
                  className={`TableExtended-column ${item}`}
                  onClick={() => {
                    item === 'Check Details' && setPopup(true);
                  }}
                  key={index}
                >
                  {index === 0 && <div className="TableExtended-orange" />}
                  {item === 'photos' ? (
                    <>
                      <img
                        className="TableExtended-small-image"
                        src={mini1}
                        alt="mini1"
                      />
                      <img
                        className="TableExtended-small-image"
                        src={mini2}
                        alt="mini2"
                      />
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
      <div className="TableExtended-footer">
        <div className="TableExtended-prev-page">Previous page</div>
        <div className="TableExtended-page-button">1</div>
        <div className="TableExtended-page-button">2</div>
        <div className="TableExtended-page-button">3</div>
        <div className="TableExtended-page-button">4</div>
        <div className="TableExtended-page-button">5</div>
        <div className="TableExtended-page-button">6</div>
        <div className="TableExtended-page-button">7</div>
        <div className="TableExtended-page-button">8</div>
        <div className="TableExtended-next-page">Next page</div>
      </div>
    </div>
  );
}
