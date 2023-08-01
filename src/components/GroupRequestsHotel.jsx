import {React, useState} from "react";
import { styled } from "styled-components";
import GroupRequests from "./GroupRequests";
import TableExtended from "./TableExtended";
import { useOutletContext } from "react-router-dom";
import MarketplaceHeader from "./MarketplaceHeader";
import FilterbyGrouprequests from "./FilterbyGroupRequestsHotel";
import FilterComponent from "./FilterComponent";
const data = {
  header: [
    "Tour Agency",
    "Status",
    "Travelers",
    "Destination",
    "Rooms",
    "Date",
    "Price",
    "Action",
  ],
  filters: [
    "Travel Agency",
    "Number of Guests",
    "Number of Rooms",
    "Location",
    "Price Range",
    "Status",
  ],
  rows: [
    [
      "Another",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],   
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Unverified",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],   
    [
      "Another",
      "Rejected",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another",
      "Confirmed",
      "25 Travellers",
      "Tbilisi",
      "23",
      "25 Jul - 01 Aug",
      "200 Nom",
      "Check Details",
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
    <Wrapper>
      <GroupRequests />
      <MarketplaceHeader />
      {/* <FilterbyGrouprequests/> */}
      {/* prettier-ignore */}    
      <Title>Filter by</Title> 
      <FilterComponent header={data.header} rows={data.rows} onFilterChange={handleFilterChange} />
      <TableExtended header={data.header} rows={filteredData} setPopup={setPopup} />
    </Wrapper>
  );
}

const Title = styled.p`
  color: #4c4c4c;
  font-size: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-top: 10px;
  margin-bottom: 10px;
`;


const Wrapper = styled.div`
  padding: 60px 50px 0px 50px;
`;
