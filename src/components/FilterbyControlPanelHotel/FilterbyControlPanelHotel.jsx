import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import PopupAddroom from "../PopupAddroom/PopupAddroom.jsx";
import plus from "../../assets/images/addroomplus.svg";
import "./FilterbyControlPanelHotel.css";

//REDUNDANT CODE!!!



export default function FilterByControlPanel({ filter, handleAddRoom }) {
  const navigate = useNavigate();

  function refreshPage() {
    navigate('/marketplace/hotel/ControlPanel');
  }

  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);


  return (
    <div className="container">
      <div className="addRoom" onClick={openPopup}><p className="addRoomText">Add room</p><img className="smallImage" src={plus} /></div>
      <PopupAddroom open={open} closePopup={closePopup} handleAddRoom={handleAddRoom} />
    </div>

  );
}
