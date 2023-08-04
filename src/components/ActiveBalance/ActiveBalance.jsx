import React from "react";
import CopyImg from "../../assets/images/CopySymbol.svg";
import "./ActiveBalance.css";

export default function ActiveBalance() {
  return (
    <div >
      <p className="title">Active Balance</p>
      <div className="grayhoriz">
        <div className="grayvert">
          <div className="orange">
            <p className="bigs">1,234 Nom</p>
            <p className="small">Balance</p>
          </div>
          <div className="graymy">
            <p className="smallb">Wallet address</p>
            <p className="search">
              <img src={CopyImg} alt="Copy Symbol" />
              0xc59583f1c858fe5EE6dA27Eac7b1Ca8Aa30ADF63
            </p>
          </div>
        </div>
        <div className="grayverttwo">
          <div className="grayvert">
            <div className="blue">
              <p className="big">Send</p>
            </div>
            <div className="blue">
              <p className="big">Receive</p>
            </div>
          </div>
          <div className="grayvert1">
            <div className="white">
              <p className="bigb">Action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}