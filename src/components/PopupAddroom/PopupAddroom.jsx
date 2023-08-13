import React, { useState } from 'react';
import Addroom1 from '../../assets/images/Addroom1.svg';
import Addroom2 from '../../assets/images/Addroom2.svg';
import Addroom3 from '../../assets/images/Addroom3.svg';
import Addroom4 from '../../assets/images/Addroom4.svg';
import Addroomclose from '../../assets/images/Addroomclose.svg';
import './PopupAddroom.css';

export default function PopupAddroom({ open, closePopup, handleAddRoom }) {
  const [rooms, setRoom] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  if (!open) return null;
  const handleRoomData = () => {
    const roomData = {
      publisher: "You",
      status: "Pending",
      guests: `${guests} Travellers`,
      location,
      rooms,
      date,
      price: `${price}$`,
      action: "Check Details",
    };

    handleAddRoom(roomData);
    closePopup();
  };
  return (
    <div className="addroompopup">
      <div className="top">
        <p>Add Room</p>
        <div onClick={closePopup} className="popupAddroom-exitButton exit-button">
          <p>close window</p> <img src={Addroomclose} className="popupAddroom-smallImage" />
        </div>
      </div>
      <div className="roominfo">
        <p>Room info</p>
        <input
          type="text"
          name="rooms"
          placeholder="Rooms"
          onChange={(e) => setRoom(e.target.value)}
        />
        <input
          type="text"
          name="guests"
          placeholder="Guests"
          onChange={(e) => setGuests(e.target.value)}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="photos">
        <p>Photos</p>
        <div className="popupAddroom-photosContainer">
          <img src={Addroom1} className="popupAddroom-bigImage" />
          <img src={Addroom2} className="popupAddroom-bigImage" />
          <img src={Addroom3} className="popupAddroom-bigImage" />
          <img src={Addroom4} className="popupAddroom-bigImage" />
        </div>
      </div>
      <div className="desc">
        <p>Description</p>
        <textarea></textarea>
      </div>
      <div className="buttons">
        <button className="cancel">cancel</button>
        <button className="addroom" onClick={handleRoomData}>
          Add Room
        </button>
      </div>
    </div>
  );
}
