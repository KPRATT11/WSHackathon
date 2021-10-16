import React, { useState, useEffect } from 'react';
import './Kitchen.css'
import Timer from '../Timer';
import kitchenPlain from '../../svgs/kitchenPlain.jpg'
import water from '../../svgs/sinkoverflow.png'
import kitchenHazard from '../../svgs/kitchenHazard.jpg'
import normDuck from '../../svgs/ArmsDownDuck.png'
import upDuck from '../../svgs/ArmsUpDuck.png'
import angryDuck from '../../svgs/AngryDuck.png'

export default function Kitchen(props) {

    const [waterRunning, setWaterRunning] = useState(true)
    
    const [timeLeft, setTimeLeft] = useState(props.initTime)

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(Math.max(timeLeft - 1, 0))
        }, 1000)
    }, [timeLeft])

    let kitchenType = waterRunning ? kitchenHazard : kitchenPlain

    let message
    let duck
    
    if (waterRunning && timeLeft) {
        message = 'Stop the Tap!!!'
        duck = upDuck
    } else if (waterRunning && !timeLeft) {
        message = 'You ran out of time!'
        duck = angryDuck
    } else {
        message = 'Good Work! You saved Water!'
        duck = normDuck
    }

    return (
        <div 
            className="kitchen"
            >
            <h1>{message}</h1>
            <div className="imgs">
                <img 
                    src={kitchenType} 
                    alt="" 
                    className="background"
                    />
                <img 
                    src={water} 
                    alt=""
                    className="water" 
                    hidden={!waterRunning}
                    onClick={() => setWaterRunning(false)}
                    />
                <img 
                    className="duck"
                    src={duck} 
                    alt="" 
                    />
            </div>
            <Timer time={timeLeft}/>
        </div>
    )
}
