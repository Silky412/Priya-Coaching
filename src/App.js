import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import Carosoul from './Component/Carosoul'
import Card from './Component/Card/Card'
import Condition from './Component/Condition'
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
        <div className='cardContainer'>
          <Card name='deepak' sName='sharma' abc = {(value)=>{handelData(value)}}>
            <h1>Leader</h1>
          </Card>
          {data.map((element,index)=>{
            return(
              <>
                {element.name==='tanish' && <Card name={element.name} sName={element.sName}/>}
              </>
            )
          })}
        </div>
        <Condition/>
    </div>
  );
}

export default App;
