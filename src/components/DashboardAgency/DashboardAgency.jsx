import React from 'react';
import MontyleReport from '../MontyleReport/MontyleReport.jsx';
import RelatedHotelFares from '../RelatedHotelFares/RelatedHotelFares.jsx';
import Table from '../Table/Table.jsx';
import { useOutletContext } from 'react-router-dom';
const data = {
  header: [
    'Publisher',
    'Status',
    'Guests',
    'Location',
    'Rooms',
    'Date',
    'Price',
    'Photos',
    'Action',
  ],
  rows: [
    [
      'Hotel',
      'Pending',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Pending',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Unverified',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Rejected',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Rejected',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Pending',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
    [
      'Hotel',
      'Rejected',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89 $',
      'photos',
      'Check Details',
    ],
  ],
};
export default function DashboardAgency() {
  const { setPopup } = useOutletContext();
  return (
    <div className="dashboardAgency-wrapper">
      <MontyleReport />
      <p className="dashboardAgency-title">New rooms</p>
      <RelatedHotelFares />
      <Table header={data.header} rows={data.rows} setPopup={setPopup} />
    </div>
  );
}
