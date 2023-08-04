import React, { useState, useRef } from 'react';
import './FilterComponent.css';
export default function FilterComponent({ header, rows, onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({});
  const publisherFilterRef = useRef(null); // Add this line

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
    <div className="filterComponent-filter-wrapper">
      {uniqueValues.map(
        (values, index) =>
          header[index] !== 'Date' && (
            <div key={index}>
              <select
                ref={index === 0 ? publisherFilterRef : null} // Add this line
                onChange={(event) => handleFilterChange(event, index)}
                value={selectedFilters[index] || header[index]}
                className="filterComponent-select"
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
      <button className="filterComponent-reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
