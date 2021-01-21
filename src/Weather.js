import React, {useState} from "react";
import axios from "axios";

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

 return <h4><h4>Loading temperature for {props.city}...</h4>;</h4>
}

}
