import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopupAddroom from '../PopupAddroom/PopupAddroom.jsx';
import plus from '../../assets/images/addroomplus.svg';
import './FilterbyControlPanelHotel.css';

//REDUNDANT CODE!!!

export default function FilterByControlPanelHotel({ filter, handleAddRoom }) {
  const navigate = useNavigate();

  function refreshPage() {
    navigate('/marketplace/hotel/ControlPanel');
  }

  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <div className="filterbyControlPanelHotel-container">
      <div className="filterbyControlPanelHotel-add-room" onClick={openPopup}>
        <p className="filterbyControlPanelHotel-add-room-text">Add room</p>
        <img
          className="filterbyControlPanelHotel-small-image"
          src={plus}
          alt="plus-icon"
        />
      </div>
      <PopupAddroom
        open={open}
        closePopup={closePopup}
        handleAddRoom={handleAddRoom}
      />
    </div>
  );
}
