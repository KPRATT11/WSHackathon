import React, { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const DamRoom = (props) => {
    return ( 
        <div>
            <ProgressBar completed={props.waterLevel/100}/>
        </div>
     );
}
 
export default DamRoom;