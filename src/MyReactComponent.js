import React from 'react';

const MyReactComponent = () => {
  var buttonElement = document.getElementById('myButton');
  buttonElement.addEventListener("click", function() {
    console.log("button clicked");
  })
  
    return (
      <div>
        <h6 style={{color: 'white', backgroundColor: 'black'}}>Text from MyReactComponent!</h6>
      <button id='myButton'>Click here</button>
      </div>
    );
  };
  
  export default MyReactComponent;