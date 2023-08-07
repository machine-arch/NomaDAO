import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductContext from '../../context/ProductContext.js';
import useKeyHandlerEffect from '../../hooks/useKeyHanderEffect.js';
import useMoveSound from '../../hooks/useMoveSound.js';
import './Streaming.css';

export default function Streaming() {
  const { link } = useParams();
  const navigate = useNavigate();
  const moveSound = useMoveSound;
  const productContext = useContext(ProductContext);
  const { product } = productContext; // lastly visited product, navigate(-1) doesn't work for TV

  useKeyHandlerEffect(streamingEvents);

  function streamingEvents(event) {
    switch (event.keyCode) {
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

  function exit() {
    navigate(`/products/` + product);
  }
  return <iframe className="streaming-stream" src={link}></iframe>;
}
