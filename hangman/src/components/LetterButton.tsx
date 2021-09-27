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
  user-select: none;
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
  handleClick: (guessedLetter: string) => void;
  wrongGuesses: number;
  winCheck: boolean;
}

export const LetterButton: React.FC<LetterButtonProps> = ({
  letterData,
  handleClick,
  wrongGuesses,
  winCheck,
}) => {
  return (
    <>
      {/*Remember only onclick on NotPressed */}
      {letterData.interaction === LetterInteractionType.CorrectGuess && (
        <Button>
          <ButtonCorrect>{letterData.letter}</ButtonCorrect>
        </Button>
      )}
      {letterData.interaction === LetterInteractionType.WrongGuess && (
        <Button>
          <ButtonWrong>{letterData.letter}</ButtonWrong>
        </Button>
      )}
      {letterData.interaction === LetterInteractionType.NotPressed &&
        (wrongGuesses <= 7 && !winCheck ? (
          <Button onClick={() => handleClick(letterData.letter)}>
            {letterData.letter}
          </Button>
        ) : (
          <Button>{letterData.letter}</Button>
        ))}
    </>
  );
};
