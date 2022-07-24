import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Wordle from './Wordle';

export default function GameModal({ isCorrect, turn, solution }) {


    const [showModal, setShowModal] = useState(true)

    const handleClose = () => {
        setShowModal(false)
    };

    const Reload=()=>window.location.reload();

    return (
        <div className='modal'>
            {/* modal for if they win */}
            {isCorrect && (

                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header> Congratulations! You Win!</Modal.Header>
                    <Modal.Body className='solution'>
                        {solution}
                    </Modal.Body>
                    <Modal.Body>
                        You found the solution in {turn} guesses.
                    </Modal.Body>
                    {/* <button onClick={handleClose} onExit={Wordle}> PLAY AGAIN?</button> */}
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose} onClose={Reload}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )};

            {/* modal for if they lose */}
            {!isCorrect && (
                <div>
                    <h2> You have used up all of your guesses</h2>
                    <h2 className='solution'> The answer was {solution} </h2>
                    <br />
                    <h3> Better luck next time. </h3>

                    <button onClick={handleClose} onExit={Wordle}> PLAY AGAIN?</button>

                </div>
            )};
        </div>
    );
};
