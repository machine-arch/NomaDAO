import React, { useEffect, useState, useContext, useRef } from "react";
import BookingData from "../../../data/hotels.json";
import "./Booking.css";
import BookingSearch from "./BookingSearch/BookingSearch.component";
import BookingSearchResult from "./BookingSearchResult/BookingSearchResult.component";
import BookingSearchBarFilterBack from "./BookingSearchBarFilterBack/BookingSearchBarFilterBack.component";
import SignIn from "../../SignIn/SignIn.component";
import AsideContext from "../../../context/AsideContext.js";
import { GlobalContext } from "../../../context/global.context.jsx";
import BookingUtil from "../../../utils/navigation.util";
import configuration from "../../../navigateConfig.js";
import { ErrorBoundary } from "react-error-boundary";

const Booking = () => {
  const [showResult, setShowResult] = useState(false);
  const bookingUtil = new BookingUtil();

  const { asideActive, setAsideActive, pages, activePage, setActivePage } =
    useContext(AsideContext);
  const { state, dispatch } = useContext(GlobalContext);
  const [canNavigate, setCanNavigate] = useState(false);
  const activeHomeComponent = useRef(null);
  const activeComponent = useRef(null);
  const [showFilterBox, setShowFilterBox] = useState(false);

  function startup() {
    if (!asideActive && !showFilterBox) {
      const firstHomeEl = Object.keys(configuration?.booking?.home)[1];
      const searchComponents =
        configuration?.booking?.home[firstHomeEl]?.components;
      if (!searchComponents) return;
      const firstSearchEl = Object.keys(searchComponents)[0];
      searchComponents[firstSearchEl].isActive = true;
      const newConfig = JSON.parse(JSON.stringify(configuration));
      dispatch({
        type: "SET_CONFIG",
        payload: newConfig,
      });
      activeHomeComponent.current = firstHomeEl;
      activeComponent.current = firstSearchEl;
      setCanNavigate(true);
    } else {
      setCanNavigate(false);
    }
  }

  useEffect(() => {
    startup();
  }, [asideActive]);

  useEffect(() => {
    if (showFilterBox) {
      const parent = "filter_box";
      const firstHomeEl = Object.keys(
        configuration?.booking?.home[parent]?.home
      )[0];

      const searchComponents =
        configuration?.booking?.home[parent]?.home[firstHomeEl]?.components;
      if (!searchComponents) return;

      const firstSearchEl = Object.keys(searchComponents)[0];
      searchComponents[firstSearchEl].isActive = true;
      activeHomeComponent.current = firstHomeEl;
      const newConfig = JSON.parse(JSON.stringify(configuration));
      dispatch({
        type: "SET_CONFIG",
        payload: newConfig,
      });
      activeComponent.current = firstSearchEl;
    }
  }, [showFilterBox]);

  const handleKeyPress = (
    e,
    componentKeys,
    currentHomeIndex,
    home,
    components,
    homeKeys
  ) => {
    switch (e.key) {
      case "ArrowRight":
        bookingUtil.moveRight(
          activeHomeComponent,
          activeComponent,
          components,
          home,
          dispatch,
          configuration
        );
        break;
      case "ArrowLeft":
        bookingUtil.moveLeft(
          activeComponent,
          components,
          dispatch,
          configuration
        );
        break;
      case "ArrowDown":
        bookingUtil.moveDown(
          currentHomeIndex,
          homeKeys,
          activeHomeComponent,
          components,
          home,
          dispatch,
          configuration,
          activeComponent
        );
        break;
      case "ArrowUp":
        bookingUtil.moveUp(
          currentHomeIndex,
          homeKeys,
          activeHomeComponent,
          home,
          components,
          dispatch,
          configuration,
          activeComponent
        );
        break;
      case "Enter":
        break;
      case "Backspace":
        if (showFilterBox) {
          setShowFilterBox(false);
          activeHomeComponent.current = "filter";
        }
        break;
      default:
        break;
    }
  };

  const eventHendler = (e) => {
    let components = null;
    let componentKeys = null;
    let homeKeys = null;
    let currentHomeIndex = null;
    let home = null;
    activeComponent.current = activeComponent.current;
    if (showFilterBox) {
      components =
        configuration?.booking?.home?.filter_box?.home[
          activeHomeComponent.current
        ]?.components;
      if (components) {
        home = configuration?.booking?.home?.filter_box?.home;
        componentKeys = Object.keys(components);
        homeKeys = Object.keys(
          configuration?.booking?.home?.filter_box?.home || {}
        );
      }
      currentHomeIndex = homeKeys.indexOf(activeHomeComponent.current);
    } else {
      components =
        configuration?.booking?.home[activeHomeComponent.current]?.components;
      if (components) {
        home = configuration?.booking?.home;
        componentKeys = Object.keys(components);
        homeKeys = Object.keys(configuration?.booking?.home || {});
        currentHomeIndex = homeKeys.indexOf(activeHomeComponent.current);
      }
    }

    handleKeyPress(
      e,
      componentKeys,
      currentHomeIndex,
      home,
      components,
      homeKeys
    );
  };

  useEffect(() => {
    canNavigate ? window.addEventListener("keydown", eventHendler) : null;
    return () => {
      window.removeEventListener("keydown", eventHendler);
    };
  }, [activeComponent.current, configuration, showFilterBox]);

  const toggleResults = () => {
    setShowResult((prev) => !prev);
  };

  const filterResults = (e) => {
    if (e.key !== "Enter" && e.type !== "click") return;
    toggleResults();
  };

  return (
    // <ErrorBoundary
    //   FallbackComponent={({ error, resetErrorBoundary }) => (
    //     <div>
    //       <h2>An error occurred: {error.message}</h2>
    //       <button onClick={resetErrorBoundary}>Retry</button>
    //     </div>
    //   )}
    // >
    <div className="booking__mainContainer">
      <div className={`topBg ${showResult == true ? "showResults" : ""}`}>
        <SignIn
          type={showResult == true ? "secondary" : "primary"}
          config={configuration?.booking?.home?.auth}
        />
        <BookingSearch
          filterResults={filterResults}
          config={configuration?.booking?.home?.search}
        />
        {showResult == true && (
          <BookingSearchBarFilterBack
            config={configuration?.booking?.home}
            showFilterBox={showFilterBox}
            setShowFilterBox={setShowFilterBox}
          />
        )}
      </div>
      {showResult == true && (
        <div className="bottom">
          <div className="bottom_bgOverlay"></div>
          <div className="bottom__results">
            {BookingData.hotels?.map((oneBooking, index) => {
              return (
                <BookingSearchResult
                  id={oneBooking.id}
                  key={index}
                  name={oneBooking.name}
                  price={oneBooking.price}
                  facilities={oneBooking.facilities}
                  mainImage={oneBooking.mainImage}
                  rating={oneBooking.rating}
                  location={oneBooking.location}
                  index={index}
                  config={configuration?.booking?.home?.results}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
    // </ErrorBoundary>
  );
};

export default Booking;
