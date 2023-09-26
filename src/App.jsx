import React, { useState } from 'react';
import BookingContext from './context/BookingContext';
import { Outlet } from 'react-router-dom';
import AsideContext from './context/AsideContext';
import ProductContext from './context/ProductContext';
import { GlobalProvider } from './context/global.context';
import { IdSequenceProvider } from './context/IdSequence.context';
export default function App() {
  const [asideActive, setAsideActive] = useState(true);
  const [pages, setPages] = useState([
    'Home',
    'Nomad Entertainment',
    'Hotel Highlights in 3D',
    'World 3D Tour (sightseeing)',
    'Book Your Hotel',
  ]);
  const [activePage, setActivePage] = useState(0);
  const [product, setProduct] = useState(null);

  const [bookingParams, setBookingParams] = useState({
    showHotels: false,
    location: 'Tbilisi',
    checkIn: new Date(),
    checkOut: new Date(),
    guests: 2,
  });

  return (
    <AsideContext.Provider
      value={{
        asideActive,
        setAsideActive,
        pages,
        setPages,
        activePage,
        setActivePage,
      }}
    >
      <BookingContext.Provider value={{ bookingParams, setBookingParams }}>
        <ProductContext.Provider value={{ product, setProduct }}>
          <GlobalProvider>
            <IdSequenceProvider>
              <Outlet />
            </IdSequenceProvider>
          </GlobalProvider>
        </ProductContext.Provider>
      </BookingContext.Provider>
    </AsideContext.Provider>
  );
}
