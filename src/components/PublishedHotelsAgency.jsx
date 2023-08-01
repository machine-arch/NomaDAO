import {React, useState} from "react";
import { styled } from "styled-components";
import PublishedHotels from "./PublishedHotels";
import MarketPlaceHeader from "./MarketplaceHeader";
import TableExtended from "./TableExtended";
import { useOutletContext } from "react-router-dom";
import FilterComponent from "./FilterComponent";
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
        return filterValue === '' || row[key] === filterValue;
      });
    });
    setFilteredData(newFilteredData);
  };
  return (
    <Wrapper>
      <PublishedHotels />
      <MarketPlaceHeader />
      <Title>Filter by</Title>
      {/* <FilterbyPublishedHotelsAgency filter={data.filters}/>
      <TableExtended header={data.header} rows={data.rows} setPopup={setPopup} /> */}
      <FilterComponent header={data.header} rows={data.rows} onFilterChange={handleFilterChange} />
      <TableExtended header={data.header} rows={filteredData} setPopup={setPopup} />  
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 60px 50px 0px 50px;
`;


const Title = styled.p`
  color: #4c4c4c;
  font-size: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
