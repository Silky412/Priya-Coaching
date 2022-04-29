import React,{useEffect, useState} from 'react'
import Card from './Card/Card'

function Stopwatch() {
    const [timer, setTimer] = useState(0)
    const [start, setStart] = useState(false)
    useEffect(()=>{
        console.log('effect running',start)
        let runner
        if(start){
            runner = setInterval(()=>{setTimer(prevState=> prevState+1)},1000)
        }
        else{
            clearInterval(runner)
        }
        return ()=>{
            console.log('runner complete',start)
            return clearInterval(runner)}
    },[start])
  return (
    <Card>
        <button className='btn btn-primary m-1' onClick={()=>{setStart(true)}}>start</button>
        <button className='btn btn-danger m-1' onClick={()=>{setStart(false)}}>stop</button>
        <button className='btn btn-secondary m-1' onClick={()=>{setStart(false);setTimer(0)}}>reset</button>
        <div className='text-success fs-1'>{timer}</div>
    </Card>
  )
}

export default Stopwatch