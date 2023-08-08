import React, { useState } from 'react';
import PopupAddroom from '../PopupAddroom.jsx';
import plus from '../assets/images/addroomplus.svg';
import './FilterbyControlPanel.css';

export default function FilterComponentPanel({
  header,
  rows,
  onFilterChange,
  handleAddRoom,
  f,
}) {
  const [selectedFilters, setSelectedFilters] = useState({});

  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  // Generate unique values for each column
  const uniqueValues = rows[0].map((_, columnIndex) => {
    const columnValues = rows.map((row) => row[columnIndex]);
    return [...new Set(columnValues)];
  });

  const handleFilterChange = (event, filterIndex) => {
    const updatedFilters = {
      ...selectedFilters,
      [filterIndex]: event.target.value,
    };
    // If user selects the filter name (which is now the first option), remove the filter
    if (event.target.value === header[filterIndex]) {
      delete updatedFilters[filterIndex];
    }
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    setSelectedFilters({});
    onFilterChange({});
  };

  return (
    <div className="filterbyControlPanel-filter-wrapper">
      {uniqueValues.map(
        (values, index) =>
          header[index] !== 'Date' && (
            <div key={index}>
              <select
                className="filterbyControlPanel-select"
                onChange={(event) => handleFilterChange(event, index)}
                value={selectedFilters[index] || header[index]}
              >
                <option value={header[index]}>{header[index]}</option>
                {values.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ),
      )}
      <button className="filterbyControlPanel-reset-btn" onClick={handleReset}>
        Reset
      </button>
      <div className="filterbyControlPanel-add-room" onClick={openPopup}>
        <p className="filterbyControlPanel-add-room-text">Add room</p>
        <img
          className="filterbyControlPanel-small-image"
          src={plus}
          alt="plus-icon"
        />
      </div>
      <PopupAddroom
        open={open}
        closePopup={closePopup}
        handleAddRoom={handleAddRoom}
      />
    </div>
  );
}
