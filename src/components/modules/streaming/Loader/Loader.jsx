import React from 'react';
import './Loader.css';

 const Loader = () => {
  return (
    <div className='streamingLoader-container' >
          <div className='streamingLoader-title '>NOMADVERSE</div>
          <div className='streamingLoader-circleContainer'>
            <div class="streamingLoader-circle"></div>
            <div class="streamingLoader-circle"></div>
            <div class="streamingLoader-circle"></div>
          </div>
          <div className='streamingLoader-infoText'>Loading Your Entertainment</div>
          <div className='streamingLoader-infoText'>Sit back and relax.</div>
          <div className='streamingLoader-infoText'>We're getting things ready for you.</div>
        </div>
  )
}

export default Loader