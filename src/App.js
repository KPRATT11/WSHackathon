import React, { useState } from 'react';

import './App.css';
import ButtonWrapper from './components/ButtonWrapper';

function App() {



  const [room, setRoom] = useState(0)

  const displayRoom = () => {
    //probs just have a switch here that returns the room component
    return(<div></div>)
  }

  return (
    <div className="App">
      {displayRoom()}
      <ButtonWrapper />
    </div>
  );
}

export default App;
