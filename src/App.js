import Weather from "./Weather";
import { Container, Row, Col } from 'react-grid-system';
import Forecast from "./Forecast";
import Search from "./Search";
import './App.css';

function App() {
  return (
    <div className="App">
      <Search/>
        
       <br/><br/>
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
