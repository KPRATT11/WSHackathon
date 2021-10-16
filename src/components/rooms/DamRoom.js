import React, { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './DamRoom.css'

const DamRoom = (props) => {
    return ( 
        <div className="mainRoom">
            <ProgressBar completed={props.waterLevel/10}/>
        </div>
     );
}
 
export default DamRoom;