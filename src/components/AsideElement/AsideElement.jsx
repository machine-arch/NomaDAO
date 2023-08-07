import React from 'react';
import useDynamicImage from '../../hooks/useDynamicImage.js';
import useRemoveSpaces from '../../hooks/useRemoveSpaces.js';
import './AsideElement.css';
export default function AsideElement(props) {
  const { name, active, saved } = props;
  // hooks
  const removeSpaces = useRemoveSpaces;

  const image = useDynamicImage(removeSpaces(name));

  return (
    <li className="asideElement-liElement">
      <div
        className={`asideElement_white1 ${
          active === 'true' ? 'active' : 'none'
        }`}
      ></div>
      <div
        className={`asideElement-content ${
          active === 'true' ? 'active' : 'none'
        } ${saved === 'true' ? 'saved' : ''}`}
        style={
          active === 'true'
            ? { background: 'rgb(17, 94, 145)', borderStyle: 'solid' }
            : saved === 'true'
            ? { background: 'rgba(17, 94, 145, 0.35)' }
            : { background: '', borderStyle: '' }
        }
      >
        <img src={image} alt={name} className="asideElement-elementImage" />
        <span className="asideElement-elementName">{name}</span>
      </div>
    </li>
  );
}
