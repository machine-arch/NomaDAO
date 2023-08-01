import React , { useState } from "react";
import { styled } from "styled-components";
import searchImg from "../assets/images/search_marketplace.svg";
export default function MarketplaceHeader() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    console.log(searchText);
  };


  return (
    <>
      <Header>
        {/* prettier-ignore */}
        <Search value={searchText} onChange={handleInputChange} img={searchImg} type="search" placeholder="Search Hotels, agencies, fares and etc." />
        <Orange onClick={handleSearch}>
          <Big>Search</Big>
        </Orange>
      </Header>
    </>
  );
}

const Orange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 48px;
  padding: 13px 10px;
  border-radius: 4px;
  background: var(--brandy, #fe7c31);
  cursor:pointer;
`;

const Big = styled.p`

  color: #fff;
  font-size: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`;

const Search = styled.input`
  
  margin-right:20px;
  margin-bottom:10px;
  width: 1170px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  background: #fafafa;
  padding-left: 50px;

  color: #4c4c4c;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: 15px center;
`;

const Header = styled.header`
margin-top:20px;
display: flex;
flex-direction: row;
`;


