import React, { useState, useEffect } from 'react';

import './App.css';
import ButtonWrapper from './components/ButtonWrapper';
import Timer from './components/Timer';
import ProgressBar from "@ramonak/react-progress-bar";

function App() {

  const maxWaterLevel = 1000 //Will most likely need to change this in the future doesnt need to be state tho

  const [room, setRoom] = useState(0)
  const [waterLevel, setWaterLevel] = useState(100) //init to default water level
  const [timeLeft, setTimeLeft] = useState(100) //set to miliseconds passed can format it use the Date class
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

  const incTimeDown = () => {
    setTimeLeft(timeLeft - 1)
  }

  useEffect(() => {
    const mainTimer = setInterval(() => {
       incTimeDown()
    }, 1000)
  }, [])

  return (
    <div className="App">
      {displayRoom()}
      {waterLevel}
      <ButtonWrapper />
      <Timer time={timeLeft}/>
      <ProgressBar completed={waterLevel/100}/>
    </div>
  );
}

export default App;
