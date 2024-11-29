import React from "react";
import { Container } from "react-bootstrap";

import { SecondsCounter } from "../components/SecondsCounter";

function TimerPage() {
  return (
    <>
      <Container>
        <h1 className="m-2"> Utiliza nuestro contador de segundos</h1>
      </Container>
      <SecondsCounter />
    </>
  );
}

export default TimerPage;
