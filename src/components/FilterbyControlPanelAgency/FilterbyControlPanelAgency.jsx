import { React, useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PopupAddroom from './PopupAddroom.jsx';
import plus from '../assets/images/addroomplus.svg';

//REDUNDANT CODE!!!

export default function FilterByControlPanel({ filter, handleAddRoom }) {
  const navigate = useNavigate();

  function refreshPage() {
    navigate('/marketplace/agency/ControlPanel');
  }

  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <div className="filterbyControlPanelAgency-container">
      <div className="filterbyControlPanelAgency-add-room" onClick={openPopup}>
        <p className="filterbyControlPanelAgency-room-text">Add room</p>
        <img
          className="filterbyControlPanelAgency-small-image"
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
