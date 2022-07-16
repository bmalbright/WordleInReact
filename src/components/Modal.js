import React from 'react';

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
                <p className='solution'> {solution} </p>
                <p> You found the solution in {turn} guesses. </p>
                <button onClick={() => window.location.reload(false)}> PLAY AGAIN?</button>
            </div>
        )};

        {/* modal for if they lose */}
        {!isCorrect && (
            <div>
                <h2> You have used up all of your guesses</h2>
                <p className='solution'> The answer was {solution} </p>
                <p> Better luck next time. </p>
                <button onClick={() => window.location.reload(false)}> PLAY AGAIN?</button>
            </div>
        )};
    </div>
  );
};
