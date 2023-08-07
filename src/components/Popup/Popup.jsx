import React from 'react';
import close from '../../assets/images/close.svg';
import "./Popup.css"
export default function Popup(props) {
  return (
    <div className="popup-wrapper">
      <div className="popup-popp">
        <div className="popup-profileBox">
          <div className="popup-avatar"></div>
          <p className="popup-name">{props.name}</p>
        </div>
        <div className="popup-closeBox"
          onClick={() => {
            props.setPopup(false);
          }}
          <p className="popup-closeText">Close window</p>
          <img className="popup-closeImage" src={close} alt="Close" />
        </div>
        <div className="popup-infoBox">
          <p className="popup-infoText">Branch location: Georgia, Tbilisi</p>
          <p className="popup-infoText">Phone: +995 00 030002</p>
          <p className="popup-infoText">Email: tourAgent@uys.io</p>
          <p className="popup-infoText">Mob: +995 00 030002</p>
          <p className="popup-infoText">www.agentworlduys.io</p>
          <p className="popup-infoText">Rating: 4.5</p>
        </div>
        <div className="popup-groupInfo">
          Group Information
          <div className="popup-groupBox">
            <span>Status</span>
            <span className="popup-status">Pending</span>
          </div>
          <div className="popup-groupBox">
            <span>Location: </span>
            <span>Budapest</span>
          </div>
          <div className="popup-groupBox">
            <span>Travelers: </span>
            <span>85 Adult / 4 Child</span>
          </div>
          <div className="popup-groupBox">
            <span>Date: </span>
            <span>25Jun - 03Jul</span>
          </div>
          <div className="popup-groupBox">
            <span>Price: </span>
            <span>$47</span>
          </div>
          <div className="popup-groupBox">
            <span>Total Price: </span>
            <span>$4,183</span>
          </div>
        </div>
        <div className="popup-description">
          <p className="popup-descTitle">Description</p>
          <p className="popup-desc">
            Group-friendly hotels provide spacious rooms or suites that can comfortably accommodate multiple guests.
            They often offer amenities and facilities that are conducive to group activities and interactions, such as meeting rooms, banquet halls, or common areas for socializing.
            These spaces are designed to facilitate team meetings, conferences, group meals, or networking events.
          </p>
          <button className="popup-accept">Accept</button>
          <button className="popup-negotiate">Negotiate</button>
        </div>
      </div>
    </div>
  );
}
