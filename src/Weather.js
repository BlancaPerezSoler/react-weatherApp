import React, {useState} from "react";
import axios from "axios";
 import Loader from 'react-loader-spinner'
export default function Weather(props){
    const[temperature, setTemperature]= useState("");
    
function showWeather(response){
   setTemperature(response.data.main.temp);
}

   
if (temperature){
    return(
    <h4>The weather in {props.city} is {Math.round(temperature)}°C</h4>
   );
} else{
     let apiKey= "bf3b0a962c0f2c5a4bea4daa33ad2c1d";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(showWeather);

 return (
    <div>
       <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
 <h4>Loading temperature for {props.city}...</h4>
 </div>
 );
}

}
