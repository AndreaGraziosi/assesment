// import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js'
import BandList from "./BandList"

// import data, {BandCount, BandNames} from './BandCount'

// console.log(data)
// console.log(BandCount)
// console.log(BandNames)

function App() {
  return (
    <div className="App">
      <Heading />
      {/* <BandCount /> */}
      <BandList/>
      
    </div>

  );
}

export default App;
