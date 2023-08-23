import React, { useEffect,useRef } from 'react';
import './Loader.css';

import Arrow from '../../../../assets/images/arrow-back.png';

 const Loader = ({error,exit}) => {

const errorBTNRef = useRef(null);

useEffect(() => {
  if (error) {
  if(errorBTNRef.current){
    errorBTNRef.current.focus();
  }
  }
}, [error])
  

  return (
    <div className='streamingLoader-container' >
      <div className='streamingLoader-title '>NOMADVERSE</div>

      {error ? 
      <>
      <div style={{color: "white"}}>Sorry for the inconvenience. Unfortunately the page cannot be loaded. Please go to previous page or try to open it later</div>
      
      <button
          ref={errorBTNRef}
          onKeyDown={exit}
          className="streamingLoader-BackButton"
          style={{
            color: '#ececec',
            backgroundColor: 'rgba(20, 170, 254, 1)',
          }}
        >
          <img style={{ marginRight: '16px', margin:"10px" }} src={Arrow} alt="Arrow Left" />
          <p>Back</p>
      </button>
      </>: 
        <>
          <div className='streamingLoader-circleContainer'>
            <div className="streamingLoader-circle"></div>
            <div className="streamingLoader-circle"></div>
            <div className="streamingLoader-circle"></div>
          </div>
          <div className='streamingLoader-infoText streamingLoader-infoText-fade-in-delay-1s'>Loading Your Entertainment</div>
          <div className='streamingLoader-infoText streamingLoader-infoText-fade-in-delay-2s'>Sit back and relax.</div>
          <div className='streamingLoader-infoText streamingLoader-infoText-fade-in-delay-3s'>We're getting things ready for you.</div>
        </>
      }

    </div>
  )
}

export default Loader