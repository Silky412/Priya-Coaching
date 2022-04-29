import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import Effect from './Component/Effect'
import Stopwatch from './Component/Stopwatch';
import Carosoul from './Component/Carosoul'
import Card from './Component/Card/Card'
import Condition from './Component/Condition'
import travel1 from './assets/images/travel1.jpg'
import travel2 from './assets/images/travel2.png'
const data = [
  {name:'deepak',sName:'sharma'},
  {name:'tanish',sName:'sharma'},
  {name:'tamanna',sName:'sharma'},
  {name:'priyanka',sName:'sharma'},
]
function App() {
  const handelData = (data)=>{
    console.log("inside parent",data)
  }
  return (
    <div className="App">
        <Navbar/>
        {/* <Effect image={travel1}/> */}
        <Stopwatch/>
        {/* <div className='cardContainer'>
          <Card name='deepak' sName='sharma' abc = {(value)=>{handelData(value)}} image={travel1}>
            <h1>Leader</h1>
          </Card>
          {data.map((element,index)=>{
            return(
              <>
                {element.name==='tanish' && <Card name={element.name} sName={element.sName} image={travel2}/>}
              </>
            )
          })}
        </div>
        <Condition/> */}
    </div>
  );
}

export default App;
