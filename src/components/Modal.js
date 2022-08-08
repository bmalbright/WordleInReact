import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function GameModal({ isCorrect, turn, solution }) {


    const [showModal, setShowModal] = useState(true)

    const reload=()=>window.location.reload(false);

    const handleClose = () => {
        setShowModal(false)
        reload();
    };

    // function RefreshPage(event) {
    //     window.location.reload();
    // };


    return (
        <div className='modal'>
            {/* modal for if they win */}
            {isCorrect && (

                <Modal show={showModal} size="sm">
                    <Modal.Header> Congratulations! You Win!</Modal.Header>
                    <Modal.Body className='solution'>
                        {solution}
                    </Modal.Body>
                    <Modal.Body>
                        You found the solution in {turn} guesses.
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose} className="button" size="lg">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )};

            {/* modal for if they lose */}
            {!isCorrect && (
                <Modal show={showModal} size="sm">
                    <Modal.Header> You have used up all of your guesses</Modal.Header>
                    <Modal.Body className='solution'> The answer was {solution} </Modal.Body>
                    <Modal.Body> Better luck next time. </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose} className="button" size="lg">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )};
        </div>
    );
};
