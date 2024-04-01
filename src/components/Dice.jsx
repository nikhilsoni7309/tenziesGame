import React from 'react'
import styled from 'styled-components'

function Dice(props) {
  
  return (
      <Box 
        style={{backgroundColor: props.isHeld ? "#00ff66" : "white"}}
        onClick={props.holdDice}
      >{props.value}
      </Box>
  )
}


const Box = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 528px) {
    height: 4rem;
    width: 4rem;
  }

  @media (max-width: 428px) {
    height: 3rem;
    width: 3rem;
  }

`

export default Dice
