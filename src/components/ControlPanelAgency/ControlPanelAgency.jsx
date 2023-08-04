import React, { useState, useEffect } from 'react';
import GroupRequests from '../GroupRequests/GroupRequests.jsx';
import TableExtended from '../TableExtended/TableExtended.jsx';
import { useOutletContext } from 'react-router-dom';
import MarketplaceHeader from '../MarketplaceHeader/MarketplaceHeader.jsx';
import FilterByControlPanel from '../FilterbyControlPanelHotel/FilterbyControlPanelHotel.jsx';
import FilterComponent from '../FilterComponent/FilterComponent.jsx';
import './ControlPanelAgency.css';
const initialData = {
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
    'Publisher',
    'Number of Guests',
    'Location',
    'Price Range',
    'Dates',
    'Rooms',
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

export default function ControlPanelAgency(setpopup) {
  const { setPopup } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState(''); // new state variable for the search term
  const [rows, setRows] = useState(initialData.rows);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleAddRoom = (newRoomData) => {
    setRows((prevRows) => [...prevRows, Object.values(newRoomData)]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  useEffect(() => {
    const filterData = () => {
      let newRows = initialData.rows;

      // Apply filters
      if (selectedFilters) {
        newRows = newRows.filter((row) => {
          return Object.keys(selectedFilters).every((key) => {
            const filterValue = selectedFilters[key];
            return filterValue === '' || row[key] === filterValue;
          });
        });
      }

      // Apply search
      if (searchTerm) {
        newRows = newRows.filter((row) =>
          row.some((field) =>
            field.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        );
      }

      setRows(newRows);
    };

    filterData();
  }, [searchTerm, selectedFilters]);

  return (
    <div className="controlPanelAgency-wrapper">
      <GroupRequests />
      <MarketplaceHeader />
      <p className="title">Filter by</p>
      <div className="controlPanelAgency-container">
        <FilterComponent
          header={initialData.header}
          rows={initialData.rows}
          onFilterChange={handleFilterChange}
        />
        <FilterByControlPanel
          filter={initialData.filters}
          header={initialData.header}
          rows={initialData.rows}
          onFilterChange={handleFilterChange}
          handleAddRoom={handleAddRoom}
        />
      </div>
      <TableExtended
        header={initialData.header}
        rows={rows}
        setPopup={setPopup}
      />
    </div>
  );
}
