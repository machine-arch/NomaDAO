import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Arrow from "../../assets/images/arrow-back.png";
import useMoveSound from "../../hooks/useMoveSound.js";
import { useEncodeLink } from "../../hooks/useEncodeLink.js";
import AsideContext from "../../context/AsideContext.js";
import singlePages from "../../data/singlePages.js";
import useKeyHanderEffect from "../../hooks/useKeyHanderEffect.js";
import useRemoveSpaces from "../../hooks/useRemoveSpaces.js";
import ProductContext from "../../context/ProductContext.js";
import "./Product.css";

export default function Product() {
  const { product } = useParams();
  // context
  const asideContext = useContext(AsideContext);
  const { pages, activePage } = asideContext;
  const productContext = useContext(ProductContext);
  const { setProduct } = productContext;
  // state
  const [active, setActive] = useState("launch");
  // prettier-ignore
  const data = singlePages.find((page) => page.title === product); // find product data
  // hooks
  const navigate = useNavigate();
  const encodeLink = useEncodeLink;
  const moveSound = useMoveSound;
  const removeSpaces = useRemoveSpaces;
  // adding listeners
  useKeyHanderEffect(productNavigation);
  // event handler
  function productNavigation(event) {
    switch (event.keyCode) {
      case 13:
        if (active === "back") {
          exit();
        } else if (active === "launch") {
          openStreaming(data.launch_link);
        }
        // } else if (active === "tutorial") {
        //   openStreaming(data.tutorial_link);
        // }
        moveSound();
        break;
      case 38:
        if (active !== "back") {
          setActive("back");
          moveSound();
        }
        break;
      case 40:
        if (active === "back") {
          setActive("launch");
          moveSound();
        }
        break;
      case 39:
        // if (active === "launch") {
        //   setActive("tutorial");
        //   moveSound();
        // }
        break;
      case 37:
        // if (active === "tutorial") {
        //   setActive("launch");
        //   moveSound();
        // }
        break;
      case 8:
        exit();
        moveSound();

        break;
      case 10009:
        exit();
        moveSound();

        break;

      default:
        break;
    }
  }
  // functions
  function openStreaming(link) {
    navigate("/streaming/" + encodeLink(link));
    setProduct(product);
  }
  function exit() {
    navigate(`/${removeSpaces(pages[activePage])}`);
  }
  return (
    <div
      className="SinglePage"
      img={data.img}
      style={{
        backgroundImage: `url(${data.img})`,
      }}
    >
      <div className="Top">
        <img src={Logo} alt="Logo" />
        <div
          className="BackButton"
          active={active}
          style={{
            active: active === "back" ? "#ececec" : "rgba(20, 170, 254, 1)",
          }}
        >
          <img style={{ marginRight: "16px" }} src={Arrow} alt="Arrow Left" />
          <p>Back</p>
        </div>
      </div>
      <div className="Bottom">
        <div className="Title">{data.title}</div>
        <div className="Buttons">
          <div
            className="Launch"
            active={active}
            style={{
              color: active === "launch" ? "#ececec" : "rgba(20, 170, 254, 1)",
            }}
          >
            Launch
          </div>
          {/* <Tutorial active={active}>Tutorial</Tutorial> */}
        </div>
        <div className="Description">{data.description}</div>
      </div>
    </div>
  );
}
