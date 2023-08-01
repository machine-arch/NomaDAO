import { styled } from "styled-components";
import React, { useState, useEffect, useContext, useRef } from "react";

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
    <FilterWrapper>
      {uniqueValues.map((values, index) => (
         header[index] !== "Date" && (
        <div key={index}>
          <Select
            ref={index === 0 ? publisherFilterRef : null} // Add this line
            onChange={(event) => handleFilterChange(event, index)}
            value={selectedFilters[index] || header[index]}
          >
            <option value={header[index]}>{header[index]}</option>
            {values.map((value) => ( 
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </div>
         )
      ))}
      <ResetBtn onClick={handleReset}>Reset</ResetBtn>
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  margin-bottom: 10px;
  align-items: center;
  width: 100%;
  height: 50px;
  display: flex;
  gap: 20px;
`;

const Select = styled.select`
  font-size: 1rem;
  color: #3f3f3f;
  outline: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  background: var(--background-section, #f2f2f2);
  padding: 10px 7px;
  cursor: pointer;
`;
const ResetBtn = styled.button`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  background: var(--background-section, #f2f2f2);
  padding: 5px 20px;
  cursor: pointer;
  height: 30px;
`;
