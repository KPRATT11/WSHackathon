import React, { useState } from 'react';

import './App.css';
import ButtonWrapper from './components/ButtonWrapper';
import Timer from './components/Timer';

function App() {

  const maxWaterLevel = 1000 //Will most likely need to change this in the future doesnt need to be state tho

  const [room, setRoom] = useState(0)
  const [waterLevel, setWaterLevel] = useState(100) //init to defualt water level
  const [timePassed, setTimePassed] = useState(0) //set to miliseconds passed can format it use the Date class
  const [rainAmount, setRainAmount] = useState(0)
  const [rainCycles, setRainCycles] = useState(0) //amount of times it has rained
  const [season, setSeason] = useState(true) //True for summer false for winter

  //Function is run whenever we want rain to occur
  const createRain = () => {
    setWaterLevel(Math.min(waterLevel + rainAmount, maxWaterLevel))
    setRainCycles(rainCycles + 1)
  }

  //Randomly generates rain probably called every minute or something
  const randomRain = () => {
    let randNumber = Math.floor(Math.random() * 10)

    if (season){
      if (randNumber < 2){
        createRain()
      }
    } else {
      if (randNumber < 8){
        createRain()
      }
    }
  }

  //pass this function as a prop to wherever might deplete water
  //you can then call it from that component
  const useWater = (amount) => {
    setWaterLevel(Math.max(waterLevel - amount), 0)
  }

  const displayRoom = () => {
    //probs just have a switch here that returns the room component
    return(<div></div>)
  }

  return (
    <div className="App">
      {displayRoom()}
      {waterLevel}
      <ButtonWrapper />
      <Timer time="10"/>
    </div>
  );
}

export default App;
