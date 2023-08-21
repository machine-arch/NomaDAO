import React, { useState, useContext, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductContext from '../../../context/ProductContext.js';
import useKeyHandlerEffect from '../../../hooks/useKeyHanderEffect.js';
import useMoveSound from '../../../hooks/useMoveSound.js';
import './Streaming.css';

export default function Streaming() {
  const { link } = useParams();
  const navigate = useNavigate();
  const moveSound = useMoveSound;
  const productContext = useContext(ProductContext);
  const { product } = productContext; // lastly visited product, navigate(-1) doesn't work for TV

  // error handling on loading iframe
  const [iframeError, setIframeError] = useState(false);
  const buttonRef = useRef(null);
  const iframe = useRef(null);
  const [iframeLoading, setIframeLoading] = useState(true);

  const handleIframeLoad = async () => {
    setIframeError(false);
    setIframeLoading(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

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
  return (
    <>
      {iframeError && (
        <div style={{ padding: '10px', flexDirection: 'column', gap: '20px' }}>
          <p style={{ fontSize: '20px' }}>
            Error loading content. Please contact administration.
          </p>
          <button
            ref={buttonRef}
            onKeyDown={exit}
            onFocus={() => alert(1)}
            className="streaming-errorButton"
          >
            Back
          </button>
        </div>
      )}
      {iframeLoading &&
        <div className='streaming-stream' style={{ zIndex: 10, backgroundColor: 'green' }}>
          <p>Loading...</p>
        </div>}
      <iframe
        className={`streaming-stream ${iframeError ? 'hidden' : ''}`}
        src={link}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        onKeyDown={(e) => {
          console.log(e.keyCode);
        }}
        ref={iframe}
        autoPlay={true}
      ></iframe>
    </>
  );
}
