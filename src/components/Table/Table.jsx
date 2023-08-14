import React from 'react';
import mini1 from '../../assets/images/mini.png';
import mini2 from '../../assets/images/mini2.png';
import './Table.css';

export default function Table({ header, rows, setPopup }) {
  return (
    <div className="Table-container">
      <div className="Table-header">
        <div
          className="Table-row"
          style={{ gridTemplateColumns: `repeat(${header.length}, 1fr)` }}
        >
          {header.map((item) => (
            <div key={item} className="Table-column">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="Table-body">
        {rows.map((row, index) => {
          return (
            <div
              className="Table-row"
              style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
              key={index}
            >
              {row.map((item, index) => (
                <div
                  className="Table-column"
                  onClick={() => {
                    item === 'Check Details' && setPopup(true);
                  }}
                  key={index}
                >
                  {index === 0 && <div className="Table-orange" />}{' '}
                  {item === 'photos' ? (
                    <>
                      <img className="Table-small-image" src={mini1} />
                      <img className="Table-small-image" src={mini2} />
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
      <div className="Table-footer">
        <div className="Table-prev-page">Previous page</div>
        <div className="Table-page-button">1</div>
        <div className="Table-page-button">2</div>
        <div className="Table-next-page">Next page</div>
      </div>
    </div>
  );
}
