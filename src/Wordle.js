import React from "react";
// import './Wordle.css';
// import { Container } from "react-bootstrap";

function Wordle() {
  return (
    <div>
      {/* <Container className="Wordle"> */}
      <div className="title">
        <h1> Wordle In React! </h1>
      </div>

      <div className="message-container">
        <p>Message</p>
      </div>

      <div className="tile-container">
        <p>Tiles</p>
      </div>

      <div className="keyboard-container">
        <p>keyboard</p>
      </div>
      {/* </Container> */}
    </div>
  );
}

console.log('message');

export default Wordle;
