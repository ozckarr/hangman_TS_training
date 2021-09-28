import React from "react";
import styled from "styled-components";

interface InstructionsProps {
  wrongGuesses: number;
  winCheck: boolean;
}
const Container = styled.div`
  width: 100%;
`;

export const Instructions: React.FC<InstructionsProps> = ({
  wrongGuesses,
  winCheck,
}) => {
  let printOut: JSX.Element = <Container>Guess a letter</Container>;

  if (winCheck) {
    printOut = <Container>You Won!</Container>;
  }
  if (wrongGuesses > 7) {
    printOut = <Container>Game Over!</Container>;
  }
  return printOut;
};
