import React from "react";
import close from "../../assets/images/close.svg";
import { styled } from "styled-components";
export default function Popup(props) {
  return (
    <div className="Wrapper">
      <div className="Popupp">
        <div className="ProfileBox">
          <Avatar />
          <div className=" Name">{props.name}</div>
        </div>
        <div
          className="CloseBox"
          onClick={() => {
            props.setPopup(false);
          }}
        >
          <div className="CloseText">Close window</div>
          <CloseImage src={close} />
        </div>
        <div className=" InfoBox">
          <div className="InfoText ">Branch location: Georgia, Tbilisi</div>
          <div className="InfoText ">Phone: +995 00 030002</div>
          <div className="InfoText ">Email: tourAgent@uys.io</div>
          <div className="InfoText ">Mob: +995 00 030002</div>
          <div className="InfoText ">www.agentworlduys.io</div>
          <div className="InfoText ">Rating: 4.5</div>
        </div>
        <div className="GroupInfo">
          Group Information
          <div className="GroupBox">
            <span>Status</span>
            <Status>Pending</Status>
          </div>
          <div className="GroupBox">
            <span>Location: </span>
            <span>Budapest</span>
          </div>
          <div className="GroupBox">
            <span>Travelers: </span>
            <span> 85 Adult / 4 Child</span>
          </div>
          <div className="GroupBox">
            <span>Date: </span>
            <span> 25Jun - 03Jul</span>
          </div>
          <div className="GroupBox">
            <span>Price: </span>
            <span>$ 47</span>
          </div>
          <div className="GroupBox">
            <span>Total Price: </span>
            <span>$ 4,183</span>
          </div>
        </div>
        <div className="Description">
          <div className="DescTitle">Description</div>
          <div className="Desc">
            Group-friendly hotels provide spacious rooms or suites that can
            comfortably accommodate multiple guests. They often offer amenities
            and facilities that are conducive to group activities and
            interactions, such as meeting rooms, banquet halls, or common areas
            for socializing. These spaces are designed to facilitate team
            meetings, conferences, group meals, or networking events.
          </div>
          <div className="Accept">Accept</div>{" "}
          <div className=" Negotiate">Negotiate</div>
        </div>
      </div>
    </div>
  );
}
