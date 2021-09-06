import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 36px;
`;

interface GuessesProps {
  letter: string;
}

export const Guesses: React.FC<GuessesProps> = ({ letter }) => {
  return (
    <Container>
      <p>{letter}</p>
    </Container>
  );
};
