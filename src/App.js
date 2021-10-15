import React, { useState } from 'react';

import './App.css';
import ButtonWrapper from './components/ButtonWrapper';

function App() {

  const [room, setRoom] = useState(0)
  const [waterLevel, setWaterLevel] = useState(0) //init to defualt water level
  const [timePassed, setTimePassed] = useState(0) //set to miliseconds passed can format it use the Date class
  const [rainAmount, setRainAmount] = useState(0)
  const [rainCycles, setRainCycles] = useState(0) //amount of times it has rained

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
