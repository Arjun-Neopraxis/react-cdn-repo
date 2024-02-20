import React from 'react';
import { useState, useEffect } from 'react';
 
export default function HeaderBanner() {
  // const [count, setCount] = useState(0);
    const [contentIndex, setContentIndex] = useState(0);
    const contents = ['We Have','What You are','Searching for']; // Add your desired contents here
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Update content index every 1 second
        setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
      }, 2000);
   
      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
      
    }, [contentIndex, contents.length]);
    console.log("console from component",setContentIndex);

  return (
    <div className="header-banner">
      <h6 className='banner-header' style={{color: 'white', backgroundColor: 'black', textAlign: 'center', padding: '5px'}}>{contents[contentIndex]}</h6>
      {/* <h6 className='banner-header' style={{color: 'white', backgroundColor: 'black', textAlign: 'center', padding: '5px'}}>Text from react header_banner</h6> */}
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </div>
  );
}