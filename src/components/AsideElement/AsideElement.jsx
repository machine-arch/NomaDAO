import React from "react";
import useDynamicImage from "../hooks/useDynamicImage.js";
import useRemoveSpaces from "../hooks/useRemoveSpaces.js";
import "./AsideElement.css";
export default function AsideElement(props) {
  const { name, active, saved } = props;
  // hooks
  const removeSpaces = useRemoveSpaces;

  const image = useDynamicImage(removeSpaces(name)); // load image dynamically. Image name should be pagename.png, always!!!, for example Nomad Enternainment image is NomadEntertainment.png, with removed whitespaces

  return (
    <li className="li">
      <div className="white" style={{ display: `${active === "true" ? "block" : "none"}` }}></div>
      <div className="content"
        style={{
          background: `${active === "true" && "rgb(17, 94, 145)"}`,
          borderStyle: `${active === "true" ? "solid" : "none"}`,
          background: `${saved === "true" && "rgba(17, 94, 145, 0.35)"}`
        }}
      >
        <img className="img" src={image} alt={name} />
        <span className="span">{name}</span>
      </div>
    </li>
  );
}

