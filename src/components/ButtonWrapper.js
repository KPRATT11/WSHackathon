import React, { useState } from 'react';

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
                    <button>Place holder</button>
                    <button>Place holder</button>
                    <button>Place holder</button>
                    <button>Place holder</button>
                    <button>Place holder</button>
                </div>
            }
        </div>
     );
}
 
export default ButtonWrapper;