import React, { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import damGreen from '../../svgs/ScreenGreen.png'
import damDying from "../../svgs/ScreenDrying.png"
import damDead from "../../svgs/ScreenDead.png"
import './DamRoom.css'

const DamRoom = (props) => {
    const [background, setBackground] = useState(damGreen)

    const selectBackground = () => {
        if (props.waterLevel === 0){
            setBackground(damDead)
        }
        else if (props.waterLevel > 0 && props.waterLevel < 666){
            setBackground(damDying)
        }
        else {
            setBackground(damGreen)
        }
    }

    useEffect(() => {
        selectBackground()
    }, [props])

    let style = {margin: "0 1rem"}

    return ( 
        <div className="mainRoom">
            <ProgressBar completed={props.waterLevel/10} style={style}/>
            <img 
                className="main-img"
                src={background} 
                alt="" 
            />
        </div>
     );
}
 
export default DamRoom;