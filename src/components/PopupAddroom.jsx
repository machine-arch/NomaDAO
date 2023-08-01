import { React, useState } from "react";
import { styled } from "styled-components";
import close from "../assets/images/close.svg";
import Addroom1 from "../assets/images/Addroom1.svg";
import Addroom2 from "../assets/images/Addroom2.svg";
import Addroom3 from "../assets/images/Addroom3.svg";
import Addroom4 from "../assets/images/Addroom4.svg";
import Addroomclose from "../assets/images/Addroomclose.svg";

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
  }
  return (
    <div className="addroompopup">
      <div className="top">
        <p>Add Room</p>
        <Exitbutton onClick={closePopup} className="exit-button"><p>close window</p> <SmallImage src={Addroomclose} /></Exitbutton>
      </div>
      <div className="roominfo">
        <p>Room info</p>
        <input type="text" name="rooms" placeholder="Rooms" onChange={e => setRoom(e.target.value)} />
    <input type="text" name="guests" placeholder="Guests" onChange={e => setGuests(e.target.value)} />
    <input type="date" name="date" placeholder="Date" onChange={e => setDate(e.target.value)} />
    <input type="text" name="location" placeholder="Location" onChange={e => setLocation(e.target.value)} />
    <input type="text" name="price" placeholder="Price" onChange={e => setPrice(e.target.value)} />
      </div>
      <div className="photos">
        <p>Photos</p>
        <PhotosContainer>
          <BigImage src={Addroom1} />
          <BigImage src={Addroom2} />
          <BigImage src={Addroom3} />
          <BigImage src={Addroom4} />
        </PhotosContainer>
      </div>
      <div className="desc">
        <p>Description</p>
        <textarea></textarea>
      </div>
      <div className="buttons">
        <button className="cancel">cancel</button>
        <button className="addroom" onClick={handleRoomData}> Add Room</button>
      </div>
    </div>
  );
  
}

const Exitbutton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border:none;
  gap: 10px;
  cursor:pointer;
  padding:2px;
`;



const PhotosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

const BigImage = styled.img`
  width: 90px;
  margin: 0;
  height: 100px;
  &:last-child {
    margin-left: 4px;
  }
`;

const SmallImage = styled.img`
  transform: rotate(90deg);
  width: 15px;
  height: 15px;

`;
