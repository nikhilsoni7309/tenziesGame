import React from 'react'
import styled from 'styled-components'

function Dice(props) {
  return (
      <Box>{props.value}</Box>
  )
}


const Box = styled.div`
  background-color: white;
  height: 5rem;
  width: 5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

`

export default Dice
