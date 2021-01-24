import React from "react";
import "./Forecast.css";


export default function Forecast(){
    return(
        <div className="forecast">
<p>12.00</p> <br/> 
    <img 
    src="https://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_light_color_96dp.png"  
    className="emoji-forecast"
    alt="emoji weather" 
    />
    <div>12ºC/7ºC</div>
    
    </div>
    );
}
