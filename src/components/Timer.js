import React from "react";
import './Timer.css'

export default function Timer(props) {
    return (
        <div className="timer">
        {/* can reformat as need be */}
            <p>{props.time}s</p>
        </div>
    )
}