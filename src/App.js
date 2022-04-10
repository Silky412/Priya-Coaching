import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import Carosoul from './Component/Carosoul'
import Card from './Component/Card/Card'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='cardContainer'>
          <Card name='deepak' sName='sharma'/>
          <Card name='priya' sName='sharm'/>
          <Card name='tanish' sName='shar'/>
          <Card name='tamanna' sName='sha'/>
          <Card name='laksh' sName='sh'/>
        </div>
    </div>
  );
}

export default App;
