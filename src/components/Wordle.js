import React from 'react';
import { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import GameModal from './Modal';
// import Button from 'react-bootstrap/Button';


export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution)
  const [ showModal, setShowModal ] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 3000)
      window.removeEventListener('keyup', handleKeyup)
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 3000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])


 

  // delete this later, when the code is fixed. 
  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

// // trying to add a refresh button
//   function RefreshPage(event) {
//     window.location.reload();

//     const button = document.querySelector('.button');
//     button.addEventListener('click', RefreshPage);
//   };



  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys = {usedKeys}/>
       {showModal && <GameModal isCorrect={isCorrect} turn={turn} solution={solution} />} 
       {/* <Button onClick={RefreshPage} className='button' variant="primary" size="lg"> PLAY AGAIN?</Button> */}
    </div>
  )
}
