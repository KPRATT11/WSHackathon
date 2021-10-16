import React, { useState } from 'react';
import RoomButton from './Button'
import waterdrop from '../svgs/waterDrop.svg'

const ButtonWrapper = (props) => {
    const [showing, setShowing] = useState(true)

    const toggleShow = () => {
        setShowing(!showing)
    }
    
    return ( 
        <div 
        
            className="ButtonWrapper"
            >
            <button className="showHide" onClick={toggleShow}>Show/Hide</button>
            {showing &&             
                <div className="roomButtons">
                    <RoomButton 
                        icon={waterdrop} 
                        alt="water droplet" 
                        func={props.roomFunc}
                        room="Kitchen"
                        />
                </div>
            }
        </div>
     );
}
 
export default ButtonWrapper;