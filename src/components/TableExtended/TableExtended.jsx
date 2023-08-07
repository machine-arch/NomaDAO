import React from 'react';
import mini1 from '../../assets/images/mini.png';
import mini2 from '../../assets/images/mini2.png';
import './TableExtended.css';

export default function TableExtended({ header, rows, setPopup }) {
  return (
    <div className="container">
      <div className="table-header">
        <div className="row" data-columns={header.length}>
          {header.map((item) => (
            <div className="column" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="table-body">
        {rows.map((row) => {
          return (
            <div className="row" data-columns={row.length} key={row.join('-')}>
              {row.map((item, index) => (
                <div
                  className={`column ${item}`}
                  onClick={() => {
                    item === 'Check Details' && setPopup(true);
                  }}
                  key={index}
                >
                  {index === 0 && <div className="orange" />}
                  {item === 'photos' ? (
                    <>
                      <img className="small-image" src={mini1} alt="mini1" />
                      <img className="small-image" src={mini2} alt="mini2" />
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
      <div className="table-footer">
        <div className="prev-page">Previous page</div>
        <div className="page-button">1</div>
        <div className="page-button">2</div>
        <div className="page-button">3</div>
        <div className="page-button">4</div>
        <div className="page-button">5</div>
        <div className="page-button">6</div>
        <div className="page-button">7</div>
        <div className="page-button">8</div>
        <div className="next-page">Next page</div>
      </div>
    </div>
  );
}
