// import React, { useState, useEffect } from 'react';
import waterdrop from '../svgs/rainy.png'
import './alertRaining.css';

const AlertRaining = () => {
    return ( 
        <div className="raining">
            <img className="imgIcon" src={waterdrop} alt="" />
        </div>
     );
}
 
export default AlertRaining;