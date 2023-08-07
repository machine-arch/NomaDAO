import React from 'react';
import CopyImg from '../../assets/images/CopySymbol.svg';
import './ActiveBalance.css';

export default function ActiveBalance() {
  return (
    <div>
      <p className="activeBalance-title">Active Balance</p>
      <div className="activeBalance-grayhoriz">
        <div className="activeBalance-grayvert">
          <div className="activeBalance-orange">
            <p className="activeBalance-bigs">1,234 Nom</p>
            <p className="activeBalance-small">Balance</p>
          </div>
          <div className="activeBalance-graymy">
            <p className="activeBalance-smallb">Wallet address</p>
            <p
              className="activeBalance-search"
              style={{ backgroundImage: `url(${CopyImg})` }}
            >
              0xc59583f1c858fe5EE6dA27Eac7b1Ca8Aa30ADF63
            </p>
          </div>
        </div>

        <div className="activeBalance-grayverttwo">
          <div className="activeBalance-grayvert">
            <div className="activeBalance-blue">
              <p className="activeBalance-big">Send</p>
            </div>
            <div className="activeBalance-blue">
              <p className="activeBalance-big">Recieve</p>
            </div>
          </div>
          <div className="activeBalance-grayvert1">
            <div className="activeBalance-white">
              <p className="activeBalance-bigb ">Action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
