import React from 'react';
import { useState, useEffect } from 'react';
 
const HeaderBanner = () => {
    const [contentIndex, setContentIndex] = useState(0);
    const contents = ['we are here for you', 'Your search ends here', 'the new era of BC']; // Add your desired contents here
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Update content index every 1 second
        setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
      }, 3000);
   
      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }, [contentIndex, contents.length]);

  return (
    <div className="header-banner">
      <h6 className='banner-header' style={{color: 'white', backgroundColor: 'red', textAlign: 'center', padding: '5px'}}>{contents[contentIndex]}</h6>
    </div>
  );
};
ReactDOM.render(<HeaderBanner />, document.getElementById('root'));