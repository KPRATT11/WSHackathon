import React, { useState, useEffect } from 'react';

import './App.css';
import ButtonWrapper from './components/ButtonWrapper';
import ProgressBar from "@ramonak/react-progress-bar";
import AlertRaining from "./components/AlertRaining";
import PlayerBars from "./components/PlayerBars"

import DamRoom from './components/rooms/DamRoom';
import Kitchen from './components/Rooms.js/Kitchen';


function App() {

  const maxWaterLevel = 1000 //Will most likely need to change this in the future doesnt need to be state tho

  const [room, setRoom] = useState('')
  
  const [waterLevel, setWaterLevel] = useState(300) //init to defualt water level
  const [timePassed, setTimePassed] = useState(0) //set to miliseconds passed can format it use the Date class
  const [rainAmount, setRainAmount] = useState(20)
  const [isRaining, setIsRaining] = useState(false) //mostly for graphical purposes
  const [rainCycles, setRainCycles] = useState(0) //amount of times it has rained
  const [season, setSeason] = useState(true) //True for summer false for winter


  //probably best to have these decrease over time using a timer
  const [userStats, setUserStats] = useState({
    thirst: 100,
    hygiene: 100,
    hunger: 100,
    fun: 100,
  })

  //Function is run whenever we want rain to occur
  const createRain = () => {
    console.log(waterLevel)
    setWaterLevel(Math.min(waterLevel + rainAmount, maxWaterLevel))
    setRainCycles(rainCycles + 1)
    setIsRaining(true)
    setTimeout(() => {
      setIsRaining(false)
    }, 1000 * 25)
  }

  //Randomly generates rain probably called every minute or something
  const randomRain = () => {
    let randNumber = Math.floor(Math.random() * 10)

    if (season){
      if (randNumber < 2){
        console.log("Its Raining")
        createRain()
        return
      } else {
        console.log('no rain')
        return
      }
    } else {
      if (randNumber < 8){
        console.log("Its Raining")
        createRain()
        return
      } else {
        console.log('no Rain')
        return
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

    switch (room) {
      case "Kitchen":
        return <Kitchen initTime={10}></Kitchen>
      default: 
        return
    }
  }

  const diffRoom = roomName => {
    setRoom(roomName)
  }

  /* --- Main Game Timers --- */

  //main timer runs every 30 seconds
  useEffect(() => {
    setTimeout(() => {
      randomRain()
      if (((1000 * 30) * 5) % timePassed === 0){
        setSeason(!season)
      }
  
      setTimePassed(timePassed + 1000 * 30)
    }, 1000 * 30)
  }, [timePassed])

  return (
    <div className="App">
      <div className="topBar">
        {isRaining && <AlertRaining />}
        <p>season: {season ? 'Summer' : 'Winter'}</p> 
        <ButtonWrapper />
      </div>

      {displayRoom()}

      <div className="bottomBar">
        <PlayerBars stats={userStats}/>        
      </div>
    </div>
  );
}

export default App;
