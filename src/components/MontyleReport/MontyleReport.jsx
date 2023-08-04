import React from 'react';
import { styled } from 'styled-components';
import './MontyleReport.css';

export default function MontyleReport() {
  return (
    <div className="montyleReport-wrapper">
      <p className="montyleReport-title">Monthly Report</p>
      <div className="montyleReport-gray">
        <div className="montyleReport-orange">
          <p className="montyleReport-big">Active Balance</p>
          <p className="montyleReport-small"></p>
        </div>
        <div className="montyleReport-orange">
          <p className="montyleReport-big">Monthly Report</p>
          <p className="montyleReport-small"></p>
        </div>
        <div className="montyleReport-orange">
          <p className="montyleReport-big">$420,000</p>
          <p className="montyleReport-small">Revenue Generated</p>
        </div>
      </div>
      <p className="montyleReport-see">See detailed report</p>
    </div>
  );
}
