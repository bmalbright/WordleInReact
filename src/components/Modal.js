import React from 'react';

export default function Modal({ isCorrect, turn, solution }) {

  return (
    <div className='modal'>
        {/* modal for if they win */}
        {isCorrect && (
            <div>
                <h1> Congratulations! You Win!</h1>
                <p className='solution'> {solution} </p>
                <p> You found the solution in {turn} guesses. </p>
                <a href="http://localhost:3000/">
                <button type="submit"> PLAY AGAIN?</button>
                </a>
            </div>
        )};

        {/* modal for if they lose */}
        {!isCorrect && (
            <div>
                <h1> You have used up all of your guesses</h1>
                <p className='solution'> The answer was {solution} </p>
                <p> Better luck next time. </p>
                <a href="http://localhost:3000/">
                <button type="submit"> PLAY AGAIN?</button>
                </a>
            </div>
        )};
    </div>
  );
};
