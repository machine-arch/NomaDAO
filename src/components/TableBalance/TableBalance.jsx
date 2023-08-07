import React from 'react';
import mini1 from '../../assets/images/mini.png';
import mini2 from '../../assets/images/mini2.png';
import './TableBalance.css';

export default function TableBalance({ header, rows, setPopup }) {
  return (
    <div className="TableBalance-container">
      <div className="TableBalance-header">
        <div
          className="TableBalance-row"
          style={{ gridTemplateColumns: `repeat(${header.length}, 1fr)` }}
        >
          {header.map((item) => (
            <div key={item} className="TableBalance-column">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="TableBalance-table-body">
        {rows.map((row) => {
          return (
            <div
              className="row"
              style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
            >
              {row.map((item, index) => (
                <div
                  className={`TableBalance-column ${item}`}
                  style={{}}
                  onClick={() => {
                    item === 'Check Details' && setPopup(true);
                  }}
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
