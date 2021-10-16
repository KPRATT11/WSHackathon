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
        else{
            setBackground(damGreen)
        }
    }

    useEffect(() => {
        selectBackground()
    }, [props])

    return ( 
        <div className="mainRoom imgs">
            <img 
                className="background"
                src={background} 
                alt="" 
            />
            <ProgressBar completed={props.waterLevel/10}/>
        </div>
     );
}
 
export default DamRoom;