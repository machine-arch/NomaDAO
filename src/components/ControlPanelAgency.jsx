import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import GroupRequests from "./GroupRequests";
import TableExtended from "./TableExtended";
import { useOutletContext } from "react-router-dom";
import MarketplaceHeader from "./MarketplaceHeader";
import FilterByControlPanel from "./FilterbyControlPanelAgency";
import FilterComponent from "./FilterComponent";
const initialData = {
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
    "Publisher",
    "Number of Guests",
    "Location",
    "Price Range",
    "Dates",
    "Rooms",
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

  // const { setPopup } = useOutletContext();
  // const [searchTerm, setSearchTerm] = useState(""); // new state variable for the search term
  // const [rows, setRows] = useState(data.rows); 
  // const [filteredData, setFilteredData] = useState(data.rows);


  // const handleAddRoom = (newRoomData) => {
  //   setRows(prevRows => [...prevRows, Object.values(newRoomData)]);
  // }

  // const filteredRows = rows.filter((row) =>
  //   row.some((field) =>
  //     field.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  // );

  // const handleFilterChange = (selectedFilters) => {
  //   const newFilteredData = data.rows.filter((row) => {
  //     return Object.keys(selectedFilters).every((key) => {
  //       const filterValue = selectedFilters[key];
  //       return filterValue === '' || row[key] === filterValue;
  //     });
  //   });
  //   setFilteredData(newFilteredData);
  // };

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };





export default function ControlPanelAgency(setpopup) {
  const { setPopup } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState(""); // new state variable for the search term
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
            field.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }

      setRows(newRows);
    };

    filterData();
  }, [searchTerm, selectedFilters]);




  return (
    <Wrapper>
      <GroupRequests />
      <MarketplaceHeader />
      {/* prettier-ignore */}    
      <Title>Filter by</Title> 
      <Container>
        <FilterComponent header={initialData.header} rows={initialData.rows} onFilterChange={handleFilterChange} />
        <FilterByControlPanel
          filter={initialData.filters}
          header={initialData.header}
          rows={initialData.rows}
          onFilterChange={handleFilterChange}
          handleAddRoom={handleAddRoom}
        />
      </Container>
      {/* <FilterComponentPanelAgency header={data.header} rows={data.rows} onFilterChange={handleFilterChange} handleAddRoom={handleAddRoom} /> */}
      <TableExtended
        header={initialData.header}
        rows={rows}
        setPopup={setPopup}
      />
    </Wrapper>
  );
}

const Container = styled.div`

margin-bottom:10px;
max-width: 1200px;
width:100%;
display: flex;
flex-direction: row;
gap: 8px;
font-family: "Inter";
//   align-items: center;

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


const Wrapper = styled.div`
  padding: 60px 50px 0px 50px;
`;
