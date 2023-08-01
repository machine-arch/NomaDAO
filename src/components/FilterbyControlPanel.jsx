import { styled } from "styled-components";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PopupAddroom from "./PopupAddroom";
import arrow from "../assets/images/FilterArrow.svg";
import plus from "../assets/images/addroomplus.svg";

export default function FilterComponentPanel({ header, rows, onFilterChange, handleAddRoom, f}) {
  const [selectedFilters, setSelectedFilters] = useState({});



  const[open, setOpen] = useState(false);
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
    <FilterWrapper>
      {uniqueValues.map((values, index) => (
         header[index] !== "Date" && (
        <div key={index}>
          <Select
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
      <Addroom onClick={openPopup}><Addroomtext>Add room</Addroomtext><SmallImage src={plus} /></Addroom>
      <PopupAddroom open={open} closePopup={closePopup} handleAddRoom={handleAddRoom} />
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  margin-bottom: 10px;
  align-items: center;
  width: 100%;
  height: 50px;
  display: flex;
  gap: 13px;
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
  padding: 10px 10px;
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


const SmallImage = styled.img`
  width: 15px;
  height: 15px;
  &:last-child{
    margin-left: 4px;
  }
`;



const Addroom = styled.div`
padding:20px;
display: flex;
align-items: center;
justify-content: center;
width: 150px;
height: 48px;
border-radius: 70px;
background: var(--brandy, #fe7c31);
cursor:pointer;

`;


const Addroomtext = styled.p`

color: #fff;
display:flex;
font-size: 18px;
font-family: "Inter";
font-style: normal;
width:82px;
font-weight: 300;

`;