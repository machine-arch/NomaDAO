import {React, useState} from "react";
import { styled } from "styled-components";
import ActiveBalance from "./ActiveBalance";
import TableBalance from "./TableBalance";
import { useOutletContext } from "react-router-dom";
import FilterComponent from "./FilterComponent";
const data = {
  header: ["Sender", "Reciever", "Status", "Date", "Amount", "Action"],
  filters: [
    "Sender",
    "Reciever",
    "Status",
    "Amount Range",
  ],
  rows: [  
    [
      "Another",
      "Bluenose",
      "Confirmed",
      "07/02/2023",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another1",
      "Bluenose",
      "Pending",
      "15/6/2023",
      "300 Nom",
      "Check Details",
    ],
    [
      "Another2",
      "Bluenose",
      "Confirmed",
      "02/6/2023",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another3",
      "Bluenose",
      "Rejected",
      "07/02/2023",
      "500 Nom",
      "Check Details",
    ],
    [
      "Another1",
      "Bluenose",
      "Confirmed",
      "15/6/2023",
      "600 Nom",
      "Check Details",
    ],
    [
      "Another2",
      "Bluenose",
      "Confirmed",
      "15/6/2023",
      "200 Nom",
      "Check Details",
    ],
    [
      "Another3",
      "ASD",
      "Pending",
      "12/6/2023",
      "700 Nom",
      "Check Details",
    ],
    [
      "Another1",
      "ASD",
      "Rejected",
      "07/02/2023",
      "300 Nom",
      "Check Details",
    ],
  ],
};

export default function ActiveBalanceHotel() {
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
      <ActiveBalance />
      <Title>Filter by</Title>
      <FilterComponent header={data.header} rows={data.rows} onFilterChange={handleFilterChange} />
      <TableBalance header={data.header} rows={filteredData} setPopup={setPopup} />      
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
  margin-top: 40px;
  margin-bottom: 10px;
`;



