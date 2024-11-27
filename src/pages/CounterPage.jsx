import Container from "react-bootstrap/Container";

import { SecondsCounter } from "../components/SecondsCounter";

export const CounterPage = () => {
  return (
    <Container>
      <h1>Counter Page</h1>
      <SecondsCounter />
    </Container>
  );
};
