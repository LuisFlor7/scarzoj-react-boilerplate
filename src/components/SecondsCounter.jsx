import { Container, Button } from "react-bootstrap";

import { useState } from "react";

export const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  return (
    <>
      <Container>
        {String(seconds)
          .split("")
          .map((unit, index) => {
            return <h1 key={index}>{seconds}</h1>;
          })}
      </Container>
      <Container>
        <Button onClick={() => setSeconds(seconds + 1)}>+1</Button>
        <Button onClick={() => setSeconds(seconds - 1)}>-1</Button>
        <Button onClick={() => setSeconds(seconds * 2)}>Duplica</Button>
        <Button onClick={() => setSeconds(seconds / 2)}>Mitad</Button>
        <Button onClick={() => setSeconds(seconds * 0)}>Reiniciar</Button>
      </Container>
    </>
  );
};
