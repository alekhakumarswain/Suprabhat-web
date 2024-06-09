import React, { useEffect, useState } from 'react';
import logoan from '../Assets/logoan.gif';

function Welcome({ onFinish }) {
  const [showSplash, setShowSplash] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
      onFinish(); // Callback to inform the parent component that splash is finished
    }, 3000); // Adjust the time as per your requirement
  }, [onFinish]);

  return (
    <>
      {showSplash && (
        <div className='splash' >
          <h1>SuPrabhat</h1>
          <div className='splash-logo'>
            <img src={logoan} alt='logo' />
        </div>
        </div>
      )}
    </>
  );
}

export default Welcome;
