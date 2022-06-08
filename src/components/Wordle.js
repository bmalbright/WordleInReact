import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup, usedKeys } = useWordle(solution)
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      console.log("you are a winner")
      window.removeEventListener('keyup', handleKeyup)
    }

    if (turn >5 ) {
      console.log("you are a loser")
      window.removeEventListener('keyup'. handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  // delete this later, when the code is fixed. 
  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys = {usedKeys}/>
    </div>
  )
}
