import React from "react";
import './index.css';
import { Container } from "react-bootstrap";

export default function Wordle() {
  return (
    <div >
      <Container classname="wordle">
        <div class="title">
          <h1> Wordle In React! </h1>
        </div>

        {/* <div class="message-container">Message</div>

        <div class="tile-container">Tiles</div>

        <div class="keyboard-container">keyboard</div> */}
      </Container>
    </div>
  );
}
