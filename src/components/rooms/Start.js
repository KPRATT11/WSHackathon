import React from "react";
import './Start.css'
import normDuck from '../../svgs/ArmsDownDuck.png'
import RoomButton from '../Button'
import arrow from '../../svgs/arrowRight.png'

export default function Start(props) {
    return (
        <div className="startScreen" 
        onClick={() => {props.roomFunc('Dam')}}>
            <img className="duck"
                src={normDuck} 
                alt="" />
            <h1 className="titleScreenText scale-in-center">Live Ducky Live</h1>
            <h1 className="startScreenText heartbeat">Tap to Start</h1>
        </div>
    )
}