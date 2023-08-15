import React, { useState } from 'react';
import GroupRequests from '../GroupRequests/GroupRequests.jsx';
import TableExtended from '../TableExtended/TableExtended.jsx';
import { useOutletContext } from 'react-router-dom';
import MarketplaceHeader from '../modules/marketplace/MarketplaceHeader/MarketplaceHeader.component.jsx';
import FilterComponent from '../FilterComponent/FilterComponent.jsx';
import './GroupRequestsHotel.css';
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
  filters: [
    'Travel Agency',
    'Number of Guests',
    'Number of Rooms',
    'Location',
    'Price Range',
    'Status',
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
      'Confirmed',
      '25 Travellers',
      'Tbilisi',
      '23',
      '25 Jul - 01 Aug',
      '200 Nom',
      'Check Details',
    ],
  ],
};
export default function GroupRequestHotel() {
  const { setPopup } = useOutletContext();
  const [filteredData, setFilteredData] = useState(data.rows);
  const handleFilterChange = (selectedFilters) => {
    const newFilteredData = data.rows.filter((row) => {
      return Object.keys(selectedFilters).every((key) => {
        const filterValue = selectedFilters[key];
        return filterValue === '' || row[key] === filterValue;
      });
    });
    setFilteredData(newFilteredData);
  };
  return (
    <div className="GroupRequestsHotel">
      <GroupRequests />
      <MarketplaceHeader />
      <p className="GroupRequestsHotel__title">Filter by</p>
      <FilterComponent
        header={data.header}
        rows={data.rows}
        onFilterChange={handleFilterChange}
      />
      <TableExtended
        header={data.header}
        rows={filteredData}
        setPopup={setPopup}
      />
    </div>
  );
}
