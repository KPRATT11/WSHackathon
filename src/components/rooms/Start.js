import React from "react";
import './Start.css'
import normDuck from '../../svgs/ArmsDownDuck.png'
import RoomButton from '../Button'
import arrow from '../../svgs/arrowRight.png'

export default function Start(props) {
    return (
        <div className="startScreen">
            <img 
                src={normDuck} 
                alt="" />
            <RoomButton 
                icon={arrow} 
                alt="water droplet" 
                func={props.func}
                room="Kitchen"
                />
        </div>
    )
}