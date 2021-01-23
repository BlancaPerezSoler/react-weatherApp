import Weather from "./Weather";
import { Container, Row, Col } from 'react-grid-system';
import Forecast from "./Forecast";
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="wrapper">
      <form>
        <input className="placeholder" type="text" placeholder="Search city..." />
        <input className="button" type="submit" value="Search" />
      </form>
      </div>
      <Container>
        <div className="wrap-container">
     <Row>
       
    <Col sm={4}>
<div className="city-name">
    <h1>Amsterdam</h1>
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
</Container> <br/><br/>
<p>Forecast for next hours</p>
<Container>
  <Row>
    <Col>
    <Forecast />
    </Col>
  <Col>
  <Forecast />
  
  </Col>
  <Col>
  <Forecast />
  
  </Col><Col>
  <Forecast />
  
  </Col><Col>
  <Forecast />
  
  </Col>
  </Row>
</Container>
  <Weather />
  </div>
  );
}

export default App;
