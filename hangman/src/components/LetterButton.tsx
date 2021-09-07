import React from "react";
import styled from "styled-components";
import { Letter, LetterInteractionType } from "../data/alphabet";
import cross from "../images/red-cross.png";
import circle from "../images/circle.png";

const Button = styled.div`
  height: 2em;
  width: 2em;
  border: solid #000f55 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin: 2px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const ButtonCorrect = styled.div`
  background-image: url(${circle});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 70%;
  width: 70%;
  font-weight: bold;
`;
const ButtonWrong = styled.div`
  background-image: url(${cross});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 70%;
  width: 70%;
  font-weight: bold;
`;

interface LetterButtonProps {
  letterData: Letter;
}

export const LetterButton: React.FC<LetterButtonProps> = ({ letterData }) => {
  return (
    <Button>
      {/*Remember only onclick on NotPressed */}
      {letterData.interaction === LetterInteractionType.CorrectGuess && (
        <ButtonCorrect>{letterData.letter}</ButtonCorrect>
      )}
      {letterData.interaction === LetterInteractionType.WrongGuess && (
        <ButtonWrong>{letterData.letter}</ButtonWrong>
      )}
      {letterData.interaction === LetterInteractionType.NotPressed &&
        letterData.letter}
    </Button>
  );
};
