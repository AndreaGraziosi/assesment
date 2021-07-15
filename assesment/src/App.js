import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js'
import BandList from "./BandList"
import BandCount from "./BandCount"

function App() {
  return (
    <div className="App">
      <Heading />
      <BandCount />
      <BandList/>
    </div>

  );
}

export default App;
