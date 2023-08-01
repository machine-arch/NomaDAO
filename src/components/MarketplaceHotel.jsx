import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import marketplace from "../assets/images/marketplace_logo.png";
import MarketplaceNavItem from "./MarketplaceNavItem";
import { Outlet, useNavigate } from "react-router-dom";
import settings from "../assets/images/settings.svg";
import logout from "../assets/images/logout.svg";
import bell from "../assets/images/notification.svg";
import Popup from "./Popup";
import useMoveSound from "../hooks/useMoveSound";
import useRemoveSpaces from "../hooks/useRemoveSpaces";
import MarketplaceContext from "../context/MarketplaceContext";



export default function MarketplaceHotel() {
  const navigate = useNavigate();
  const moveSound = useMoveSound;

  // const marketplaceContext = useContext(MarketplaceContext);

  // const { marketplaceActive} = marketplaceContext;

  const removeSpaces = useRemoveSpaces;
  const [popup, setPopup] = useState(false);
  const navigationtopfour = [
    "Home",
    "Control Panel",
    "Group Requests",
    "Active Balance",
  ];

  const navigation = [
    "Home",
    "Control Panel",
    "Group Requests",
    "Active Balance",
    "Settings",
    "Logout",
  ];
  const [currentPage, setCurrentPage] = useState("Home");

  const [isFocused, setIsFocused] = useState(false);


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    
    function handleKeyDown(event) {
      let currentIndex = navigation.indexOf(currentPage);
      let nextIndex;

      





      function nextInput() {
          if (currentPage === "Settings") {
            setCurrentPage(navigation[5]);
            // navigate("/marketplace")
          }
          else if (currentIndex === 5){
            setCurrentPage(navigation[0]);
          }
          else{
            setCurrentPage(navigation[currentIndex + 1]);
            navigate("/marketplace/hotel/" + removeSpaces(navigation[currentIndex + 1]));

          }

      }


      function prevInput(){

        if (currentPage === "Home") {
          setCurrentPage(navigation[navigation.length - 1]);
        }
        else{
          setCurrentPage(navigation[currentIndex - 1]);
          navigate("/marketplace/hotel/" + removeSpaces(navigation[currentIndex - 1]));

        }


      }
      
      switch(event.keyCode)
      {
        // Down
        case 40:
          nextInput();
          moveSound();
          break;
        
        // Up
        case 38:
          prevInput();
          moveSound();
          break;

        // Left
        case 37:
          moveSound();
          break;

        // Right
        case 39:
          openPage();
          console.log("gadadis");
          moveSound();
          break;
          case 13:
            if (currentPage === "Logout") {
              navigate("/marketplace")
            }
          break;
       
        default:
          break;
      }

      function openPage() {
        // marketplaceActive(false);

        // Use the currentPage value to determine the path
        // const path = `/marketplace/hotel/${removeSpaces(currentPage)}`;
      
        // Navigate to the specified path
        // navigate(path);
      
        // Set the focus on the opened page
        // Here, you can communicate with the other page by passing a query parameter or using state management techniques
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, navigate, navigation, removeSpaces]);
  

  
  return (
    <Wrapper>
      {popup && <Popup setPopup={setPopup} name="Tour Agency #2" />}
      <UserInfo>
        <div style={{display: "flex", alignItems: "center"}}>
          <Organe />
          <div>
            <UserName>Karim Benzema</UserName>
            <UserTitle>Admin</UserTitle>
          </div>
        </div>
        <Img src={bell} alt="bell" />
      </UserInfo>
      <Aside>
        <Logo src={marketplace} alt="Marketplace Logo" />
        <Navigaion>
          {navigationtopfour.map((item) => (
            <MarketplaceNavItem
              // click={handleClick}
              name={item}
              key={item}
              active={item === currentPage ? "true" : "false"}
            />
          ))}
        </Navigaion>
        {navigation.map((item, index) => (
        <Settings
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={() => {
            navigate("/marketplace/hotel/Settings");
            setCurrentPage("Settings");
          }}
          isSelected={currentPage === navigation[4]}
        >
          <img style={imageStyles}              

              onFocus={(e) => {
                e.target.style.filter = focusedImageStyles.filter;
              }}
              onBlur={(e) => {
                e.target.style.filter = imageStyles.filter;
              }} src={settings} alt="settings"  />

          <span>Settings</span>
        </Settings>
        ))}
        <Logout
          onClick={() => {
            navigate("/Marketplace");
          }}
          isSelected={currentPage === navigation[5]}
        >
          <img style={imageStyles}
              onFocus={(e) => {
                e.target.style.filter = focusedImageStyles.filter;
              }}
              onBlur={(e) => {
                e.target.style.filter = imageStyles.filter;
              }}src={logout} alt="Logout" />
          <span>Logout</span>
        </Logout>
      </Aside>
      <Outlet context={{ setPopup }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;

  position: relative;

  display: flex;
`;

const Aside = styled.aside`
  min-width: 22%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 64px 28px;

  position: relative;
`;

const Logo = styled.img`
  margin-left: 28px;
`;

const Navigaion = styled.nav`
  margin-top: 120px;
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  border-radius:10px;
  padding:10px 20px;
  color: ${(props) => (props.isSelected ? "white" : "#a65959")};

  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  background-color: ${(props) => (props.isSelected ? "#7A4242" : "transparent")};


  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  cursor: pointer;

  img {
    filter: ${(props) => (props.isSelected ? "brightness(0) invert(1)" : "none")};
  }
`;

const UserInfo = styled.div`
  position: absolute;
  top: 60px;
  right: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

const UserName = styled.p`
  color: #4c4c4c;
  font-size: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const UserTitle = styled.p`
  color: #b3b3b3;
  font-size: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

const Img = styled.img`
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 50%;
`;

const Organe = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fe7c31;
  margin-right: 10px;
  border-radius: 50%;
`;

const Settings = styled.div`
  // border: 3px solid red;
  border-radius:10px;
  padding:10px 20px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 200px;
  transform: translateX(-50%);
  color: ${(props) => (props.isSelected ? "white" : "#4c4c4c")};
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  background-color: ${(props) => (props.isSelected ? "#3F3F3F" : "transparent")};

  cursor: pointer;

  img {
    filter: ${(props) => (props.isSelected ? "brightness(0) invert(1)" : "none")};
  }

`;






const imageStyles = {
    marginRight: "12px",
    width: "30px",

  };

  const focusedImageStyles = {
    filter: "grayscale(100%) opacity(0.5)"
  };


////////////////


// useEffect(() => {
//   function handleKeyDown(event) {
//     if (event.key === "ArrowUp" || event.key === "ArrowDown") {
//       event.preventDefault();
//       const currentIndex = navigation.indexOf(currentPage);
//       let nextIndex;

//       if (event.key === "ArrowUp") {
//         nextIndex = currentIndex > 0 ? currentIndex - 1 : navigation.length - 1;
//       } else {
//         nextIndex = currentIndex < navigation.length - 1 ? currentIndex + 1 : 0;
//       }

//       const nextPage = navigation[nextIndex];
//       handleClick(nextPage);
//     } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
//       event.preventDefault();

//       if (currentPage === "Settings" && event.key === "ArrowLeft") {
//         setCurrentPage(navigation[navigation.length - 1]);
//         navigate("/marketplace/hotel/" + removeSpaces(navigation[navigation.length - 1]));
//       } else if (currentPage === "Logout" && event.key === "ArrowRight") {
//         setCurrentPage(navigation[0]);
//         navigate("/marketplace/hotel/" + removeSpaces(navigation[0]));
//       } else {
//         setCurrentPage(event.key === "ArrowRight" ? "Settings" : "Logout");
//         navigate("/marketplace/hotel/" + removeSpaces(event.key === "ArrowRight" ? "Settings" : "Logout"));
//       }
//     }
//   }

//   document.addEventListener("keydown", handleKeyDown);

//   return () => {
//     document.removeEventListener("keydown", handleKeyDown);
//   };
// }, [currentPage]);






    ///////////////