import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import MontyleReport from "./MyroomsPublishedrooms";
import TableExtended from "./TableExtended";
import MarketplaceHeader from "./MarketplaceHeader";
import { useOutletContext } from "react-router-dom";
import FilterByControlPanel from "./FilterbyControlPanelHotel";
import FilterComponent from "./FilterComponent";
import useMoveSound from "../hooks/useMoveSound";
import useConditionalHandler from "../hooks/useConditionalHandler";
import MarketplaceContext from "../context/MarketplaceContext";




const initialData = {
  header: [
    "Publisher",
    "Status",
    "Guests",
    "Location",
    "Rooms",
    "Period",
    "Price",
    "Action",
  ],
  filters: [
    "Publisher",
    "status",
    "Room type",
    "Number of Rooms",
    "Location",
    "Price",
    "Period",
  ],
  rows: [
    [
      "You",
      "Pending",
      "25 Travellers",
      "Tbilisi",
      "3",
      "25 Jul - 01 Aug",
      "89$",
      "Check Details",
    ],
    [
      "You",
      "Confirmed",
      "25 Travellers",
      "Batumi",
      "4",
      "25 Jul - 01 Aug",
      "70$",
      "Check Details",
    ],
  ],
};



export default function DashboardHotel({ setpopup }) {
  const { setPopup } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState(""); // new state variable for the search term
  const [rows, setRows] = useState(initialData.rows);
  const [selectedFilters, setSelectedFilters] = useState({});
  const moveSound = useMoveSound;
  const publisherFilterRef = useRef(null);

  // const marketplaceContext = useContext(MarketplaceContext);

  // const { marketplaceActive, setmarketplaceActive } = marketplaceContext;


  ///////////////////////////////////
  // useEffect(() => {
  //   if (!marketplaceActive) { 
  //       emailRef.current.focus();
  //   }
  //   else{
  //     emailRef.current.blur();
  //   }
  // }, [asideActive]);

  useEffect(() => {
    const publisherFilterElement = publisherFilterRef.current;
    if (publisherFilterElement) {
      publisherFilterElement.focus();
    }
  }, []);



  const navigation = [
    "Publisher",
    "Status",
    "Guests",
    "Location",
    "Rooms",
    "Period",
    "Price",
    "Action",
  ];

  // useConditionalHandler(navigateInputs, marketplaceActive);

  const [activeInputBox, setActiveInputBox] = useState(null);
  const [currentPage, setCurrentPage] = useState("Publisher");

  
  let currentIndex = navigation.indexOf(currentPage);
  let nextIndex;

  function goBackToNavigation() {
    // setActiveInputBox(null);
    // setAsideActive(true);
  }

  function nextInput() {
    setCurrentPage(navigation[currentIndex + 1]);
  }

  function prevInput() {
    if (currentPage === "Publisher") {

    }
    setCurrentPage(navigation[currentIndex - 1]);
  }
  function navigateInputs(event) {

    switch(event.keyCode)
    {
      // Down
      case 40:
        // moveSound();
        break;
      
      // Up
      case 38:
        // moveSound();
        break;

      // Left
      case 37:
        // moveSound();
        break;

      // Right
      case 39:
        moveSound();
        break;
        // case 13:
        //   if (currentPage === "Logout") {
        //     navigate("/marketplace")
        //   }
        // break;
    
      default:
        break;
    }
  }


  useConditionalHandler(navigateInputs, true);

  ////////////////////////////////////////

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
      <MontyleReport />
      <MarketplaceHeader />
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

  

const Wrapper = styled.div`
  margin-top: 20px;
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
