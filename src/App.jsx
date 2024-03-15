import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Dice from './components/Dice'
import "./App.css";
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
    }

  }, [dice])
  
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random()*6), 
      isHeld: false,
      id: nanoid()
    }
  }
  function allNewDice(){
    const newDice = [];
    for(let i=0;i<10;i++){
      newDice.push(generateNewDie());
    }
    return newDice
  }


  function rollDice(){
    if(!tenzies) {
      setScore((prev) => prev + 1)
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
      
    }
    else {
      setScore(0)
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id
             ? {...die, isHeld: !die.isHeld}
             : die

    }))
  }

  return (
    <Container>
      <Mainbox>
        <Gamebox>
          {tenzies && <Confetti gravity={0.3} />}
          <Heading>
            <h1>TenZies</h1>
            <p>Roll until all dice are the same. Click on the dice to freeze it. Least rolls Wins!
            </p>
          </Heading>
        
          <Dicebox>
            {dice.map(die => <Dice key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)}
          </Dicebox>
          <ButtonBox>
            <button 
             onClick={rollDice}
             > {tenzies ? "Reset" : "Roll"}
            </button>
            
            <h2>Rolls: {score}</h2>
            
          </ButtonBox>
        </Gamebox>
      </Mainbox>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #2b054d;
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
  border: 0.2rem solid white;
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
  padding-left: 9.3rem;

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
    cursor: pointer;

    &:hover {
      background-color: #0000ba;
    }

    &:active {
      box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
    }
  }

`

export default App
