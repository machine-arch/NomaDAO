import React, { useState } from 'react';
import arrow from '../assets/images/FilterArrow.svg';
import { useNavigate } from 'react-router-dom';
import './FilterbyGroupRequestsHotel.css';

//REDUNDANT CODE!!!

// Investigation required

export default function Filterby({ filter }) {
  const navigate = useNavigate();

  function refreshPage() {
    navigate('/marketplace/hotel/GroupRequests');
  }
  return (
    <div className="filterbyGroupRequestsHotel-container">
      <div className="filterbyGroupRequestsHotel-table-header">
        <div className="filterbyGroupRequestsHotel-row">
          {filter.map((item) => (
            <div className="filterbyGroupRequestsHotel-column" key={item}>
              {item}
              <img
                className="filterbyGroupRequestsHotel-small-image"
                src={arrow}
                alt="arrow-icon"
              />
            </div>  
          ))}
          <div
            className="filterbyGroupRequestsHotel-reset"
            onClick={refreshPage}
          >
            <p className="filterbyGroupRequestsHotel-reset-text">Reset</p>
          </div>
        </div>
      </div>
    </div>
  );
}
