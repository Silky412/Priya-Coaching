import React,{useState} from 'react'
import './Card.css'
import { Card as MUICard } from '@mui/material';

function Card(props) {
  const [a,setA] = useState(15)
  let b = 15
  const {name, sName} = props
  console.log(name,sName)
  const handleClick = ()=>{
      setA(a+1)
  }
  return (
      <MUICard raised sx={{width:345, minHeight:270, margin: '10px'}}>
        {a}
        <br/>
        <button className='btn btn-secondary' onClick={()=>{handleClick()}}>update</button>
        <h1>{props.name}</h1>
      </MUICard>
  )
}

export default Card

// react connot understand normal variable change hence cannot update the browser screen
// to handle changes in react we use state variable on update of state variable react component rerender

//how to share data from parent to child 
// destructuring of object and array
// how to use useState  => 1st hook of react