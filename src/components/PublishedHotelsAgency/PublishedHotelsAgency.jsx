import React, { useState } from 'react';
import PublishedHotels from '../PublishedHotels/PublishedHotels.jsx';
import MarketPlaceHeader from '../MarketplaceHeader/MarketplaceHeader.jsx';
import TableExtended from '../TableExtended/TableExtended.jsx';
import { useOutletContext } from 'react-router-dom';
import FilterComponent from '../FilterComponent/FilterComponent.jsx';
import './PublishedHotelsAgency.css';
const data = {
  header: [
    "Publisher",
    "Status",
    "Guests",
    "Location",
    "Rooms",
    "Date",
    "Price",
    "Photos",
    "Action",
  ],
  filters: [
    "Hotel",
    "Location",
    "Number of Rooms",
    "Type of Rooms",
    "Dates",
    "Rooms",
    "Status",
  ],
  rows: [
    [
      "Hotel",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
    [
      "Hotel",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89 $",
      "photos",
      "Check Details",
    ],
  ],
};
export default function PublishedHotelsAgency() {
  const { setPopup } = useOutletContext();
  const [filteredData, setFilteredData] = useState(data.rows);

  const handleFilterChange = (selectedFilters) => {
    const newFilteredData = data.rows.filter((row) => {
      return Object.keys(selectedFilters).every((key) => {
        const filterValue = selectedFilters[key];
        return filterValue === "" || row[key] === filterValue;
      });
    });
    setFilteredData(newFilteredData);
  };
  return (
    <div className='publishedHotelsAgency-wrapper'>
      <PublishedHotels />
      <MarketPlaceHeader />
      <p className='publishedHotelsAgency-title'>Filter by</p>
      {/* <FilterbyPublishedHotelsAgency filter={data.filters}/>
      <TableExtended header={data.header} rows={data.rows} setPopup={setPopup} /> */}
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
