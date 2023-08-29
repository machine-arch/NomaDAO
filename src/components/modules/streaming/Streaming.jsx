import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductContext from '../../../context/ProductContext.js';
import useKeyHandlerEffect from '../../../hooks/useKeyHanderEffect.js';
import useMoveSound from '../../../hooks/useMoveSound.js';
import './Streaming.css';
import Loader from './Loader/Loader.jsx';

const checkStreamUrl = import.meta.env.VITE_CHECK_STREAM;
const checkStreamUrl2 = import.meta.env.VITE_CHECK_STREAM_2;


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
  

  // check if iframe url is valid

  const fetchUrlsAndWaitForStatus = async () => {
    const urls = [
      checkStreamUrl,
      checkStreamUrl2,
    ];
  
    const expectedStatus = 200; 
  
    try {
      for (const url of urls) {
        const response = await fetch(url);
        
        if (response.status === expectedStatus) {
          console.log(`Received expected response status ${expectedStatus} for URL: ${url}`);
          
        } else {
          setIframeError(true);
        }
      }
    } catch (error) {
      console.error('Error:', error.message);
      setIframeError(true);
    }
  };

  useEffect(() => {
    fetchUrlsAndWaitForStatus();
  }, []);
    


  return (
    <>
      {iframeLoading && <Loader error={iframeError} exit={exit} />}
      {!iframeError && <iframe
        className={`streaming-stream ${iframeError ? 'hidden' : ''}`}
        src={link}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        onKeyDown={(e) => {
          console.log(e.keyCode);
        }}
        ref={iframe}
        autoPlay={true}
      ></iframe>}
    </>
  );
}
