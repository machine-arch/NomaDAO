import React, { useState } from 'react';
import ActiveBalance from '../../ActiveBalance/ActiveBalance.jsx';
import TableBalance from '../../TableBalance/TableBalance.jsx';
import { useOutletContext } from 'react-router-dom';
import FilterComponent from '../../FilterComponent/FilterComponent.jsx';
import './ActiveBalanceAgency.css';

const data = {
  header: ['Sender', 'Reciever', 'Status', 'Date', 'Amount', 'Action'],
  filters: ['Sender', 'Reciever', 'Status', 'Amount Range', 'Group'],
  rows: [
    [
      'Another',
      'Bluenose',
      'Confirmed',
      '15/6/2023',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Bluenose',
      'Confirmed',
      '15/6/2023',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Bluenose',
      'Confirmed',
      '15/6/2023',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Bluenose',
      'Confirmed',
      '15/6/2023',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Bluenose',
      'Confirmed',
      '15/6/2023',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Bluenose',
      'Confirmed',
      '15/6/2023',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Bluenose',
      'Confirmed',
      '15/6/2023',
      '200 Nom',
      'Check Details',
    ],
    [
      'Another',
      'Bluenose',
      'Confirmed',
      '15/6/2023',
      '200 Nom',
      'Check Details',
    ],
  ],
};
export default function ActiveBalanceAgency() {
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
    <div className="activeBalanceAgency-wrapper">
      <ActiveBalance />
      <p className="activeBalanceAgency-title">Filter by</p>
      <FilterComponent
        header={data.header}
        rows={data.rows}
        onFilterChange={handleFilterChange}
      />
      <TableBalance
        header={data.header}
        rows={filteredData}
        setPopup={setPopup}
      />
    </div>
  );
}
