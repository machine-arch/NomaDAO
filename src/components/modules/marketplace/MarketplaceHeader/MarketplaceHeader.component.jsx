import React, { useState } from 'react';
import searchImg from '../../../../assets/images/search_marketplace.svg';
import './MarketplaceHeader.stylesheet.css';
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
      <header className="header">
        <input
          value={searchText}
          onChange={handleInputChange}
          type="search"
          className="search"
          placeholder="Search Hotels, agencies, fares and etc."
          style={{
            backgroundImage: `url(${searchImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '15px center',
          }}
        />
        <div className="orange" onClick={handleSearch}>
          <p className="big">Search</p>
        </div>
      </header>
    </>
  );
}
