import React from 'react'

function Condition() {
    const [show, setShow] = React.useState(false)
  return (
    <div>
        {!show &&
            <div>hidden message</div>
        }
        <button onClick = {()=>{setShow(!show)}}>magic</button>
    </div>
  )
}

export default Condition