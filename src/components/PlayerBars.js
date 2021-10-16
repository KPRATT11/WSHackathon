import React, { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './PlayerBars.css'

const PlayerBars = (props) => {
    const {stats} = props
    const {thirst, hunger, hygiene, fun} = stats
    return ( 
        <div className="progressContainer">
            <div>
                <h3>Thirst</h3>
                <ProgressBar 
                    className="bar"
                    completed={thirst} 
                    bgColor="#5096F1"
                    height="30px"
                />
            </div>

            <div>
                <h3>Hunger</h3>
                <ProgressBar 
                    className="bar"
                    completed={hunger} 
                    bgColor="#52D858"
                    height="30px"
                />
            </div>

            <div>
                <h3>Hygiene</h3>
                <ProgressBar 
                    className="bar"
                    completed={hygiene} 
                    bgColor="#F2B05C"
                    height="30px"
                />
            </div>

            <div>
                <h3>Fun</h3>
                <ProgressBar 
                    className="bar"
                    completed={fun} 
                    bgColor="#F4DB71"
                    height="30px"
                />
            </div>

        </div>
     );
}
 
export default PlayerBars;