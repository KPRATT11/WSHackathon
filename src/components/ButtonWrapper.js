import React, { useState } from 'react';
import Button from './Button'
import './ButtonWrapper.css'
import waterdrop from '../svgs/waterDrop.svg'
import cookie from '../svgs/cookie.png'

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
                    <Button 
                        icon={cookie} 
                        alt="water droplet" 
                        func={props.roomFunc}
                        room="Kitchen"
                        />
                    <Button 
                        icon={waterdrop} 
                        alt="water droplet" 
                        func={props.roomFunc}
                        room="Dam"
                        />
                </div>
            }
        </div>
     );
}
 
export default ButtonWrapper;