import React from 'react';

const MyReactComponent = () => {
  const [myText, setMyText] = useState('First');

    return (
      <div>
        <h6 style={{color: 'white', backgroundColor: 'black'}}>{myText}Text from MyReactComponent!</h6>
      </div>
    );
  };
  
  export default MyReactComponent;