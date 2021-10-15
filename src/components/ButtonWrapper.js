import React, { useState } from 'react';
import Button from './Button'

const ButtonWrapper = () => {
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
                    <Button icon="./src/svgs/waterDrop.svg" alt="water droplet"/>
                </div>
            }
        </div>
     );
}
 
export default ButtonWrapper;