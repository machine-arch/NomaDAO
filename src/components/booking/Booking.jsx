import React, { useEffect, useState, useContext, useRef } from 'react';
import './Booking.css';
// import BookingSearch from './BookingSearch/BookingSearch.component';
// import BookingSearchResult from './BookingSearchResult/BookingSearchResult.component';
// import BookingSearchBarFilterBack from './BookingSearchBarFilterBack/BookingSearchBarFilterBack.component';
import SignIn from '../SignIn/SignIn.component';
import AsideContext from '../../context/AsideContext.js';
import { GlobalContext } from '../../context/global.context';
import BookingUtil from '../../utils/navigation.util';
// import configuration from '../../navigateConfig';
import useMoveSound from '../../hooks/useMoveSound';
// import _, { set } from 'lodash';
// import axios from 'axios';

const Booking = () => {
  // const [showResult, setShowResult] = useState(false);
  // const bookingUtil = new BookingUtil();
  // const configuration = {};

  // const [location, setLocation] = useState(null);
  // const [dates, setDates] = useState({
  //   startDate: null,
  //   endDate: null,
  // });

  // const [advancedFilter, setAdvancedFilter] = useState({
  //   '3dView': false,
  //   partnersHotels: false,
  //   lowPriceFirst: false,
  //   recomended: false,
  //   highPriceFirst: false,
  //   hightRatingFirst: false,
  //   priceMin: 0,
  //   priceMax: 0,
  //   hotelStarFive: false,
  //   hotelStarFour: false,
  //   hotelStarThree: false,
  //   hotelStarTwo: false,
  //   hotelStarOne: false,
  //   reviewScoreFive: false,
  //   reviewScoreFour: false,
  //   reviewScoreThree: false,
  //   reviewScoreTwo: false,
  //   reviewScoreOne: false,
  //   apartments: false,
  //   hotels: false,
  //   homestays: false,
  //   villas: false,
  //   motels: false,
  //   wakeUpCall: false,
  //   crHire: false,
  //   flatTv: false,
  //   dryCleaning: false,
  //   internet: false,
  //   havanaLobbyBar: false,
  //   flestaRestaurant: false,
  //   hotelTransportService: false,
  //   laundryService: false,
  //   petsWelcome: false,
  // });

  // const [locationFilterData, setLocationFilterData] = useState([]);
  // const [locationFilterDataCopy, setLocationFilterDataCopy] = useState([]);

  // const [locationDataFetched, setLocationDataFetched] = useState(false);

  // const [data, setData] = useState([]);

  // const [guests, setGuests] = useState({
  //   adultsCount: 0,
  //   childrensCount: 0,
  //   roomsCount: 0,
  // });

  // const [filterDisplay, setFilterDisplay] = useState({
  //   location: false,
  //   date: false,
  //   guests: false,
  // });

  // const fetchSuggestions = (e) => {
  //   setLocation(e.target.value);
  //   if (e.target.value.length == 0) {
  //     setLocationFilterDataCopy([]);
  //     setFilterDisplay({ ...filterDisplay, location: false });
  //     setLocationFilterData([]);
  //     setLocationDataFetched(false);
  //   }
  //   if (e.key === 'Enter') {
  //     return;
  //   }
  //   if (e.target.value?.length > 2 && locationDataFetched == true) {
  //     const inputValue = e.target.value.toLowerCase();
  //     const filteredData = locationFilterDataCopy?.filter((item) =>
  //       item.toLowerCase().includes(inputValue),
  //     );
  //     setLocationFilterData(filteredData);
  //     setLocation(e.target.value);
  //   }
  //   if (e.target.value?.length > 2 && locationDataFetched == false) {
  //     axios({
  //       method: 'POST',
  //       url: `${import.meta.env.VITE_API_URL}/hotel-filter/sugestions`,
  //       data: {
  //         locationSuggestions: e.target?.value,
  //       },
  //     })
  //       .then((res) => {
  //         setLocationFilterData(res?.data?.content);
  //         setLocationFilterDataCopy(res?.data?.content);
  //         setFilterDisplay({ ...filterDisplay, location: true });
  //         setLocationDataFetched(true);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  // const { asideActive, setAsideActive } = useContext(AsideContext);
  // const { state, dispatch } = useContext(GlobalContext);
  // const [canNavigate, setCanNavigate] = useState(false);
  // const activeHomeComponent = useRef(null);
  // const activeComponent = useRef(null);
  // const [showFilterBox, setShowFilterBox] = useState(false);
  // const [isPopapsOpen, setIsPopapsOpen] = useState(false);

  // function startup() {
  //   if (!asideActive && !showFilterBox) {
  //     const firstHomeEl = Object.keys(configuration?.booking?.home)[1];
  //     const searchComponents =
  //       configuration?.booking?.home[firstHomeEl]?.components;
  //     if (!searchComponents) return;
  //     const firstSearchEl = Object.keys(searchComponents)[0];
  //     searchComponents[firstSearchEl].isActive = true;
  //     document.querySelector(`.${firstSearchEl}`).focus();
  //     const newConfig = JSON.parse(JSON.stringify(configuration));
  //     dispatch({
  //       type: 'SET_CONFIG',
  //       payload: newConfig,
  //     });
  //     activeHomeComponent.current = firstHomeEl;
  //     activeComponent.current = firstSearchEl;
  //     setCanNavigate(true);
  //   } else {
  //     setCanNavigate(false);
  //   }
  // }

  // useEffect(() => {
  //   if (state?.persist) {
  //     fetch(`${import.meta.env.VITE_API_URL}/hotel/?page=${1}&&limit=${10}`)
  //       .then((res) => {
  //         res.json().then((data) => {
  //           setData(data?.content);
  //           setShowResult(true);
  //           dispatch({
  //             type: 'SET_PERIST',
  //             payload: false,
  //           });
  //         });
  //       })
  //       .then(async () => {
  //         const tcomponents = configuration?.booking?.home?.search?.components;
  //         const tcomponentsKeys = Object.keys(tcomponents);
  //         tcomponents[tcomponentsKeys[0]].isActive = false;
  //         const newConfig = JSON.parse(JSON.stringify(configuration));
  //         dispatch({
  //           type: 'SET_CONFIG',
  //           payload: newConfig,
  //         });
  //         let activeDomElement = null;
  //         const timeout = () => {
  //           return new Promise((resolve) => {
  //             setTimeout(() => {
  //               activeDomElement = document.querySelector(
  //                 '.booking-results-active-element',
  //               );
  //               resolve();
  //             }, 500);
  //           });
  //         };
  //         await timeout();
  //         if (activeDomElement) {
  //           activeDomElement.scrollIntoView({
  //             behavior: 'smooth',
  //             block: 'center',
  //           });
  //           activeDomElement.focus();
  //           activeHomeComponent.current = 'results';
  //           activeComponent.current = 'booking__result__box';
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [state?.persist]);

  // useEffect(() => {
  //   startup();
  // }, [asideActive]);

  // useEffect(() => {
  //   if (showFilterBox) {
  //     const parent = 'filter_box';
  //     const firstHomeEl = Object.keys(
  //       configuration?.booking?.home[parent]?.home,
  //     )[0];

  //     const searchComponents =
  //       configuration?.booking?.home[parent]?.home[firstHomeEl]?.components;
  //     if (!searchComponents) return;

  //     const firstSearchEl = Object.keys(searchComponents)[0];
  //     searchComponents[firstSearchEl].isActive = true;
  //     activeHomeComponent.current = firstHomeEl;
  //     const newConfig = JSON.parse(JSON.stringify(configuration));
  //     dispatch({
  //       type: 'SET_CONFIG',
  //       payload: newConfig,
  //     });
  //     activeComponent.current = firstSearchEl;
  //   }
  // }, [showFilterBox]);

  // const handleKeyPress = (
  //   e,
  //   componentKeys,
  //   currentHomeIndex,
  //   home,
  //   components,
  //   homeKeys,
  // ) => {
  //   switch (e.keyCode) {
  //     case 39:
  //       bookingUtil.moveRight(
  //         activeHomeComponent,
  //         activeComponent,
  //         home,
  //         dispatch,
  //         configuration,
  //         _,
  //       );
  //       setIsPopapsOpen(false);
  //       setFilterDisplay({
  //         location: false,
  //         date: false,
  //         guests: false,
  //       });
  //       useMoveSound();
  //       break;
  //     case 37:
  //       bookingUtil.moveLeft(
  //         activeComponent,
  //         activeHomeComponent,
  //         home,
  //         dispatch,
  //         configuration,
  //         _,
  //         setAsideActive,
  //       );
  //       setFilterDisplay({
  //         location: false,
  //         date: false,
  //         guests: false,
  //       });
  //       setIsPopapsOpen(false);
  //       useMoveSound();
  //       break;
  //     case 40:
  //       bookingUtil.moveDown(
  //         currentHomeIndex,
  //         homeKeys,
  //         activeHomeComponent,
  //         home,
  //         dispatch,
  //         configuration,
  //         activeComponent,
  //         _,
  //         showFilterBox,
  //         isPopapsOpen,
  //       );
  //       useMoveSound();
  //       break;
  //     case 38:
  //       bookingUtil.moveUp(
  //         currentHomeIndex,
  //         homeKeys,
  //         activeHomeComponent,
  //         home,
  //         dispatch,
  //         configuration,
  //         activeComponent,
  //         _,
  //         isPopapsOpen,
  //       );
  //       useMoveSound();
  //       break;
  //     case 'Enter':
  //       break;
  //     case 'Backspace':
  //       if (showFilterBox) {
  //         setShowFilterBox(false);
  //         activeHomeComponent.current = 'filter';
  //         return;
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const eventHendler = (e) => {
  //   let components = null;
  //   let componentKeys = null;
  //   let homeKeys = null;
  //   let currentHomeIndex = null;
  //   let home = null;
  //   activeComponent.current = activeComponent.current;
  //   if (showFilterBox) {
  //     components =
  //       configuration?.booking?.home?.filter_box?.home[
  //         activeHomeComponent.current
  //       ]?.components;
  //     if (components) {
  //       home = configuration?.booking?.home?.filter_box?.home;
  //       componentKeys = Object.keys(components);
  //       homeKeys = Object.keys(
  //         configuration?.booking?.home?.filter_box?.home || {},
  //       );
  //     }
  //     currentHomeIndex = homeKeys.indexOf(activeHomeComponent.current);
  //   } else {
  //     components =
  //       configuration?.booking?.home[activeHomeComponent.current]?.components;
  //     if (components) {
  //       home = configuration?.booking?.home;
  //       componentKeys = Object.keys(components);
  //       homeKeys = Object.keys(configuration?.booking?.home || {});
  //       currentHomeIndex = homeKeys.indexOf(activeHomeComponent.current);
  //     }
  //   }

  //   handleKeyPress(
  //     e,
  //     componentKeys,
  //     currentHomeIndex,
  //     home,
  //     components,
  //     homeKeys,
  //   );
  // };

  // const formatDate = (string) => {
  //   if (string == undefined) {
  //     return null;
  //   }
  //   let month = string?.slice(0, 2);
  //   let day = string?.slice(3, 5);
  //   let year = string?.slice(6, 10);
  //   return `${year}-${day}-${month}`;
  // };

  // useEffect(() => {
  //   canNavigate ? window.addEventListener('keydown', eventHendler) : null;
  //   return () => {
  //     window.removeEventListener('keydown', eventHendler);
  //   };
  // }, [
  //   activeComponent.current,
  //   state?.config,
  //   showFilterBox,
  //   asideActive,
  //   isPopapsOpen,
  // ]);

  // const toggleResults = () => {
  //   const data = {
  //     location: location,
  //     startDate: formatDate(dates?.startDate?.toLocaleDateString().toString()),
  //     endDate: formatDate(dates?.endDate?.toLocaleDateString().toString()),
  //     roomsCount: guests?.roomsCount == 0 ? null : guests?.roomsCount,
  //     adultsCount: guests?.adultsCount == 0 ? null : guests?.adultsCount,
  //     childrensCount:
  //       guests?.childrensCount == 0 ? null : guests?.childrensCount,
  //   };
  //   const filteredData = {};
  //   for (const key in data) {
  //     if (
  //       data[key] !== null &&
  //       data[key] !== undefined &&
  //       data[key] !== '' &&
  //       data[key] !== false &&
  //       data[key] !== 0
  //     ) {
  //       filteredData[key] = data[key];
  //     }
  //   }
  //   fetch(`${import.meta.env.VITE_API_URL}/hotel-filter?page=1&limit=10`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(filteredData),
  //   })
  //     .then((res) => {
  //       res.json().then((data) => {
  //         setData(data?.content);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setShowResult((prev) => !prev);
  //   configuration.booking.home.results.display =
  //     !configuration.booking.home.results.display;
  //   configuration.booking.home.results.factory.index = 0;
  // };

  // const filterResults = (e) => {
  //   if (e.key !== 'Enter' && e.type !== 'click') return;
  //   configuration.booking.home.filter.display =
  //     !configuration.booking.home.filter.display;
  //   toggleResults();
  // };

  return (
    <div className="booking__mainContainer">
      <div className={`topBg ${showResult == true ? 'showResults' : ''}`}>
        {/* <SignIn
          type={showResult == true ? 'secondary' : 'primary'}
          config={configuration?.booking?.home?.auth}
        /> */}
        {/* <BookingSearch
          locationFilterData={locationFilterData}
          setLocationFilterData={setLocationFilterData}
          filterResults={filterResults}
          data={data}
          location={location}
          setLocation={setLocation}
          guests={guests}
          setGuests={setGuests}
          filterDisplay={filterDisplay}
          fetchSuggestions={fetchSuggestions}
          setFilterDisplay={setFilterDisplay}
          toggleResults={toggleResults}
          setData={setData}
          dates={dates}
          setDates={setDates}
          config={configuration?.booking?.home?.search}
          formatDate={formatDate}
          setIsPopapsOpen={setIsPopapsOpen}
        /> */}
        {/* {showResult == true && (
          <BookingSearchBarFilterBack
            advancedFilter={advancedFilter}
            setAdvancedFilter={setAdvancedFilter}
            config={configuration?.booking?.home}
            showFilterBox={showFilterBox}
            setShowFilterBox={setShowFilterBox}
          />
        )} */}
      </div>
      {/* {showResult == true && (
        <div className="bottom">
          <div className="bottom_bgOverlay"></div>
          <div className="bottom__results">
            {data?.map((oneBooking, index) => {
              return (
                <BookingSearchResult
                  data={oneBooking}
                  id={oneBooking.id}
                  key={index}
                  index={index}
                  config={configuration?.booking?.home?.results}
                />
              );
            })}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Booking;
