import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import HOTELS from "../../data/hotels.js";
import useConditionalHandler from "../../hooks/useConditionalHandler.js";
import useMoveSound from "../../hooks/useMoveSound.js";
const otherImages = [
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-4.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-3.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern3-4.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-1.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern1-2.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern1-1.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-4.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-5.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-1.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-2.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-2.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-3.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern3-4.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern3-6.jpg",
  "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern6-6.jpg",
];
const rooms = [
  {
    roomType: "Standard Single Room",
    roomPrice: "65",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-4.jpg",
  },
  {
    roomType: "Standard Double/Twin Room",
    roomPrice: "75",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-3.jpg",
  },
  {
    roomType: "Superior double/ twin",
    roomPrice: "90",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern2-2.jpg",
  },
  {
    roomType: "Superior double/ twin",
    roomPrice: "90",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern3-6.jpg",
  },
  {
    roomType: "Junior Suite",
    roomPrice: "110",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern6-6.jpg",
  },
  {
    roomType: "Barnov Suite",
    roomPrice: "140",
    roomImage:
      "https://nomadao.net/public/uploads/0000/1/2023/02/14/bestwestern-4.jpg",
  },
];
export default function SingleHotel() {
  // get the name of the hotel from the route
  const { hotelName } = useParams();
  // state
  // before getting real otherImages in each hotel, adding testing
  // prettier-ignore
  const hotel = { ...HOTELS.find((hotel) => hotel.name === hotelName), otherImages, rooms };
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(true);
  const [roomsActive, setRoomsActive] = useState(false);
  const [backActive, setBackActive] = useState(false);
  const [activeRoom, setActiveRoom] = useState(null);
  // refs
  const roomsRef = useRef(null);
  const wrapperRef = useRef(null);
  //  hooks
  const navigate = useNavigate();
  const moveSound = useMoveSound;
  // adding events
  useConditionalHandler(sliderEvents, isSliderActive);
  useConditionalHandler(backButtonEvents, backActive);
  useConditionalHandler(roomsEvents, roomsActive);
  // event handlers
  function sliderEvents(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        goRooms();
        moveSound();
        break;

      // Up Arrow
      case 38:
        goBackButton();
        moveSound();
        break;

      // Left Arrow
      case 37:
        prevSlide();
        moveSound();
        break;

      // Right Arrow
      case 39:
        nextSlide();
        moveSound();
        break;

      // Backspace
      case 8:
        goToSearchingHotelsPage();
        moveSound();
        break;

      // Back button on remote
      case 10009:
        goToSearchingHotelsPage();
        moveSound();

        break;
      // Enter - Ok
      case 13:
        break;

      default:
        break;
    }
  }
  function roomsEvents(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        nextRoom();
        moveSound();
        break;

      // Up Arrow
      case 38:
        prevRoom();
        moveSound();
        break;

      // Left Arrow
      case 37:
        break;

      // Right Arrow
      case 39:
        break;

      // Backspace
      case 8:
        goToSearchingHotelsPage();
        moveSound();
        break;

      // Back button on remote
      case 10009:
        goToSearchingHotelsPage();
        moveSound();
        break;
      // Enter - Ok
      case 13:
        break;

      default:
        break;
    }
  }
  function backButtonEvents(event) {
    switch (event.keyCode) {
      // Down Arrow
      case 40:
        goToSlider();
        moveSound();
        break;

      // Up Arrow
      case 38:
        break;

      // Left Arrow
      case 37:
        goToSearchingHotelsPage();
        moveSound();
        break;

      // Right Arrow
      case 39:
        break;

      // Backspace
      case 8:
        goToSearchingHotelsPage();
        moveSound();

        break;

      // Back button on remote
      case 10009:
        goToSearchingHotelsPage();
        moveSound();

        break;
      // Enter - Ok
      case 13:
        goToSearchingHotelsPage();
        moveSound();

        break;

      default:
        break;
    }
  }
  // other functions
  function nextSlide() {
    if (sliderIndex + 1 === hotel.otherImages.length) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  }
  function prevSlide() {
    if (sliderIndex === 0) {
      setSliderIndex(hotel.otherImages.length - 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  }
  function goRooms() {
    setBackActive(false);
    setRoomsActive(true);
    setIsSliderActive(false);
    scrollToRef(roomsRef);
    setActiveRoom(0);
  }
  function goToSlider() {
    setBackActive(false);
    setRoomsActive(false);
    setIsSliderActive(true);
    scrollToRef(wrapperRef);
    setActiveRoom(null);
  }
  function goBackButton() {
    setBackActive(true);
    setRoomsActive(false);
    setIsSliderActive(false);
    scrollToRef(wrapperRef);
  }
  function goToSearchingHotelsPage() {
    navigate("/BookYourHotel");
  }
  function scrollToRef(elementRef) {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToElement(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  function nextRoom() {
    if (activeRoom === hotel.rooms.length - 1) {
      setActiveRoom(0);
      scrollToElement(roomsRef.current.children[0]);
    } else {
      setActiveRoom(activeRoom + 1);
      scrollToElement(roomsRef.current.children[activeRoom + 1]);
    }
  }
  function prevRoom() {
    if (activeRoom === 0) {
      setActiveRoom(null);
      goToSlider();
    } else {
      setActiveRoom(activeRoom - 1);
      scrollToElement(roomsRef.current.children[activeRoom - 1]);
    }
  }

  return (
    <div className="wrapper" ref={wrapperRef}>
      <img
        src="https://nomadao.net/public/uploads/0000/1/2023/04/05/form-bg.jpg"
        className="image"
      />
      <button className={`gray-button ${backActive ? "active" : ""}`}>
        Back
      </button>
      <div className="rating">{hotel.rating} / 5</div>
      <p className="hotel-name">{hotel.name}</p>
      <p className="location">Location: {hotel.location}</p>
      <div className={`slider-wrapper ${isSliderActive ? "active" : ""}`}>
        <img
          src="https://i.ibb.co/ymThbpH/arrow-right.png"
          className="arrow-right"
        />
        <img
          src="https://i.ibb.co/ymThbpH/arrow-right.png"
          className="arrow-left"
        />
        <div
          className="slider-relative"
          style={{
            transform: `translateX(-${
              sliderIndex * (100 / hotel.otherImages.length)
            }%)`,
          }}
        >
          {hotel.otherImages.map((image, index) => (
            <div
              key={image + index}
              className="slider"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
      <div className={`check-availability ${roomsActive ? "active" : ""}`}>
        Check Availability
      </div>
      <div className={`rooms ${roomsActive ? "active" : ""}`} ref={roomsRef}>
        {hotel.rooms.map((room, index) => (
          <div
            className={`room ${activeRoom === index ? "active" : ""}`}
            key={room.roomType + index}
          >
            <img src={room.roomImage} className="room-img" />
            <p className="room-type">{room.roomType}</p>
            <p className="room-price">${room.roomPrice} / night</p>
            <button
              className={`room-book ${activeRoom === index ? "active" : ""}`}
            >
              Book Room
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
