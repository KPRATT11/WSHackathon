import React, { useState } from 'react';

const ButtonWrapper = () => {
    const [showing, setShowing] = useState(true)

    return ( 
        <div className="ButtonWrapper">
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