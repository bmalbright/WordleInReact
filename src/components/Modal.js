import React from 'react';
import Wordle from './Wordle';

export default function Modal({ isCorrect, turn, solution }) {

    // function replayWordle() {
    //     window.location.reload(false)
    // }

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
                
                <button onClick={() => Wordle}> PLAY AGAIN?</button>
                
            </div>
        )};

        {/* modal for if they lose */}
        {!isCorrect && (
            <div>
                <h2> You have used up all of your guesses</h2>
                <h2 className='solution'> The answer was {solution} </h2>
                <br/>
                <h3> Better luck next time. </h3>
                
                <button onClick={() => Wordle}> PLAY AGAIN?</button>
                
            </div>
        )};
    </div>
  );
};
