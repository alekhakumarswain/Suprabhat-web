import React, { useState } from 'react';
import Home from './Components/Home';
import Welcome from './Components/welcome';
import Menu from './Components/Menu';
import './App.css'

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeFinish = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <Welcome onFinish={handleWelcomeFinish} />
      ) : (
        <>
          <Menu />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
