import Weather from "./Weather";
//import Form from `react-bootstrap/Form`;
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="wrapper">
      <h1>Weather App</h1>
      <form>
        <input className="placeholder" type="text" placeholder="Search city..." />
        <input className="button" type="submit" value="Search" />
      </form>
      </div>



  <Weather />
</div>

  );
}

export default App;
