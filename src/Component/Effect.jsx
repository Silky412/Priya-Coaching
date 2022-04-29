import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
function Effect(props) {
    // console.log('run1')  // component will mount
    const [count,setCount] = useState(0)
    const [count2, setCount2] = useState(100)
    useEffect(()=>{
        console.log('run1')
    },[count2,count])
  return (
    <>
    <Card image = {props.image}>
        <button className='btn btn-primary' onClick={()=>{setCount(count+1)}}>increment</button>
        <button className='btn btn-secondary' onClick={()=>{setCount(count-1)}}>decrement</button>
        <div>Count:- {count}</div>
        <button className='btn btn-primary' onClick={()=>{setCount2(count2+1)}}>increment2</button>
        <button className='btn btn-secondary' onClick={()=>{setCount2(count2-1)}}>decrement2</button>
        <div>Count2:- {count2}</div>
    </Card>
    </>
  )
}

export default Effect

// component did mount :- useEffect(callback,[])
//component did update :- useEffect(callback) on every upadte it will work , useEffect(callback, [state]) on update of state it will work
// component will unmount:- useffect(callback{ return ()=>{}},[])