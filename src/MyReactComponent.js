import React from 'react';

const MyReactComponent = () => {
  if (2 > 1) {
    var contentText = "TEXT FROM VARIABLE SUCCESS"
  } else {
    var contentText = "TEXT FROM VARIABLE FAIl"
  }
  
    return (
      <div>
        <h6 style={{color: 'white', backgroundColor: 'black'}}>Text from MyReactComponent! {contentText}</h6>
      </div>
    );
  };
  
  export default MyReactComponent;