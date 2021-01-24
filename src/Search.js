import React, {useState} from "react";
import { Container, Row, Col } from 'react-grid-system';


export default function Search(){

  const[city, setCity]=useState("");
  


  function handleSubmit(event){
  event.preventDefault();
  
  }

  function handleCity(event){
    event.preventDefault();
    setCity(event.target.value)
  
}

    return(
        <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input className="placeholder" type="text" placeholder="Search city..." onChange={handleCity}/>
        <button > Search </button>
      </form>
      

      <Container>
        <div className="wrap-container">
     <Row>
       
    <Col sm={4}>
<div className="city-name">
    <h1>{city}</h1>
    <div className="description-weather"> Cloudy</div>  
    </div>  
    <div className="Col-4 col-md-4 current-date">
       Last updated 12:20<br /> 
</div>   
</Col>

<Col sm={4}>
    <div className="emoji-container">
    <img 
    src="https://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_light_color_96dp.png"  
    className="emoji"
    alt="emoji weather" 
    />
    </div>
</Col>

<Col sm={4}>
    
    <div className="currentTemperature"> 20
    </div> 

    <div className="float-sm-right">
    <a className="active" href="#">C</a> /
    <a  href="#">F</a> 
    </div>
    <ul>
        <li><em>Humidity</em> :59%</li>
        <li><em> wind</em>:60km/h</li>
    </ul>
  </Col>  
</Row>
</div>
</Container>
</div>
    )
}