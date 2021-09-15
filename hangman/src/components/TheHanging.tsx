import React from "react";
import styled from "styled-components";
import hangmanImg0 from "../images/hang0.png";
import hangmanImg1 from "../images/hang1.png";
import hangmanImg2 from "../images/hang2.png";
import hangmanImg3 from "../images/hang3.png";
import hangmanImg4 from "../images/hang4.png";
import hangmanImg5 from "../images/hang5.png";
import hangmanImg6 from "../images/hang6.png";
import hangmanImg7 from "../images/hang7.png";
import hangmanImg8 from "../images/hang8.png";

const hangmanImages = [
  hangmanImg0,
  hangmanImg1,
  hangmanImg2,
  hangmanImg3,
  hangmanImg4,
  hangmanImg5,
  hangmanImg6,
  hangmanImg7,
  hangmanImg8,
];

interface TheHangingProps {
  numberOfTries: number;
}
const Container = styled.div`
  height: 14em;
`;

export const TheHanging: React.FC<TheHangingProps> = ({ numberOfTries }) => {
  return (
    <Container>
      <img
        alt="hangmanpic"
        style={{ height: "100%" }}
        src={hangmanImages[numberOfTries]}
      />
    </Container>
  );
};
