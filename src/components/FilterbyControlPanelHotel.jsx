import { React, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';
import PopupAddroom from "./PopupAddroom.jsx";
import plus from "../assets/images/addroomplus.svg";

//REDUNDANT CODE!!!



export default function FilterByControlPanel({ filter, handleAddRoom }) {
  const navigate = useNavigate();

  function refreshPage() {
    navigate('/marketplace/hotel/ControlPanel');
  } 

  const[open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  // c


    return (
      <Container>
        <Addroom onClick={openPopup}><Addroomtext>Add room</Addroomtext><SmallImage src={plus} /></Addroom>
        <PopupAddroom open={open} closePopup={closePopup} handleAddRoom={handleAddRoom} />
      </Container>
      
    );
  }

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

  const Container = styled.div`

  margin-bottom:10px;
  max-width: 1160px;
  width:100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: "Inter";
//   align-items: center;
  
`;

const TableHeader = styled.div`
//   color: var(--gray-800, #3f3f3f);
  font-size: clamp(14px, 2vw, 16px);
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  line-height: 10px;

  border-radius: 4px;
//   background: var(--background-section, #f2f2f2);
`;

const Column = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #D8D8D8;
  border-radius:6px;
  background: var(--background-section, #f2f2f2);
  padding:10px 20px;
  cursor:pointer;
  
`;

const Reset = styled.div`
  margin-top:10px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #D8D8D8;
  border-radius:6px;
  background: var(--background-section, #f2f2f2);
  padding:5px 20px;
  cursor:pointer;
  height:30px;
`


const ResetText = styled.p`
  font-size: 15px;
`

const Row = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    gap: 25px;
`;


const TableFooter = styled.div`
  // position: absolute;
  // left: 459px;
  // bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  height: 64px;
  border-radius:0px 0px 5px 5px;

`;

const PrevPage = styled.div`
  color: #585858;
  margin-right: 20px;
`;

const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #d8d8d8;
  height: 20px;
  width: 20px;
  font-size: 12px;
  margin-inline: 5px;
`;

const NextPage = styled.div`
  color: #585858;
  margin-left: 20px;
`;

const Orange = styled.div`
  width: 25px;
  height: 25px;
  background-color: #fe7c31;
  border-radius: 50%;
  margin-right: 8px;
`;

const SmallImage = styled.img`
  width: 15px;
  height: 15px;
  &:last-child{
    margin-left: 4px;
  }
`;
