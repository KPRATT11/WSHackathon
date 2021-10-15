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
            onClick={toggleShow}
            >
            <button className="showHide">Show/Hide</button>
            {showing &&             
                <div className="roomButtons">
                    <Button icon="../svgs/waterDrop.svg" alt="water droplet"/>
                </div>
            }
        </div>
     );
}
 
export default ButtonWrapper;