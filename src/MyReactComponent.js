import React from 'react';

const MyReactComponent = () => {
  const handleClick = () => {
    console.log("button clicked");
  }
  
    return (
      <div>
        <h6 style={{color: 'white', backgroundColor: 'black'}}>Text from MyReactComponent!</h6>
      <button onClick={handleClick} >Click here</button>
      </div>
    );
  };
  
  export default MyReactComponent;