import React from "react";
import styled from "styled-components";

import { HangmanWord as HangmanWordType, GuessType } from "../modules/hangman";

interface HangmanWordProps {
  word: Array<HangmanWordType>;
}
const Container = styled.div`
  font-size: 3em;
  white-space: pre;
  display: flex;
`;

export const HangmanWord: React.FC<HangmanWordProps> = ({ word }) => {
  const whatsDisplayed = (letter: HangmanWordType): string => {
    let display: string = "";
    switch (letter.guessed) {
      case GuessType.Hidden:
        display = "_";
        break;
      case GuessType.Space:
        display = " ";
        break;
      case GuessType.Revealed:
        display = letter.letter;
        break;
      default:
        display = letter.letter;
    }

    return display;
  };
  return (
    <Container>
      {word.map((letter: HangmanWordType, id: number) => (
        <div key={id}>{whatsDisplayed(letter)}</div>
      ))}
    </Container>
  );
};
