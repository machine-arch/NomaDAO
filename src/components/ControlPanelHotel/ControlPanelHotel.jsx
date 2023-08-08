import React, { useState, useEffect, useRef } from 'react';
import MontyleReport from '../MyroomsPublishedrooms/MyroomsPublishedrooms.jsx';
import TableExtended from '../TableExtended/TableExtended.jsx';
import MarketplaceHeader from '../MarketplaceHeader/MarketplaceHeader.jsx';
import { useOutletContext } from 'react-router-dom';
import FilterByControlPanel from '../FilterbyControlPanelHotel/FilterbyControlPanelHotel.jsx';
import FilterComponent from '../FilterComponent/FilterComponent.jsx';
import useMoveSound from '../../hooks/useMoveSound.js';
import useConditionalHandler from '../../hooks/useConditionalHandler.js';
import './ControlPanelHotel.css';

const initialData = {
  header: [
    'Publisher',
    'Status',
    'Guests',
    'Location',
    'Rooms',
    'Period',
    'Price',
    'Action',
  ],
  filters: [
    'Publisher',
    'status',
    'Room type',
    'Number of Rooms',
    'Location',
    'Price',
    'Period',
  ],
  rows: [
    [
      'You',
      'Pending',
      '25 Travellers',
      'Tbilisi',
      '3',
      '25 Jul - 01 Aug',
      '89$',
      'Check Details',
    ],
    [
      'You',
      'Confirmed',
      '25 Travellers',
      'Batumi',
      '4',
      '25 Jul - 01 Aug',
      '70$',
      'Check Details',
    ],
  ],
};

export default function DashboardHotel({ setpopup }) {
  const { setPopup } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState(''); // new state variable for the search term
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
    'Publisher',
    'Status',
    'Guests',
    'Location',
    'Rooms',
    'Period',
    'Price',
    'Action',
  ];

  // useConditionalHandler(navigateInputs, marketplaceActive);

  const [activeInputBox, setActiveInputBox] = useState(null);
  const [currentPage, setCurrentPage] = useState('Publisher');

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
    if (currentPage === 'Publisher') {
    }
    setCurrentPage(navigation[currentIndex - 1]);
  }
  function navigateInputs(event) {
    switch (event.keyCode) {
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
            field.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        );
      }

      setRows(newRows);
    };

    filterData();
  }, [searchTerm, selectedFilters]);

  return (
    <div className="controlPanelHotel-wrapper">
      <MontyleReport />
      <MarketplaceHeader />
      <p className="controlPanelHotel-title">Filter by</p>
      <div className="controlPanelHotel-container">
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
