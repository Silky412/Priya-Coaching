import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import Carosoul from './Component/Carosoul'
import Card from './Component/Card/Card'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div style={{margin:'10px'}}>
          <Card/>
        </div>
    </div>
  );
}

export default App;
