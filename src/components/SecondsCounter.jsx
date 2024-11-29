import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  return (
    <>
      <Container style={{ display: "flex" }}>
        <FontAwesomeIcon
          icon={faClock}
          className="m-2"
          style={{ color: "black", fontSize: "40px" }}
        />
        {String(seconds)
          .split("")
          .map((unit, index) => {
            return <h1 key={index}>{unit}</h1>;
          })}
      </Container>
      <Container className="m-2">
        <Button className="m-1" onClick={() => setSeconds(seconds + 1)}>
          +1
        </Button>
        <Button className="m-1" onClick={() => setSeconds(seconds - 1)}>
          -1
        </Button>
        <Button className="m-1" onClick={() => setSeconds(seconds * 2)}>
          Duplica
        </Button>
        <Button className="m-1" onClick={() => setSeconds(seconds * 0)}>
          Reiniciar
        </Button>
      </Container>
    </>
  );
};
