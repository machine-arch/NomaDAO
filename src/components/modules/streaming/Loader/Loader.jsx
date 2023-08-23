import React from 'react';
import './Loader.css';

 const Loader = () => {
  return (
    <div className='streamingLoader-container' >
          <div className='streamingLoader-title '>NOMADVERSE</div>
          <div className='streamingLoader-circleContainer'>
            <div className="streamingLoader-circle"></div>
            <div className="streamingLoader-circle"></div>
            <div className="streamingLoader-circle"></div>
          </div>
          <div className='streamingLoader-infoText streamingLoader-infoText-fade-in-delay-1s'>Loading Your Entertainment</div>
          <div className='streamingLoader-infoText streamingLoader-infoText-fade-in-delay-2s'>Sit back and relax.</div>
          <div className='streamingLoader-infoText streamingLoader-infoText-fade-in-delay-3s'>We're getting things ready for you.</div>
        </div>
  )
}

export default Loader