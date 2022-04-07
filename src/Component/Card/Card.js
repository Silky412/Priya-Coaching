import React from 'react'
import './Card.css'
import { Card as MUICard } from '@mui/material';

function Card() {
  return (
    <div className='cardContainer'>
      <MUICard raised sx={{minWidth:345, minHeight:270}}>
        Hello
      </MUICard>
    </div>
  )
}

export default Card