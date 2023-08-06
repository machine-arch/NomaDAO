import React, { useState } from 'react';
import searchImg from '../../assets/images/search_marketplace.svg';
import './MarketplaceHeader.css';
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
      <header className='marketplaceHeader-header'>
        <input className='marketplaceHeader-search' value={searchText}
          style={{ backgroundImage: `url(${searchImg})` }}
          onChange={handleInputChange} type="search" placeholder="Search Hotels, agencies, fares and etc." />
        <div className='marketplaceHeader-orange' onClick={handleSearch}>
          <p className='marketplaceHeader-big'>Search</p>
        </div>
      </header>
    </>
  );
}
