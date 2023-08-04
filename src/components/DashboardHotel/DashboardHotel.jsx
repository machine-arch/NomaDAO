import React from 'react';
import MontyleReport from '../MontyleReport/MontyleReport.jsx';
import Table from '../Table/Table.jsx';
import RelatedHotelFares from '../RelatedHotelFares/RelatedHotelFares.jsx';
import { useOutletContext } from 'react-router-dom';
const data = {
  header: [
    'Tour Agency',
    'Status',
    'Travelers',
    'Destination',
    'Rooms',
    'Date',
    'Price',
    'Action',
  ],
  rows: [
    [
      'Another',
      'Pending',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Pending',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Rejected',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Unverified',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],

    [
      'Another',
      'Rejected',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Rejected',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Pending',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Rejected',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Rejected',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
  ],
};
export default function DashboardHotel() {
  const { setPopup } = useOutletContext();
  return (
    <div className="dashboardHotel-wrapper">
      <MontyleReport />
      <p className="dashboardHotel-title">New Inquiries</p>
      <Table header={data.header} rows={data.rows} setPopup={setPopup} />
      <RelatedHotelFares />
    </div>
  );
}
