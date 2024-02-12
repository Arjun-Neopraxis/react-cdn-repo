import React, { useState, useEffect } from 'react';
import reactToWebComponent from 'react-to-webcomponent';

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
      <h6 className='banner-header' style={{color: 'white', backgroundColor: 'black', textAlign: 'center', padding: '5px'}}>{contents[contentIndex]}</h6>
    </div>
  );
};

// Convert the React component to a web component
const HeaderBannerWebComponent = reactToWebComponent(HeaderBanner, React, ReactDOM);

// Register the web component
customElements.define('header-banner', HeaderBannerWebComponent);

export default HeaderBanner;
