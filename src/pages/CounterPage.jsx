import Container from "react-bootstrap/Container";

import { SecondsCounter } from "../components/SecondsCounter";

export const CounterPage = () => {
  return (
    <Container>
      <h1>Counter Content</h1>
      <SecondsCounter />
    </Container>
  );
};
