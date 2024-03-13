import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Dice from './components/Dice'
import "./App.css";


function App() {
  const [dice, setDice] = useState(allNewDice())
 
  function allNewDice(){
    const newDice = [];
    for(let i=0;i<10;i++){
      newDice.push(Math.ceil(Math.random()*6));
    }
    return newDice
  }

  return (
    <Container>
      <Mainbox>
        <Gamebox>
          <Heading>
            <h1>TenZies</h1>
            <p>Roll until all dice are the same. Click on the dice to freeze it. Least rolls Wins!
            </p>
          </Heading>
        
          <Dicebox>
            {dice.map(die => <Dice value={die} />)}
          </Dicebox>
          <ButtonBox>
            <h2>Reset</h2>
            <button>Roll</button>
            <h2>Rolls: 0</h2>
            
          </ButtonBox>
        </Gamebox>
      </Mainbox>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f8f896;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
const Mainbox = styled.div`
  height: 40rem;
  width: 40rem;
  background-color: #062a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  border: 0.3rem solid white;
  
`
const Gamebox = styled.div`
  height: 35rem;
  width: 35rem;
  background-color: #f5d7dc;
  border-radius: 2rem;
  border: 0.3rem solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Heading = styled.div`
  width: 100%;
  height: 12rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-weight: bold;
    padding-top: 1.5rem;
  }
`


const Dicebox = styled.div`
  height: 12rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
`

const ButtonBox = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 1.3rem;

  button {
    background-color: blue;
    color: white;
    justify-self: center;
    height: 3rem;
    width: 6rem;
    border-radius: 0.5rem;
    border-style: none;
    font-size: 1.2rem;
    font-weight: bold;
  }

`

export default App
