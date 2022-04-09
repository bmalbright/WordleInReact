import React from "react";
import "..src/App.css";
import { Container } from "react-bootstrap";

const Wordle = () => {
  return (
    <div>
      <Container>
        <div class="title">
          <h1>Wordle In React</h1>
        </div>

        <div class="message-container">Message</div>

        <div class="tile-container">Tiles</div>

        <div class="keyboard-container">keyboard</div>
      </Container>
    </div>
  );
};

export default Wordle;