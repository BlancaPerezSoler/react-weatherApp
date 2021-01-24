
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

  <p>Coded by <a href="https://www.linkedin.com/in/blancaperezsoler/">Blanca Perez Soler</a> <a href="https://github.com/BlancaPerezSoler/react-weatherApp">Open source</a></p>
  
  </div>
  );
}

export default App;
