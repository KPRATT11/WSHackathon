import React, { useState, useEffect } from 'react';
import Timer from '../Timer';

export default function Kitchen(props) {
    
    const [timeLeft, setTimeLeft] = useState(props.initTime)

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(Math.max(timeLeft - 1, 0))
        }, 1000)
    }, [timeLeft])

    return (
        <div className="kitchen">
            <p>hello</p>
            <Timer time={timeLeft}/>
        </div>
    )
}
