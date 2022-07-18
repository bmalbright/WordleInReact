import React from 'react';
import { useState } from 'react';

import Wordle from './Wordle';

export default function Modal({ isCorrect, turn, solution }) {

    // function replayWordle() {
    //     window.location.reload(false)
    // }

    // const {width, height} = useWindoSize()

    const [ setShowModal ] = useState(true)

    const handleClose = () => { 
        setShowModal(false) 
    };

    // const reload=()=>window.location.reload();

  return (
    <div className='modal'>
        {/* modal for if they win */}
        {isCorrect && (
            <div>
                <h2> Congratulations! You Win!</h2>
                <br/>
                <h2 className='solution'> {solution} </h2>
                <br/>
                <h3> You found the solution in {turn} guesses. </h3>
                
                <button onClick={handleClose} onExit={Wordle}> PLAY AGAIN?</button>
                
            </div>
        )};

        {/* modal for if they lose */}
        {!isCorrect && (
            <div>
                <h2> You have used up all of your guesses</h2>
                <h2 className='solution'> The answer was {solution} </h2>
                <br/>
                <h3> Better luck next time. </h3>
                
                <button onClick={handleClose} onExit={Wordle}> PLAY AGAIN?</button>
                
            </div>
        )};
    </div>
  );
};
