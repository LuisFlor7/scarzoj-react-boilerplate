import { Container } from "react-bootstrap";

import { SecondsCounter } from "../components/SecondsCounter";

function TimerPage() {
  return (
    <>
      <Container>
        <h1> Utiliza nuestro contador de segundos</h1>
      </Container>
      <SecondsCounter />
    </>
  );
}

export default TimerPage;
